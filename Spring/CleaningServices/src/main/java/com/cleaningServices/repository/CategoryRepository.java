package com.cleaningServices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cleaningServices.entities.Category;


@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
	
//	@Query(value="select * from categories where catname =:name",nativeQuery = true)
//	public Category getCategoryById(String name);
	
	public Category findByCatname(String catname);
	
}
