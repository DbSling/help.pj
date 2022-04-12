package com.somebody.serviece.lesson;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.ui.Model;
import com.somebody.db.CommonMethod;
import com.somebody.db.MapperDong;
import com.somebody.db.MapperYong;

import beans.Equipments;
import beans.Lessons;
import beans.LsMeDts;

@Service
public class Lesson extends CommonMethod{
	@Autowired
	private MapperDong md;
	@Autowired
	private MapperYong my;
	private ModelAndView mav;

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
		model.addAttribute("lsList",  this.md.searchLesson(ls));
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
		model.addAttribute("maxLesson",this.md.getMaxLesson(ls));

	}

	public void insLesson(Lessons ls,Model model) {
		String f  = ls.getLsOpen().replace("-","");
		String de  = f.replace("T","");
		String der  = de.replace(":","");


		ls.setLsOpen(der);
		boolean tran = false;
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		if(this.convertToBoolean(this.md.insLesson(ls))){
			model.addAttribute("lsList",this.md.lsList(ls));
			tran = true;

		}
		tranend(tran);
	}

	public void modLesson(Lessons ls,Model model) {
		boolean tran = false;
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		
		if(this.convertToBoolean(this.my.modLs(ls))) {
			model.addAttribute("lsList", this.md.lsList(ls));
			tran = true;
		}
		tranend(tran);

	}

	public void lsMemDetail(LsMeDts ls,Model md) {
		md.addAttribute("lsMeDt", this.my.lsMemDetail(ls));
	}

	public void modLsSuccess(LsMeDts lm,Model md) {
		boolean tran = false;
		lm.setStCode("R2");
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);

		if(this.convertToBoolean(this.my.modLsSuccess(lm))) {
			md.addAttribute("lsMeDt", this.my.lsMemDetail(lm));
			tran = true;
		}

		tranend(tran);
	}

	public void delLesson(List<Lessons> ls,Model model) {
		boolean tran = false;
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		for(Lessons lss:ls) {
			if(this.convertToBoolean(this.my.delLs(lss))) {
				model.addAttribute("lsList", this.md.lsList(lss));
				
				tran = true;
			}
		}
		tranend(tran);
		
	}


	private void modLsCancel(LsMeDts lm, Model md) {
		boolean tran = false;
		lm.setStCode("R3");
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);

		if(this.convertToBoolean(this.my.modLsSuccess(lm))) {
			md.addAttribute("lsMeDt", this.my.lsMemDetail(lm));
			tran = true;
		}

		tranend(tran);
	}
	public void backController(String sCode, List<Lessons> ls, Model md) {

		switch (sCode) {
		case "L1":
			delLesson(ls,md);
			break;
		}
	}
	public void backController2(String sCode, LsMeDts lm, Model model) {
		switch (sCode) {
		case "L01":
			modLsSuccess(lm,model);
			break;
		case "L02":
			lsMemDetail(lm,model);
			break;
		case "L03":
			modLsCancel(lm,model);
			break;
		}
	}


}
