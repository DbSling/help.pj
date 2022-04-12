package com.somebody.serviece.pay;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

import com.somebody.db.CommonMethod;
import com.somebody.db.MapperYong;

import beans.Pays;

@Service
public class Pay extends CommonMethod{

	@Autowired
	private MapperYong my;


	private ModelAndView mav;
	@Autowired

	public Pay() {
		mav = new ModelAndView();
	}

	String page = null;

	public ModelAndView backController(String sCode, Pays pa) {

		switch (sCode) {
		case "P01":
			payMg(pa);
			break;
		}
		return mav;
	}

	public void backController(String sCode, Pays pa, Model md) {

		switch (sCode) {
		case "P02":
			onLoadPay(pa, md);
			break;
		}
	}

	public void payMg(Pays pa) {
		
		this.mav.addObject("paGraph", this.my.payGraph(pa));
		this.mav.addObject("ctCode", pa.getCtCode());
		mav.setViewName("payMg");
	}

	public void onLoadPay(Pays pa, Model md) {
		tranconfig(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		md.addAttribute("payList",this.my.payList(pa));
		tranend(true);
	}


}
