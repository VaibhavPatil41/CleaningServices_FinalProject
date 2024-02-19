package com.cleaningServices.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cleaningServices.entities.*;
import com.cleaningServices.repository.ServiceRepo;

@Service
public class Service_Service {
	
	@Autowired
	ServiceRepo srepo;
	
	
	public Service1 addService(Service1 service) {
		return srepo.save(service);
	}
		
	
	
	
//	public Service1 updateService(String desc, double price) {
//		
//		return srepo.updateService(desc,price);
//	}
	
	
}
