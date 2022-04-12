package com.somebody.db;

import java.util.List;

import beans.Centers;
import beans.Equipments;
import beans.Lessons;
import beans.LsMeDts;
import beans.Members;
import beans.Pays;
import beans.Staffs;
import beans.YMemberDt;

public interface MapperYong {
	//Equipments
	public List<Equipments> goodsList(Equipments eq);
	public List<Equipments> searchGoods(Equipments eq);
	public List<Equipments> getGoCaList(Equipments eq);
	public List<Equipments> getGoStList(Equipments eq);
	public List<Equipments> getGoSfList(Equipments eq);
	public int modGoods(Equipments eq);
	public int modGoodsMg(Equipments eq);
	public Equipments getGoodsCodeE1(Equipments eq);
	public Equipments getGoodsCodeE2(Equipments eq);
	public Equipments getGoodsCodeE3(Equipments eq);
	public int inseq(Equipments eq);
	public int inseg(Equipments eq);
	//pay
	public List<Pays> payList(Pays pa);
	public List<Pays> payGraph(Pays pa);
	//Join
	public List<Members> checkMeEmailNum();
	public int meJoin(Members me);
	public Members maxCode();
	public List<Centers> checkCtCode();
	public int ctJoin(Centers ct);
	public int firstSfJoin(Staffs sf);
	//Members
	public List<Members> meList(Members me);
	public Pays Count(Members me);
	public List<Members> remecode();
	public int clickExpiration(Members me);
	public List<Members> searchMeList(Members me);
	public List<Members> searchMeList2(Members me);
	public List<Members> searchMeList3(Members me);
	public List<Members> getLsCaList(Members me);
	public int insMg(Members me);
	public int insMgL0(Members me);
	public int insPa(Members me);
	public int sc();
	public int modMe(Members me);
	public YMemberDt meDtInfo(Members me);
	public List<YMemberDt> meInbodyMg(Members me);
	//Staffs
	public int modSf(Staffs sf);
	public int modSf2(Staffs sf);
	public Staffs getMaxSf(Staffs sf);
	//Lessons
	public int modLs(Lessons ls);
	public int updRe(Lessons lss);
	public int delLs(Lessons lss);
	public List<LsMeDts> lsMemDetail(LsMeDts ls);
	public int modLsSuccess(LsMeDts ls);
}
