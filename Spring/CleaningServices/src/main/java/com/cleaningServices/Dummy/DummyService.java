package com.cleaningServices.Dummy;



public class DummyService {
	
	private String description;

	private int price;
	
	private String sname;
	
	private String spname;
	
	private int status;
	
	private  String catname;
	
	
	
	
	
	public DummyService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getCatname() {
		return catname;
	}

	public void setCatname(String catname) {
		this.catname = catname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public String getSpname() {
		return spname;
	}

	public void setSpname(String spname) {
		this.spname = spname;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}


	public DummyService(String description, int price, String sname, String spname, int status, String catname) {
		super();
		this.description = description;
		this.price = price;
		this.sname = sname;
		this.spname = spname;
		this.status = status;
		this.catname = catname;
	}


	
	
	

	

	
	
	
	

}
