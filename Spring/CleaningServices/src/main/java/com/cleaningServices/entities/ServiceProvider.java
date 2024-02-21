package com.cleaningServices.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="serviceprovider")
public class ServiceProvider {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int sp_id;
	
	@OneToOne
	@JoinColumn(name="login_id")
	Login login_id;
	
	@Column
	String name;
	
	@Column
	String email;
	
	@Column
	String contactno;
	
	@Column
	String address;
	
	@Column
	String license_id;
	
	@Column
	int status;

	public ServiceProvider() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ServiceProvider(Login login_id, String name, String email, String contactno, String address,
			String license_id, int status) {
		super();
		this.login_id = login_id;
		this.name = name;
		this.email = email;
		this.contactno = contactno;
		this.address = address;
		this.license_id = license_id;
		this.status = status;
	}

	public int getSp_id() {
		return sp_id;
	}

	public void setSp_id(int sp_id) {
		this.sp_id = sp_id;
	}

	public Login getLogin_id() {
		return login_id;
	}

	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
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

	public String getLicense_id() {
		return license_id;
	}

	public void setLicense_id(String license_id) {
		this.license_id = license_id;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	
}
