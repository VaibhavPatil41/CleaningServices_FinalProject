package com.cleaningServices.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cleaningServices.Dummy.DummyService;
import com.cleaningServices.entities.*;
import com.cleaningServices.repository.ServiceRepo;

import jakarta.transaction.Transactional;

@Service
public class Service_Service {
	
	@Autowired
	ServiceRepo srepo;
	
	
	public Service1 addService(Service1 service) {
		return srepo.save(service);
	}
	
	
	@Transactional
    public Service1 updateService(int s_id, DummyService updatedService) {
	 Service1 existingService = srepo.findById(s_id);
        // Update fields
        existingService.setSname(updatedService.getSname());
        existingService.setDescription(updatedService.getDescription());
        existingService.setPrice(updatedService.getPrice());
//        existingService.setLid(srepo.find(updatedService.getLabour_name()));
          return srepo.save(existingService);
    }
	
	
	@Transactional
	public void updateStatus(int s_id) {
		srepo.getStatus(s_id);
	}

	public List<Service1> findById(int sp_id) {
		// TODO Auto-generated method stub
		return srepo.findServices(sp_id);
	}
	
	public Service1 getLabourIdByServiceId(int service_id) {
		
		return srepo.findServiceById(service_id);
	}
	
	public Service1 getServiceById(int pk_id) {
		
		return srepo.findById(pk_id);
	}
	
	public List<Service1> findBycatid(int catid) {
		
		return srepo.findBycatid(catid);
	}
	
	
//	public Service1 updateService(String desc, double price) {
//		
//		return srepo.updateService(desc,price);
//	}
	
	
}
