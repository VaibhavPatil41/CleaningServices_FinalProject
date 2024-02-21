package com.cleaningServices.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="booking")
public class BookingEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int booking_id;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	User user_id;
	
	@ManyToOne
	@JoinColumn(name="Sp_id")
	ServiceProvider sp_id;
	
	@ManyToOne
	@JoinColumn(name="service_id")
	Service1 service_id;
	
	@Column
	String address;
	
	@Column
	String date;
	
	@Column
	int payment_status;

	
	

	public BookingEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public BookingEntity(User user_id, ServiceProvider sp_id, Service1 service_id, String address, String date,
			int payment_status) {
		super();
		this.user_id = user_id;
		this.sp_id = sp_id;
		this.service_id = service_id;
		this.address = address;
		this.date = date;
		this.payment_status = payment_status;
	}



	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public User getUser_id() {
		return user_id;
	}

	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}

	public ServiceProvider getSp_id() {
		return sp_id;
	}

	public void setSp_id(ServiceProvider sp_id) {
		this.sp_id = sp_id;
	}

	public Service1 getService_id() {
		return service_id;
	}

	public void setService_id(Service1 service_id) {
		this.service_id = service_id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getPayment_status() {
		return payment_status;
	}

	public void setPayment_status(int payment_status) {
		this.payment_status = payment_status;
	}
	
	
	
	
	
	
	
	

}
