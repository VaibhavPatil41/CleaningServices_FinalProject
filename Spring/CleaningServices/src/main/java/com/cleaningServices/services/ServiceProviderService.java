package com.cleaningServices.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cleaningServices.entities.Login;
import com.cleaningServices.entities.ServiceProvider;
import com.cleaningServices.repository.ServiceProviderRepo;

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
	

	
	public ServiceProvider getSp(Integer loginId) {
		System.out.println("in sprepo"+loginId);
	    return sprepo.getSP(loginId);
	}


	
}
