package com.cleaningServices.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="labour")
public class Labour {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int labour_id;
	
	@Column
	String name;
	
	@Column
	String contactno;
	
	@Column
	String pan_no;
	
	@ManyToOne
	@JoinColumn(name="sp_id")
	ServiceProvider sp_id;

	public Labour() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Labour(String name, String contactno, String pan_no, ServiceProvider sp_id) {
		super();
		this.name = name;
		this.contactno = contactno;
		this.pan_no = pan_no;
		this.sp_id = sp_id;
	}

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

	public ServiceProvider getSp_id() {
		return sp_id;
	}

	public void setSid(ServiceProvider sp_id) {
		this.sp_id = sp_id;
	}
	
	
	

}
