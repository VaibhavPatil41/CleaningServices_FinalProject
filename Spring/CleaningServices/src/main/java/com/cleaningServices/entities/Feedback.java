package com.cleaningServices.entities;

import jakarta.persistence.*;

@Entity
@Table(name="feeback")
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int fid;
	
	@Column
	int rating;
	
	@Column
	String comment;
	
//	@ManyToOne
//	@JoinColumn(name="sp_id")
//	ServiceProvider sp_id;
	
	@ManyToOne
	@JoinColumn(name="service_id")
	Service1 sid;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	User user_id;

	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Feedback(Service1 sid, User user_id,int rating, String comment) {
		super();
		
		//this.sp_id = sp_id;
		this.sid = sid;
		this.user_id = user_id;
		this.rating = rating;
		this.comment = comment;
		
	}

	public int getFid() {
		return fid;
	}

	public void setFid(int fid) {
		this.fid = fid;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Service1 getSid() {
		return sid;
	}

	public void setSid(Service1 sid) {
		this.sid = sid;
	}

	public User getUser_id() {
		return user_id;
	}

	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}
	
	
	
}
