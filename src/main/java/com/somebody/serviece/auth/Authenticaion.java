package com.somebody.serviece.auth;

import org.springframework.ui.Model;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.web.servlet.ModelAndView;

import com.somebody.db.CommonMethod;
import com.somebody.db.MapperBon;
import com.somebody.db.MapperYong;
import com.somebody.serviece.member.Member;

import beans.Centers;
import beans.Members;
import beans.Staffs;
import kr.co.icia.plzec.services.Encryption;
import kr.co.icia.plzec.services.ProjectUtils;

@Service
public class Authenticaion extends CommonMethod {

	@Autowired
	private MapperYong my;
	@Autowired
	private MapperBon mb;

	private ModelAndView mav;

	@Autowired
	private ProjectUtils pu;
	@Autowired
	private Encryption enc;
	@Autowired
	HttpSession session;
	@Autowired
	Member mes;

	@Autowired
	JavaMailSenderImpl javaMail;

	String page = null;
	String message = null;
	boolean tran = false;

	public Authenticaion() {
		mav = new ModelAndView();

	}

	public ModelAndView backController(String sCode, Centers ct) {
		switch (sCode) {
		case "J02":
			goJoinPage();
			break;
		}
		return mav;
	}

	public ModelAndView backController(String sCode, Members me) {

		switch (sCode) {
		case "J01":
			goJoinPage();
			break;

		case "J03":
			meJoin(me);
			break;
		}
		return mav;
	}

	public ModelAndView backControllerCT(String sCode, Staffs sf) {

		switch (sCode) {
		case "A03":
			ctLogin(sf);
			break;
		case "A04":
			logOutCt(sf);
			break;
		case "A05":
			sendEmail(sf);
			break;

		case "A06":
			modPw(sf);
			break;

		}
		return this.mav;
	}

	public ModelAndView backControllerME(String sCode, Model model) {

		switch (sCode) {
		case"A01":
			dGaJaPage(model);
			break;
		case "A02":
			meLogin(model);
			break;
		case "A04":
			logOutMe(model);
			break;

		case "C14":
			checkMePw(model);
			break;

		}
		return this.mav;
	}


	public void backController2(String sCode, Model md) {
		switch (sCode) {
		case "C01":
			checkMeEmailNum(md);
			break;

		case "C02":
			checkCtCode(md);
			break;
		}
	}
	
	private void dGaJaPage(Model model) {
		String page=null;
		try {
			if (this.pu.getAttribute("sfInfo") != null && this.pu.getAttribute("meInfo") == null ) {
				page = "meMg";
			}else if (this.pu.getAttribute("sfInfo") == null && this.pu.getAttribute("meInfo") != null ) {
				page = "infoLine";
			}else if (this.pu.getAttribute("sfInfo") == null && this.pu.getAttribute("meInfo") == null ) {
				page = "home";
			}
			this.mav.setViewName(page);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private ModelAndView sendEmail(Staffs sf) {
		String message = "정보가 일치하지 않습니다.";
		String page = "sendEmailForm";
		String object = "sfEmail";
		String meadress = this.mb.ismeEmail(sf);
		String sfadress = this.mb.issfEmail(sf);

		String adress = null;

		if (meadress != null) {
			adress = meadress;

		} else if (sfadress != null) {
			adress = sfadress;
		} else {
			mav.addObject(object, message);
			mav.setViewName(page);
		}

		/* Email Info */
		boolean sended = false;

		String contents = "안녕하세요. somebody 플랫폼 입니다. 비밀번호를 수정하려면 링크를 클릭하여 페이지로 이동하여 주세요.";
		String aftersendmsg = "<a href='http://localhost/modPwPage'>비밀번호 변경 요청</a>";
		String sender = "zmffhqj7144@naver.com";

		if (sf.getSfEmail().equals(adress)) {

			/* Creation MimeMessage */
			MimeMessage extendemail = javaMail.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(extendemail, "UTF-8");
			// String aftersendmsg = "<a href='http://localhost/EmailAuth?authCode="+ auth +
			// "'>비번변경페이지이동</a>";
			try {
				helper.setFrom(sender);
				helper.setTo(sf.getSfEmail());
				helper.setSubject(contents);
				helper.setText(aftersendmsg, true);

				javaMail.send(extendemail);
				sended = true;
			} catch (MessagingException e) {
				sended = false;
				e.printStackTrace();
			}

			/* message 작성 */
			message = sended ? "메일을 발송하였습니다. 메일로 접속하여 링크를 확인하여 주십시오." : "메일 발송 실패!";

			mav.addObject(object, message);
			mav.setViewName(page);
		} else {
			message = sended ? "이메일이 일치합니다." : "일치하는 이메일이 없습니다. 회원가입을 해주세요.";
			mav.addObject(object, message);
			mav.setViewName(page);

		}
		return this.mav;
	}

	private void checkCtCode(Model md) {
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		md.addAttribute("checkCtCode", this.my.checkCtCode());
		tranend(true);
	}

	private void checkMeEmailNum(Model md) {
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		md.addAttribute("checkMeEmailNum", this.my.checkMeEmailNum());
		tranend(true);
	}

	public void checkMePw(Model model) {

	}

	private void goJoinPage() {
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		mav.addObject("maxMeCode", this.my.maxCode());
		mav.setViewName("join");
		tranend(true);

	}

	public ModelAndView meLogin(Model model) {

		String pw = mb.meLogin((Members) model.getAttribute("send"));

		this.tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED,
				false);
		try {
				if(pw != null) {
				if (enc.matches(((Members) model.getAttribute("send")).getMePw(), enc.encode(pw))) {
					this.mav.addObject("meInfo", this.mb.meInfo((Members) model.getAttribute("send")));
					tran = true;
					this.tranend(tran);
					pu.setAttribute("meInfo", this.mb.meInfo((Members) model.getAttribute("send")));
					session.setMaxInactiveInterval(100 * 100);

					this.mav.setViewName("infoLine");

				}} else {
					Members me = new Members();
					me.setCtCode("비밀번호가 일치하지 않습니다.");
					this.mav.setViewName("home");
					this.mav.addObject("meCode", me.getCtCode());
				}
			
		} catch (Exception e) {

			e.printStackTrace();
		}
		return this.mav;

	}

	public ModelAndView ctLogin(Staffs sf) {
		String pw = this.mb.sfLogin(sf);

		this.tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED,
				false);

		try {
			if (this.pu.getAttribute("sfInfo") == null) {
				if (enc.matches(sf.getSfPw(), pw)) {
					sf.setAhType("A1");
					if (this.convertToBoolean(this.mb.insertAccessHistory(sf))) {
						sf = this.mb.sfInfo(sf);
						this.mav.addObject("sfInfo", sf);
						this.mav.addObject("ctCode", sf.getCtCode());
						tran = true;
						this.tranend(tran);
						pu.setAttribute("sfInfo", sf);
						this.mav.setViewName("meMg");

						session.setMaxInactiveInterval(100 * 100);

					} else {
						System.out.println("인서트실패");

					}

				} else {
					this.message = "정보가 일치하지 않습니다.";
					this.mav.addObject("ctCode", this.message);
					this.mav.setViewName("home");

				}

			} else {
				System.out.println("세션있어서 로그인 안됨");
				pu.removeAttribute("sfInfo");//세션제거
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return this.mav;

	}

	public ModelAndView logOutMe(Model model) {

		try {
			this.mav.getModel().clear(); // 모델엔뷰 객체 지우기
			pu.removeAttribute("meInfo");
		} catch (Exception e) {

			e.printStackTrace();
		}

		mav.setViewName("home");
		return this.mav;

	}

	public void logOutCt(Staffs sf) {
		page = "redirect:/";// 기본페이지로 이동
		this.mav.getModel().clear(); // 모델엔뷰 객체 지우기
		try {

			sf.setAhType("A2");
			this.convertToBoolean(this.mb.insertAccessOutHistory(sf));
			
		} catch (Exception e) {

			e.printStackTrace();
		} finally {
			try {
				pu.removeAttribute("sfInfo");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		this.mav.setViewName(page);

	}

	public ModelAndView modPw(Staffs sf) {
		String page = "modPw";

		String mepw = this.mb.ismeEmail(sf);
		String sffpw = this.mb.issfEmail(sf);

		sf.setSfPw(enc.encode(sf.getSfPw()));
		if (mepw != null) {

			if (this.convertToBoolean(mb.modPwMe(sf))) {
				mav.addObject("sfEmail", "회원님 정상적으로 비밀번호가 변경되었습니다.");
				mav.setViewName(page);
			} else {
				mav.addObject("sfEmail", "회원님 업데이트 안됐어여");
				mav.setViewName(page);

			}
		} else if (sffpw != null) {

			if (this.convertToBoolean(mb.modPwSf(sf))) {
				mav.addObject("sfEmail", "매장고객님 정상적으로 비밀번호가 변경되었습니다.");
				mav.setViewName(page);
			} else {
				mav.addObject("sfEmail", "매장님 비번변경 안됐어여");
				mav.setViewName(page);
			}
		}
		return this.mav;
	}

	public void ctJoin(Centers ct) {
		page = "join";
		String msg = "가입실패~!";
		this.tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED,
				false);
		ct.setSfPw(this.enc.encode(ct.getSfPw()));
		if (convertToBoolean(this.my.ctJoin(ct))) {
			if (convertToBoolean(this.my.firstSfJoin(ct))) {
				page = "redirect:/";
				tran = true;
				msg = "가입성공~!";
			}
		}
		this.tranend(tran);
		mav.addObject("msg", msg);
		mav.setViewName(page);
	}

	public void meJoin(Members me) {
		page = "join";
		String msg = "가입실패~!";
		this.tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED,
				false);
		me.setMePw(this.enc.encode(me.getMePw()));
		if (convertToBoolean(this.my.meJoin(me))) {
			page = "redirect:/";

			tran = true;
			msg = "가입성공~!";
		}
		this.tranend(tran);
		mav.addObject("msg", msg);
		mav.setViewName(page);
	}
}
