package com.cleaningServices.entities;

public class Dummyuser {
	
	private String name;
	private String email;
	private String contactno;
	private String address;
	private String dob;
	private String password;
	private String username;
	private int role_id;
	
	public Dummyuser() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Dummyuser(String name, String email, String contactno, String address, String dob, String password,
			int role_id,String username) {
		super();
		this.name = name;
		this.email = email;
		this.contactno = contactno;
		this.address = address;
		this.dob = dob;
		this.password = password;
		this.username = username;
		this.role_id = role_id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContactno() {
		return contactno;
	}
	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getRole_id() {
		return role_id;
	}
	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}
	
	
	
	

}
