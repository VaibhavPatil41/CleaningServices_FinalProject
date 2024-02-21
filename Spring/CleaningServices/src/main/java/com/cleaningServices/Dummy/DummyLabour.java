package com.cleaningServices.Dummy;


//used only for updating existing Labour 
public class DummyLabour {

	
	int labour_id; //used for finding user
	String name;
	String contactno;
	String pan_no;
	public int getLabour_id() {
		return labour_id;
	}
	public void setLabour_id(int labour_id) {
		this.labour_id = labour_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactno() {
		return contactno;
	}
	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	public String getPan_no() {
		return pan_no;
	}
	public void setPan_no(String pan_no) {
		this.pan_no = pan_no;
	}
	
	public DummyLabour(int labour_id, String name, String contactno, String pan_no) {
		super();
		this.labour_id = labour_id;
		this.name = name;
		this.contactno = contactno;
		this.pan_no = pan_no;
	}
	public DummyLabour() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
