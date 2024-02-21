package com.cleaningServices.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.cleaningServices.entities.Category;

import com.cleaningServices.repository.CategoryRepository;



@Service
public class CategoryService {
	
	@Autowired
		CategoryRepository catrepo;
	
	public Category getIdByCname(String catname) {
		return catrepo.findByCatname(catname);
	}

	public Category viewcat(String c) {
		
		return catrepo.findByCatname(c);
	}

	public List<Category> findAll() {
		
		return catrepo.findAll();
	}


}
