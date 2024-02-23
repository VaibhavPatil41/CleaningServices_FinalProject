package com.cleaningServices.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cleaningServices.entities.Login;
import com.cleaningServices.entities.ServiceProvider;
import com.cleaningServices.repository.ServiceProviderRepo;

import jakarta.transaction.Transactional;

@Service
public class ServiceProviderService {
	@Autowired
	ServiceProviderRepo sprepo;
	
	public ServiceProvider saveSP(ServiceProvider u)
	{
		return sprepo.save(u);
	}
	
	public ServiceProvider getUserById(int id)
	{
		System.out.println(id);
		 Optional<ServiceProvider> or=sprepo.findById(id);
		 ServiceProvider s=null;
		 try
		 {
			 if(or!=null)
			 {
				 s=or.get();
			 }
		 }
		 catch(Exception e)
		 {
			 e.printStackTrace();
			 
		 }
		 return s;
	}
	
//	public ServiceProvider getSPByLoginId(Login id)
//	{
//			System.out.println("IN sp repo"+id);
//			//Optional<ServiceProvider> or=Optional.ofNullable(sprepo.getSPByLoginId(id));
//			ServiceProvider sp=sprepo.getSPByLoginId(id);
//		 
////		 try
////		 {
////			 if(sp!=null)
////			 {
////				 s=sp.get();
////			 }
////		 }
////		 catch(Exception e)
////		 {
////			 e.printStackTrace();
////			 
////		 }
//		 return sp;
//	}
	
	public ServiceProvider getSpByLoginId(Login id) {
		return sprepo.getSPByLoginId(id);
	}

	public ServiceProvider getUserByLoginId(Login id) {
		System.out.println("SpService"+sprepo.getSPByLoginId(id));
		return sprepo.getSPByLoginId(id);
	}
	
	public List<ServiceProvider> approve() {
		
		return sprepo.getApprove();
	}
	
	////////////////////////////////
	public void approveSP(int sp_id) {
		System.out.println("Service"+sp_id);
		  sprepo.approveSp(sp_id);		
	}
	
	public void deletebyId(int spId) {
		 sprepo.deleteById(spId);		
	}
	

	
	public ServiceProvider getSp(int login_id) {
		System.out.println("in sprepo"+login_id);
	    return sprepo.getSP(login_id);
	}
	
	@Transactional
	public int updateSp(String name, String email, String contactno, String address, String license_id, int loginid) {
		
		return sprepo.updateSp(name,email,contactno,address,license_id,loginid);
	}
	
	public ServiceProvider getSPBySname(String name) {
		return sprepo.findByName(name);
	}
	
	public ServiceProvider getSPBySPId(int id) {
		
		return sprepo.getSPBySPId(id);
	}

	public void rejectSP(int sp_id) {
		sprepo.rejectSP(sp_id);
		
	}
	
	


	
}
