package com.cleaningServices.entities;

import jakarta.persistence.*;

@Entity
@Table(name="services")
public class Service1 {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int service_id;
	
	@Column
	private String description;
	
	@Column
	private double price;
	
	@Column
	private String sname;
	
	@ManyToOne
	  @JoinColumn(name="sp_id")
		ServiceProvider sid;
	


	public Service1(String description, double price, String sname, ServiceProvider sid) {
		super();
		
		this.description = description;
		this.price = price;
		this.sname = sname;
		this.sid=sid;
		//this.labour_id=labour_id;
	}

	public int getService_id() {
		return service_id;
	}

	public void setService_id(int service_id) {
		this.service_id = service_id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ServiceProvider getSid() {
		return sid;
	}

	public void setSid(ServiceProvider sid) {
		this.sid = sid;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public Service1() {
		super();
	}


	

	
	
	
}
