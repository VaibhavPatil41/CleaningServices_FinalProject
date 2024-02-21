package com.cleaningServices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cleaningServices.entities.Login;

@Repository
public interface Login_repo extends JpaRepository<Login,Integer>{
	@Query(value = "select * from login where username like :uname",nativeQuery = true)
	public Login getUserByUsername(String uname);
	
	@Modifying
	@Query(value="update login l set l.username=:username,l.password=:password WHERE loginid=:lid",nativeQuery=true)
	public int updateLogin(String username, String password,int lid);

	/*@Query(value = "select id from login where username=:uname and password=:pass",nativeQuery = true)
	public int getUserByUsernamepass(String uname,String pass);
	
	@Query("select u from Login u where username like :uname and password like :pass")
	public Login getUserByUserpass(String uname,String pass);

	//@Query("select u from Login u where username like :uname")
	public Login findByUsername(String uname);*/
}



