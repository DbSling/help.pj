package com.somebody.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.somebody.serviece.auth.Authenticaion;

import com.somebody.serviece.equimpment.Equipment;

import com.somebody.serviece.pay.Pay;

import beans.Centers;
import beans.Equipments;
import beans.Members;
import beans.Pays;

@Controller 
public class ControllerYong {
	@Autowired
	Authenticaion auth;
	@Autowired
	Equipment eq;
	@Autowired
	Pay pa;

	@RequestMapping("/goGoodsPage")
	public ModelAndView goGoodsPage(@ModelAttribute Equipments eq) {
		return this.eq.backController("G01",eq);
	}
	
	@RequestMapping(value = "/goPayPage", method = RequestMethod.POST)
	public ModelAndView payMg(@ModelAttribute Pays pa) {
		return this.pa.backController("P01", pa);
	}
	
	@RequestMapping("/goJoinPage")
	public ModelAndView goJoinPage(@ModelAttribute Members me) {
		return this.auth.backController("J01",me);
	}
	
	@RequestMapping(value = "/meJoin", method = RequestMethod.POST)
	public ModelAndView meJoin(@ModelAttribute Members me) {
		return this.auth.backController("J03",me);
	}
	
	@RequestMapping(value = "/ctJoinn", method = RequestMethod.POST)
	public ModelAndView ctJoin(Model model, @ModelAttribute Centers ct) {
		return this.auth.backController("J02",ct);
	}
	
	

	
	
	
	
}
