package com.cleaningServices.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cleaningServices.entities.Labour;
import com.cleaningServices.entities.ServiceProvider;


@Repository
public interface LabourRepository extends JpaRepository<Labour, Integer>{

	@Query("select l from Labour l where sp_id=:sp_id")
	public List<Labour> findBySpId(ServiceProvider sp_id);
	
	
	}

//	@Query(value="select * from labour  where sp_id =:spid", nativeQuery = true)
//	Labour getLabourBySpId(int spid);

//	@Query("select l from labour l where sp_id =:sp")
//	Labour getLabourById(ServiceProvider sp);

	
	


