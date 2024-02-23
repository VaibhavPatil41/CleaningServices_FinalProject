package com.cleaningServices.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cleaningServices.entities.Labour;
import com.cleaningServices.entities.ServiceProvider;

import jakarta.transaction.Transactional;


@Repository
public interface LabourRepository extends JpaRepository<Labour, Integer>{

	@Query("select l from Labour l where sp_id=:sp_id")
	public List<Labour> findBySpId(ServiceProvider sp_id);
	
	
	@Query("select l from Labour l where sp_id = :sp_id and l.status != 2")
	public List<Labour> getLabourbySP(ServiceProvider sp_id);
	
	
	@Modifying
	@Transactional
	@Query("UPDATE Labour L SET L.status = 2 WHERE L.labour_id = :id")
	public void rejectLabour(int id);
	
	@Modifying
	@Transactional
	@Query("UPDATE Labour SET contactno = :contactno , name=:name ,pan_no=:pan_no WHERE labour_id = :id")
	public void updateLabour(int id,String name,String contactno,String pan_no);
	
	@Query(value="select * from labour where sp_id=:sp_id",nativeQuery = true)
	public List<Labour> findAll(int sp_id);
	
	///////////////////////
	public Labour findByname(String name);
	
	@Query(value="select * from labour where sp_id=:sp_id and status=0",nativeQuery = true)
	public List<Labour> EmptyAll(int sp_id);
	
	
	//maintain status of labour 0 => 1
	@Modifying
	@Transactional
	@Query("UPDATE Labour SET status = 1  WHERE labour_id = :lid")
	public int engageLabour(int lid);

	@Query(value="select * from labour where labour_id=:labour_id",nativeQuery=true)
	public Labour findLabourById(int labour_id);
	
	////maintain status of labour 1 => 0
	@Modifying
	@Transactional
	@Query("UPDATE Labour SET status = 0  WHERE labour_id = :lid")
	public int freeStatus(int lid);
	
//	@Query(value="select * from labour where labour_id=:labour_id",nativeQuery=true)
//	public Labour findLabourById(int labour_id);

	}



	
	


