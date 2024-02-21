package com.cleaningServices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cleaningServices.entities.*;

import jakarta.transaction.Transactional;

@Repository
public interface ServiceRepo extends JpaRepository<Service1, Integer> {

//	@Query(value = "select s from services s where service_id =:service_id",nativeQuery = true)
//	public Service1 getSPById(Service1 service_id);
	
	@Query(value = "select * from services where service_id =:sid",nativeQuery = true)
	public Service1 findById(int sid);
	
	@Modifying
	@Transactional
	@Query(value="update services s set s.status=0 where service_id =:sid",nativeQuery = true)
	public void getStatus(int sid);

	public Service1 findBySname(String sname);

	@Query(value="select * from services where sp_id=:sp_id",nativeQuery = true)
	public List<Service1> findServices(int sp_id);
	
	@Query(value="select * from services where service_id=:service_id",nativeQuery = true)
	public Service1 findServiceById(int service_id);
	
	@Query(value="select * from services where catid=:catid",nativeQuery = true)
	public List<Service1> findBycatid(int catid);
	
	
	
//	@Query(value="update services set desc like :desc, price like: price ")
//	public Service1 updateService(String desc, double price);
}
