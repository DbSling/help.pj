package beans;


import lombok.Data;

@Data
public class Members  {
	private String meCode;
	private String meName;
	private String meBirth;
	private String meEmail;
	private String meNumber;
	private String meGender;
	private String mePw;
	private String meCaCode;
	private String meCaName;
	private String ctCode;
	private String ctName;
	private String lsName;
	private String caCode;
	private String caName;
	
	
	//Excercise, locker
	private String meExCode;
	private String meExName;
	private String meExUnit;
	private String Locker;	
	
	//Target
	private String daCode;
	private String exCode;
	private String peDate;
	private String stCode;
	
	
	private String sfCode;
	private String sfName;
	private String lpStocks;
	private int LpQty;

	private String paDate;
	private String paTotal;
	
	

}

