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
	private int price;
	
	@Column
	private String sname;
	
	@ManyToOne
	@JoinColumn(name="sp_id")
	ServiceProvider sid;
	
	@ManyToOne
	  @JoinColumn(name="catid")
		Category catid;
	
	@Column
	private int status;

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

	public ServiceProvider getSid() {
		return sid;
	}

	public void setSid(ServiceProvider sid) {
		this.sid = sid;
	}

	public Category getCatid() {
		return catid;
	}

	public void setCatid(Category catid) {
		this.catid = catid;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Service1( String description, int price, String sname, ServiceProvider sid, Category catid,
			int status) {
		super();
		
		this.description = description;
		this.price = price;
		this.sname = sname;
		this.sid = sid;
		this.catid = catid;
		this.status = status;
	}

	public Service1() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	
}