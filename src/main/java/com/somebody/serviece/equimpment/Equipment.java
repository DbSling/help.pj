package com.somebody.serviece.equimpment;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

import com.somebody.db.CommonMethod;
import com.somebody.db.MapperYong;

import beans.Equipments;

@Service
public class Equipment extends CommonMethod {
	@Autowired
	private MapperYong my;
	private ModelAndView mav;
	

	String page = null;
	
	public Equipment() {
	      mav = new ModelAndView();
	   }

	   public ModelAndView backController(String sCode, Equipments eq) {
	      
	      switch (sCode) {
	      case "G01":
	         goGoodsPage(eq);
	         break;
	      }
	      return mav;
	   }

	   public void backController(String sCode, Equipments eq, Model md) {

	      switch (sCode) {
	      case "G02":
	         goodsMg(eq,md);
	         break;
	      case "G03":
	         searchGoods(eq,md);
	         break;
	      case "G04":
	         getGoodsCode(eq,md);
	         break;
	      case "G05":
	         insGoods(eq,md);
	         break;
	      case "G06":
	         getGoCaList(eq,md);
	         break;
	      case "G07":
	         modGoods(eq,md);
	         break;

	      }
	   }

	private void goGoodsPage(Equipments eq) {
		this.mav.addObject("ctCode", eq.getCtCode());
		mav.setViewName("goodsMg");
	}

	public void goodsMg(Equipments eq,Model md) {
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		md.addAttribute("goodsList",  this.my.goodsList(eq));
		tranend(true);
	}

	public void searchGoods(Equipments eq, Model md) {
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		md.addAttribute("searchGoods", this.my.searchGoods(eq));
		tranend(true);
	}
	
	private void getGoCaList(Equipments eq, Model md) {
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		List<Equipments> eqca = this.my.getGoCaList(eq);
		List<Equipments> eqst = this.my.getGoStList(eq);
		List<Equipments> eqsf = this.my.getGoSfList(eq);
		List<Equipments> leq = new ArrayList<>();
		leq.addAll(eqca);
		leq.addAll(eqst);
		leq.addAll(eqsf);
		md.addAttribute("getGoCaList",  leq);
		tranend(true);
	}

	public void getGoodsCode(Equipments eq, Model md) {
		Equipments lgce1 =this.my.getGoodsCodeE1(eq);
		Equipments lgce2 =this.my.getGoodsCodeE2(eq);
		Equipments lgce3 =this.my.getGoodsCodeE3(eq);
		List<Equipments> lgc = new ArrayList<>();
		lgc.add(lgce1);
		lgc.add(lgce2);
		lgc.add(lgce3);
		md.addAttribute("getEqCode",lgc);

	}

	public void insGoods(Equipments eq, Model md) {
		boolean tran = false;
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		if(convertToBoolean(this.my.inseq(eq))) {
			if(convertToBoolean(this.my.inseg(eq))) {
				md.addAttribute("goodsList",  this.my.goodsList(eq));
				tran=true;
			}
		}
		tranend(tran);

	}

	public void modGoods(Equipments eq, Model md) {
		boolean tran = false;
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		if(convertToBoolean(this.my.modGoods(eq))){
			if(convertToBoolean(this.my.modGoodsMg(eq))){
				md.addAttribute("modGoods", this.my.goodsList(eq));
				tran = true;
			}
		}
		tranend(tran);

	}
}
