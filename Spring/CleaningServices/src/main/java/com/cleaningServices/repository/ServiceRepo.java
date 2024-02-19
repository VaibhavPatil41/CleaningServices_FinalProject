package com.cleaningServices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cleaningServices.entities.*;

@Repository
public interface ServiceRepo extends JpaRepository<Service1, Integer> {

//	@Query(value = "select s from services s where service_id =:service_id",nativeQuery = true)
//	public Service1 getSPById(Service1 service_id);

	
	
	
	
//	@Query(value="update services set desc like :desc, price like: price ")
//	public Service1 updateService(String desc, double price);
}
