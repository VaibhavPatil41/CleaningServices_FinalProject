package com.cleaningServices.entities;



import jakarta.persistence.*;

@Entity
@Table(name="categories")
public class Category {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int catid;
	
	@Column
	String catname;

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Category(String catname) {
		super();
		
		this.catname = catname;
	}

	public int getCatid() {
		return catid;
	}

	public void setCatid(int catid) {
		this.catid = catid;
	}

	public String getCatname() {
		return catname;
	}

	public void setCatname(String catname) {
		this.catname = catname;
	}
	
	
	
}
