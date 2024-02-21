package com.cleaningServices.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int user_id;
	
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
	String dob;

	

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public User( Login login_id, String name, String email, String contactno, String address, String dob) {
		super();
		
		this.login_id = login_id;
		this.name = name;
		this.email = email;
		this.contactno = contactno;
		this.address = address;
		this.dob = dob;
	}
	
	
	


	public User(int user_id, Login login_id, String name, String email, String contactno, String address, String dob) {
		super();
		this.user_id = user_id;
		this.login_id = login_id;
		this.name = name;
		this.email = email;
		this.contactno = contactno;
		this.address = address;
		this.dob = dob;
	}


	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
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

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}
}
