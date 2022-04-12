package com.somebody.serviece.member;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

import com.somebody.db.CommonMethod;
import com.somebody.db.MapperBon;
import com.somebody.db.MapperDong;
import com.somebody.db.MapperUone;
import com.somebody.db.MapperYong;

import beans.Inbodys;

@Service
public class Inbody extends CommonMethod {
	@Autowired
	private MapperBon mb;
	private ModelAndView mav;

	String msg = null;

	public Inbody() {
		this.mav = new ModelAndView();
	}

	public ModelAndView backController(String sCode, ArrayList<ArrayList<String>> list, Model model) {

		switch (sCode) {

		case "M09":
			insInbody(list, model);
			break;

		}
		return this.mav;

	}

	public void insInbody(ArrayList<ArrayList<String>> filters, Model model) {
		Inbodys inbody = new Inbodys();

		for (int i = 0; i < filters.size()-2; i++) { // 행
			if(filters.get(i).get(0).equals("false")) {
				insInbodyDetail(filters,model);
				break;
			}
			inbody.setCtCode(filters.get(i).get(0));
			inbody.setMeCode(filters.get(i).get(1));

			try {
				this.mb.insInbody(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("이미 오늘 날짜에 인바디등록이 되어있습니다. 내일 시도하여 주십시오.");
				model.addAttribute("msg", inbody);
				break;
			}
		}
		
	}
	
	public void sendmsg(Model model) {
		Inbodys inbody = new Inbodys();

		try {
			System.out.println("메시지제어");
			}
		catch (Exception e) {
			e.getStackTrace();
		}finally {
			inbody.setMsg("인바디가 성공적으로 등록되었습니다.");
			model.addAttribute("msg", inbody);
			}
		}
				
	

	public void insInbodyDetail(ArrayList<ArrayList<String>> filters, Model model) {
		Inbodys inbody = new Inbodys();

		for (int i = 0; i < filters.size(); i++) {
			inbody.setMeCode(filters.get(i).get(1));

			if(inbody.getMeCode().equals("false")) {
				sendmsg(model);
				break;
				
				
			}else {
			// 인바디 DT (회원코드+기록일자, datacode, 값 카운트에 기록)
			inbody.setIbDaCode("10000");// 신장(10000)
			inbody.setIdCount(filters.get(i).get(2));
			
			
			try {
		
				this.mb.insInbodyDetail(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("일시적인 오류입니다. 본사에 문의해주십시오.");
				model.addAttribute("msg", inbody);
				break;
			}
		

			inbody.setIbDaCode("10001");// 체중(10001)
			inbody.setIdCount(filters.get(i).get(3));
			try {
				this.mb.insInbodyDetail(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("일시적인 오류입니다. 본사에 문의해주십시오.");
				model.addAttribute("msg", inbody);
				break;
			}
		

			// 골격근량(10002)
			inbody.setIbDaCode("10002");
			inbody.setIdCount(filters.get(i).get(4));
			try {
				this.mb.insInbodyDetail(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("일시적인 오류입니다. 본사에 문의해주십시오.");
				model.addAttribute("msg", inbody);
				break;
			}
		
			// 체지방량(10003)
			inbody.setIbDaCode("10003");
			inbody.setIdCount(filters.get(i).get(5));
			try {
				this.mb.insInbodyDetail(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("일시적인 오류입니다. 본사에 문의해주십시오.");
				model.addAttribute("msg", inbody);
				break;
			}
		
			// 체수분함유량(10004)
			inbody.setIbDaCode("10004");
			inbody.setIdCount(filters.get(i).get(6));
			try {
				this.mb.insInbodyDetail(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("일시적인 오류입니다. 본사에 문의해주십시오.");
				model.addAttribute("msg", inbody);
				break;
			}
		
			// 단백질(10005)
			inbody.setIbDaCode("10005");
			inbody.setIdCount(filters.get(i).get(7));
			try {
				this.mb.insInbodyDetail(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("일시적인 오류입니다. 본사에 문의해주십시오.");
				model.addAttribute("msg", inbody);
				break;
			}
		
			// 무기질(10006)
			inbody.setIbDaCode("10006");
			inbody.setIdCount(filters.get(i).get(8));
			try {
				this.mb.insInbodyDetail(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("일시적인 오류입니다. 본사에 문의해주십시오.");
				model.addAttribute("msg", inbody);
				break;
			}
		
			// BMI(10007)
			inbody.setIbDaCode("10007");
			inbody.setIdCount(filters.get(i).get(9));
			try {
				this.mb.insInbodyDetail(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("일시적인 오류입니다. 본사에 문의해주십시오.");
				model.addAttribute("msg", inbody);
				break;
			}
		
			// 내장지방률(10008)
			inbody.setIbDaCode("10008");
			inbody.setIdCount(filters.get(i).get(10));
			try {
				this.mb.insInbodyDetail(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("일시적인 오류입니다. 본사에 문의해주십시오.");
				model.addAttribute("msg", inbody);
				break;
			}
		
			// 복부지방률(10009)
			inbody.setIbDaCode("10009");
			inbody.setIdCount(filters.get(i).get(11));
			try {
				this.mb.insInbodyDetail(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("일시적인 오류입니다. 본사에 문의해주십시오.");
				model.addAttribute("msg", inbody);
				break;
			}
		
			// 기초대사량(10010)
			inbody.setIbDaCode("10010");
			inbody.setIdCount(filters.get(i).get(12));
			try {
				this.mb.insInbodyDetail(inbody);
				}
			catch (Exception e) {
				inbody.setMsg("일시적인 오류입니다. 본사에 문의해주십시오.");
				model.addAttribute("msg", inbody);
				break;
			
			}
			}
		}
	}

}
