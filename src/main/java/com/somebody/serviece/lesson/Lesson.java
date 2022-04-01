package com.somebody.serviece.lesson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.ui.Model;
import com.somebody.db.CommonMethod;
import com.somebody.db.MapperBon;
import com.somebody.db.MapperDong;
import com.somebody.db.MapperUone;
import com.somebody.db.MapperYoung;

import beans.Equipments;
import beans.Lessons;
import kr.co.icia.plzec.services.Encryption;
import kr.co.icia.plzec.services.ProjectUtils;

@Service
public class Lesson extends CommonMethod{
	@Autowired
	private MapperBon mb;
	@Autowired
	private MapperDong md;
	@Autowired
	private MapperYoung my;
	@Autowired
	private MapperUone mu;
	private ModelAndView mav;
	
	@Autowired
	private DataSourceTransactionManager tx;

	private TransactionStatus txStatus;

	private DefaultTransactionDefinition txdef;

	String page = null;
	public Lesson() {
		mav = new ModelAndView();
 }

	
	
	
	public ModelAndView backController(String sCode, Lessons ls, Model model) {
	
		switch (sCode) {
		case "L00":
			goLessonPage(ls, model);
			 break;
		case "L01":
			lessonMg(ls, model);
			 break;
		case "L02":
			searchLesson(ls,model);
			break;
		case "L03":
			getLsCaList(ls,model);
			break;
		case "L04":
			insLsPay(ls,model);
			break;
		case "L05":
			getMaxLesson(ls,model);
			break;
		case "L06":
			insLesson(ls,model);
			break;
		case "L07":
			modLesson(ls,model);
			break;
		case "L08":
			lsMemDetail(ls,model);
			break;
		case "L09":
			modLsSuccess(ls,model);
			break;
		case "L10":
			delLesson(ls,model);
			break;
		case "L11":
			getSfCode(ls,model);
			break;
		}
		return mav;
	}
	private void getSfCode(Lessons ls, Model md) {
		Equipments eq = new Equipments();
		eq.setCtCode(ls.getCtCode());
		md.addAttribute("sfCode", this.my.getGoSfList(eq));
	}




	public void goLessonPage(Lessons ls,Model model) {
	
		mav.addObject("ctCode", ls.getCtCode());
		mav.setViewName("lessonMg");	
	}
		
	

	public void lessonMg(Lessons ls,Model model) {
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		model.addAttribute("lsList",  this.md.lsList(ls));
		tranend(true);

	}

	public void searchLesson(Lessons ls,Model model) {
		
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		model.addAttribute("searchLesson",  this.md.searchLesson(ls));
		tranend(true);

	}

	public void getLsCaList(Lessons ls,Model model) {


	}

	public void insLsPay(Lessons ls,Model model) {
		boolean tran = false;
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
			if(this.convertToBoolean(this.md.insLsPay(ls))){
				model.addAttribute("lsList",this.md.lsList(ls));
				tran = true;
			}
		tranend(tran);
	}

	public void getMaxLesson(Lessons ls,Model model) {


	}

	public void insLesson(Lessons ls,Model model) {
		boolean tran = false;
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		
			model.addAttribute("lsList", this.md.lsList(ls));
			tran = true;
		tranend(tran);
	}

	public void modLesson(Lessons ls,Model model) {
		boolean tran = false;
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		System.out.println(ls);
		if(this.convertToBoolean(this.my.modLs(ls))) {
			model.addAttribute("lsList", this.md.lsList(ls));
			tran = true;
		}
		tranend(tran);

	}

	public void lsMemDetail(Lessons ls,Model model) {


	}
	public void modLsSuccess(Lessons ls,Model model) {
		
	}
	public void delLesson(Lessons ls,Model model) {


	}
	
}
