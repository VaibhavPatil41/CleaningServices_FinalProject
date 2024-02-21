package com.cleaningServices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cleaningServices.entities.Login;
import com.cleaningServices.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where login_id.loginid =:id")
	public User getUserByLoginId(int id);
	
	@Query("select u from User u where login_id =:login")
	public User getUserByLogin(Login login);
	
	@Modifying
	@Query(value="update User u set u.name=:name,u.email=:email,u.contactno=:contactno,u.address=:address,u.dob=:dob WHERE u.login_id=:lid",nativeQuery = true)
	public int updateUser(String name, String email, String contactno, String address, String dob,int lid);
	
	

//	@Query(value="select * from users where shop_name is not null",nativeQuery = true)
//	public List<User> findAllVendors();
//	
//	@Query("select v.email from User v where role_id=2")
//	 public String[] getVendorEmails();
//
//	@Query("select v.email from User v where role_id=1")
//	public String[] getCustomerEmails();
//
//	@Query(value="select * from users where role_id=1",nativeQuery = true)
//	public List<User> findAllCustomers();

}

