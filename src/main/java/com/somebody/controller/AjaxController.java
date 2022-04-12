package com.somebody.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.somebody.db.MapperUone;
import com.somebody.serviece.auth.Authenticaion;
import com.somebody.serviece.equimpment.Equipment;
import com.somebody.serviece.lesson.Lesson;
import com.somebody.serviece.member.Member;
import com.somebody.serviece.pay.Pay;
import com.somebody.serviece.staff.Staff;


import beans.Centers;
import beans.Equipments;
import beans.Inbodys;
import beans.Lessons;
import beans.LsMeDts;
import beans.Members;
import beans.Pays;
import beans.Staffs;
import beans.YMemberDt;


@RestController
@RequestMapping(value ="/ajax",produces = "application/json;charset=UTF-8")
public class AjaxController {
	
	@Autowired
	Authenticaion auth;
	@Autowired
	Member me;
	@Autowired
	Staff sfs;
	@Autowired
	Lesson lss;
	@Autowired
	Equipment eq;
	@Autowired
	Pay pa;
	public AjaxController(){}
	
	//Bon
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/meMg", method = RequestMethod.POST)
	public List<Members> meMg(Model model, @RequestBody Members[] me) {
		
		this.me.backController("M02",model,me[0]);
		return (List<Members>)model.getAttribute("meList");
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/searchMeMg", method = RequestMethod.POST)
	public List<Members> searchMeMg(Model model, @RequestBody Members[] me) {
		this.me.backController("M03",model.addAttribute("sendmelist",me[0]));
		return (List<Members>)model.getAttribute("getmelist");
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/meDetail", method = RequestMethod.POST)
	public List<YMemberDt> meDetail(Model model, @RequestBody Members[] me) {
		this.me.backController("M05",model, me[0]);
		return (List<YMemberDt>)model.getAttribute("meDtInfo");
	}

	
	@RequestMapping(value = "/modMe", method = RequestMethod.POST)
	public List<Members> modMe(Model model, @RequestBody Members[] me) {
		this.me.backController("M07", model, me[0]);
		return (List<Members>)model.getAttribute("meList");
		
	}

	//Dong

	@SuppressWarnings("unchecked")
	@RequestMapping("/sfMg")
	public List<Staffs> sfMg(Model model, @RequestBody Staffs[] sf) {
		sfs.backController("S01",sf[0], model);
		return (List<Staffs>)model.getAttribute("sfList");


	}
	@SuppressWarnings("unchecked")
	@RequestMapping("/searchSfMg")
	public List<Staffs> searchSfMg(Model model, @RequestBody Staffs[] sf) {

		this.sfs.backController("S02", sf[0], model.addAttribute("sf",sf[0]));
		return (List<Staffs>)model.getAttribute("sfList");
	}
	@RequestMapping(value = "/getMaxSf", method = RequestMethod.POST)
	public Staffs getMaxSf(Model model, @RequestBody Staffs[] sf) {
		this.sfs.backController("S03", sf[0], model);
		return (Staffs)model.getAttribute("maxSf");
	}
	@SuppressWarnings("unchecked")
	@RequestMapping("/insSf")
	public List<Staffs> insSf(Model model, @RequestBody Staffs[] sf) {

		this.sfs.backController("S04", sf[0], model);

		return (List<Staffs>)model.getAttribute("sfList");
	}
	@SuppressWarnings("unchecked")
	@RequestMapping("/modSf")
	public List<Staffs> modSf(Model model, @RequestBody Staffs[] sf) {
		this.sfs.backController("S07",sf[0], model);

		return (List<Staffs>)model.getAttribute("modSf");
	}
	@SuppressWarnings("unchecked")
	@RequestMapping("/modSf2")
	public List<Staffs> modSf2(Model model, @RequestBody Staffs[] sf) {

		this.sfs.backController("S08",sf[0], model);

		return (List<Staffs>)model.getAttribute("modSf");
	}
	@RequestMapping(value = "/getMeMg", method = RequestMethod.POST)
	public void getMeMg(Model model, @RequestBody Staffs[] sf) {
		this.sfs.backController("S09", sf[0], model);
	}
	@SuppressWarnings("unchecked")
	@RequestMapping("/lessonMg")
	public List<Lessons> lessonMg(Model model, @RequestBody Lessons[] ls) {
		lss.backController("L01",ls[0], model.addAttribute("ls", ls[0]));
		return (List<Lessons>)model.getAttribute("lsList");

	}
	@SuppressWarnings("unchecked")
	@RequestMapping("/searchLesson")
	public List<Lessons> searchLesson(Model model, @RequestBody Lessons[] ls) {
		this.lss.backController("L02",ls[0],model.addAttribute("ls", ls[0]));
		return (List<Lessons>)model.getAttribute("lsList");
	}
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/insLsPay", method = RequestMethod.POST)
	public List<Lessons> insLsPay(Model model, @RequestBody Lessons[] ls) {
		this.lss.backController("L04",ls[0],model);
		return (List<Lessons>)model.getAttribute("lsList");
	}
	@RequestMapping(value = "/getMaxLesson", method = RequestMethod.POST)
	public Lessons getMaxLesson(Model model, @RequestBody Lessons[] ls) {
		this.lss.backController("L05",ls[0],model);
		return (Lessons)model.getAttribute("maxLesson"); 
	}
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/insLesson", method = RequestMethod.POST)
	public List<Lessons> insLesson(Model model, @RequestBody Lessons[] ls) {
		this.lss.backController("L06",ls[0],model);
		return (List<Lessons>)model.getAttribute("lsList");
	}

	//Yong
		@SuppressWarnings("unchecked")
		@RequestMapping(value = "/modLesson", method = RequestMethod.POST)
		public List<Lessons> modLesson(Model model, @RequestBody Lessons[] ls) {
			this.lss.backController("L07",ls[0], model);
			return (List<Lessons>)model.getAttribute("lsList");
		}
		@SuppressWarnings("unchecked")
		@RequestMapping(value = "/lsMemDetail", method = RequestMethod.POST)
		public List<LsMeDts> lsMemDetail(Model model, @RequestBody LsMeDts[] ls) {
			this.lss.backController2("L02",ls[0],model);
			return (List<LsMeDts>)model.getAttribute("lsMeDt");
		}

		@SuppressWarnings("unchecked")
		@RequestMapping(value = "/modLsSuccess", method = RequestMethod.POST)
		public List<LsMeDts> modLsSuccess(Model model, @RequestBody LsMeDts[] lm) {
			this.lss.backController2("L01",lm[0],model);
			return (List<LsMeDts>)model.getAttribute("lsMeDt");
		}
		@SuppressWarnings("unchecked")
		@RequestMapping(value = "/modLsCancel", method = RequestMethod.POST)
		public List<LsMeDts> modLsCancel(Model model, @RequestBody LsMeDts[] lm) {
			this.lss.backController2("L03",lm[0],model);
			return (List<LsMeDts>)model.getAttribute("lsMeDt");
		}
		@SuppressWarnings("unchecked")
		@RequestMapping(value = "/delLesson", method = RequestMethod.POST)
		public List<Lessons> delLesson(Model model, @RequestBody List<Lessons> ls) {
			this.lss.backController("L1",ls,model);
			return (List<Lessons>)model.getAttribute("lsList");
		}
		@RequestMapping(value = "/goodsMg", method = RequestMethod.POST)
		public List<Equipments> goodsMg(Model model, @RequestBody Equipments[] eq) {
			this.eq.backController("G02",eq[0], model);
			return (List<Equipments>) model.getAttribute("goodsList");
		}

		@RequestMapping(value = "/searchGoods", method = RequestMethod.POST)
		public List<Equipments> searchGoods(Model model, @RequestBody Equipments[] eq) {
			this.eq.backController("G03",eq[0], model);
			return (List<Equipments>) model.getAttribute("searchGoods");
		}
		@RequestMapping(value = "/getGoCaList", method = RequestMethod.POST)
		public List<Equipments> getGoCaList(Model model, @RequestBody Equipments[] eq) {
			this.eq.backController("G06", eq[0],model);
			return (List<Equipments>) model.getAttribute("getGoCaList");
		}
		@RequestMapping(value = "/getGoodsCode", method = RequestMethod.POST)
		public List<Equipments> getGoodsCode(Model model, @RequestBody Equipments[] eq) {
			this.eq.backController("G04", eq[0], model);
			return (List<Equipments>) model.getAttribute("getEqCode");
		}
		@RequestMapping(value = "/insGoods", method = RequestMethod.POST)
		public List<Equipments> insGoods(Model model, @RequestBody Equipments[] eq) {
			this.eq.backController("G05", eq[0], model);
			return (List<Equipments>) model.getAttribute("goodsList");
		}
		@RequestMapping(value = "/modGoods", method = RequestMethod.POST)
		public List<Equipments> modGoods(Model model, @RequestBody Equipments[] eq) {
			this.eq.backController("G07", eq[0], model);
			return (List<Equipments>) model.getAttribute("modGoods");
		}

		@RequestMapping(value = "/onLoadPay", method = RequestMethod.POST)
		public List<Pays> onLoadPay(Model model, @RequestBody Pays[] pa) {
			this.pa.backController("P02", pa[0], model);
			return (List<Pays>) model.getAttribute("payList");
		}

		@RequestMapping(value = "/meEmailNum", method = RequestMethod.POST)
		public List<Members> checkMeEmailNum(Model model) {
			this.auth.backController2("C01", model);
			return (List<Members>) model.getAttribute("checkMeEmailNum");
		}
		@RequestMapping(value = "/checkCtCode", method = RequestMethod.POST)
		public List<Centers> checkCtCode(Model model) {
			this.auth.backController2("C02", model);
			return (List<Centers>) model.getAttribute("checkCtCode");
		}
		@RequestMapping(value = "/clickExpiration", method = RequestMethod.POST)
		public List<Members> clickExpiration(Model model, @RequestBody Members[] me) {
			this.me.backController("M03", model, me[0]);
			return (List<Members>) model.getAttribute("meList");
		}
		@RequestMapping(value = "/getCaList", method = RequestMethod.POST)
		public List<Members> getCaList(Model model, @RequestBody Members[] me) {
			this.me.backController("M04", model, me[0]);
			return (List<Members>) model.getAttribute("caList");
		}
		@RequestMapping(value = "/addMember", method = RequestMethod.POST)
		public List<Members> addMember(Model model, @RequestBody List<Members> me) {
			model.addAttribute("dataList", me);
			this.me.backController("M06",model);
			return (List<Members>) model.getAttribute("ml");
		}	
		@RequestMapping(value = "/getSfCode", method = RequestMethod.POST)
		public List<Equipments> getSfCode(Model model, @RequestBody Lessons[] ls) {
			this.lss.backController("L11", ls[0] ,model);
			return (List<Equipments>) model.getAttribute("sfCode");
		}


		//UONE
		
		@SuppressWarnings("unchecked")
		@RequestMapping(value = "/meDtInfo", method = RequestMethod.POST)
		public List<Members> meDtInfo(Model model,@RequestBody Members[] me) {
			this.me.backController("C02",model.addAttribute("send",me[0]));
			
			return (List<Members>)model.getAttribute("list");
		}
		@RequestMapping(value = "/meInbodyMg", method = RequestMethod.POST)
		public List<Inbodys> meInbodyMg(Model model, @RequestBody Inbodys[] in) {
			this.me.backController("C03", model.addAttribute("send",in[0]));
			return (List<Inbodys>)model.getAttribute("list");
		}
		@RequestMapping(value = "/meInbodyMg2", method = RequestMethod.POST)
		public List<Inbodys> meInbodyMg2(Model model, @RequestBody Inbodys[] in) {
			this.me.backController("C00", model.addAttribute("max",in[0]));
			//this.me.backController("C00", model.addAttribute("find",in[0]));
			
			return (List<Inbodys>)model.getAttribute("list");
		}
		
		@RequestMapping(value = "/inbodyChart", method = RequestMethod.POST)
		public List<Inbodys> inbodyChart(Model model, @RequestBody Inbodys[] in) {
			this.me.backController("C16", model.addAttribute("chart",in[0]));
			//this.me.backController("C00", model.addAttribute("find",in[0]));
			return (List<Inbodys>)model.getAttribute("list");
		}
		
		@RequestMapping(value = "/insTaState", method = RequestMethod.POST)
		public int insTaState(Model model, @RequestBody Inbodys[] in) {
			model.addAttribute("Inbody",in[0]);
			this.me.backController("C04", model);
			return (int)model.getAttribute("a1");
		}
		@RequestMapping(value = "/meHealthMg", method = RequestMethod.POST)
		public void meHealthMg(Model model, @ModelAttribute Members me) {
			this.me.backController("C05", model);
		}
		@RequestMapping(value = "/meFoodMg", method = RequestMethod.POST)
		public void meFoodMg(Model model, @ModelAttribute Members me) {
			this.me.backController("C06", model);
		}
		@SuppressWarnings("unchecked")
		@RequestMapping(value = "/getLessonList", method = RequestMethod.POST)
		public List<Members> getLessonList(Model model, @RequestBody  Members[] me) {
			model.addAttribute("melist",me[0]);
			 this.me.backController("C08", model);
			 return (List<Members>) model.getAttribute("mectlist");
		}
	
		@SuppressWarnings("unchecked")
		@RequestMapping(value = "/searchLsMg", method = RequestMethod.POST)
		public List<Lessons> searchLsMg(Model model, @RequestBody  Members[] me) {
			model.addAttribute("mectlist",me[0]);

			this.me.backController("C09", model);
			return (List<Lessons>)model.getAttribute("mectlslista");
		}

		
		  @RequestMapping(value = "/insMeLesson", method = RequestMethod.POST) public
		  Lessons insMeLesson(Model model, @RequestBody Lessons[] ls) {
		  model.addAttribute("reqlesson",ls[0]);
		  this.me.backController("C10", model);
		  return (Lessons)model.getAttribute("sta"); 
		  }
		 
		@RequestMapping(value = "/delMeLesson", method = RequestMethod.POST)
		public Lessons delMeLesson(Model model, @RequestBody  Lessons[] ls) {
			model.addAttribute("reqlesson",ls[0]);
			this.me.backController("C11", model);
			 return (Lessons)model.getAttribute("sta");
		}
		
		@RequestMapping(value = "/checkMePw", method = RequestMethod.POST)
		public void checkMePw(Model model, @ModelAttribute Members me) {
			this.auth.backControllerME("C14",model);
		}
		@RequestMapping(value = "/modMeMg", method = RequestMethod.POST)
		public void modMeMg(Model model, @RequestBody Members[] me) {
			model.addAttribute("Member", me[0]);
			
			this.me.backController("C15", model);
		}






}
