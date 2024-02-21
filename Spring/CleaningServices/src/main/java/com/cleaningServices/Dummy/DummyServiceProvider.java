package com.cleaningServices.Dummy;

public class DummyServiceProvider {
	
	private String name;
	private String email;
	private String contactno;
	private String address;
	
	private String password;
	private String username;
	private String license_id;
	private int role_id;
	private int status;
	public DummyServiceProvider(String name, String email, String contactno, String address, String password,
			String username, String license_id, int role_id, int status) {
		super();
		this.name = name;
		this.email = email;
		this.contactno = contactno;
		this.address = address;
		this.password = password;
		this.username = username;
		this.license_id = license_id;
		this.role_id = role_id;
		this.status = status;
	}
	
	//For Updating Service 
	
	
	
	public DummyServiceProvider() {
		super();
		// TODO Auto-generated constructor stub
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
	public String getLicense_id() {
		return license_id;
	}
	public void setLicense_id(String license_id) {
		this.license_id = license_id;
	}
	public int getRole_id() {
		return role_id;
	}
	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
	
	
}
