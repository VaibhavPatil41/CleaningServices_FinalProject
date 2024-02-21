package com.cleaningServices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cleaningServices.entities.Login;
import com.cleaningServices.entities.ServiceProvider;

import jakarta.transaction.Transactional;


@Repository
public interface ServiceProviderRepo extends JpaRepository<ServiceProvider , Integer> {

	@Query("select sp from ServiceProvider sp where sp.login_id = :login_id")
	public ServiceProvider getSPByLoginId(Login login_id);
	
//	@Query("select sp from ServiceProvider sp where sp.loginid.loginid = :login_id")
//	public ServiceProvider getSPByLoginId(int login_id);
	


	@Query("select sp from ServiceProvider sp where status = 0")
	public List<ServiceProvider> getApprove();

	@Modifying
	@Transactional
	@Query("UPDATE ServiceProvider sp SET sp.status = 1 WHERE sp.sp_id = :id")
	public void approveSp(int id);
	
	@Query("select sp from ServiceProvider sp where login_id.loginid = :id")
	public ServiceProvider getSP(int id);  
	
	@Modifying
	@Query(value="update serviceprovider sp SET sp.name=:name,sp.email=:email,sp.contactno=:contactno,sp.address=:address,sp.license_id=:license_id WHERE login_id=:loginid",nativeQuery = true)
	public int updateSp(String name, String email, String contactno, String address, String license_id, int loginid);
	

	public ServiceProvider findByName(String name);
	
	
	@Query("select sp from ServiceProvider sp where sp_id =:id")
	public ServiceProvider getSPBySPId(int id);
	
	
	

}
