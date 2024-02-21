package com.cleaningServices.entities;


import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity

@Table(name="login")

public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int loginid;
	@Column
	private String username;
	
	@Column
	private String password;
	
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role;

	public int getLoginid() {
		return loginid;
	}

	public void setLoginid(int loginid) {
		this.loginid = loginid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	

	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Login(int loginid, String username, String password, Role role) {
		super();
		this.loginid = loginid;
		this.username = username;
		this.password = password;
		this.role = role;
	}

	public Login(String username, String password, Role role) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
