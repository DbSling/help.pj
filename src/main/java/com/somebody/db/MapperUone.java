package com.somebody.db;

import java.util.List;

import beans.Inbodys;
import beans.Members;

public interface MapperUone {
	
	public List<Members> meDtInfo(Members members);
	public int delMe(Members me);
	public int modMeMg(Members me);
	public List<Inbodys> meInbodyMg(Inbodys in);
	public int insTaState(Inbodys in);
	public List<Inbodys> findDay(Inbodys in);
	public List<Inbodys> maxDay(Inbodys in);
	public List<Inbodys> inbodyChart(Inbodys in);
}
