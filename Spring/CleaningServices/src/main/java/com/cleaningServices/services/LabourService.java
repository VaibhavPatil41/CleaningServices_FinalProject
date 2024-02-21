package com.cleaningServices.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cleaningServices.Dummy.DummyLabour;
import com.cleaningServices.entities.Labour;
import com.cleaningServices.entities.ServiceProvider;
import com.cleaningServices.repository.LabourRepository;

@Service
public class LabourService {
	
	@Autowired
	LabourRepository lrepo;
	
	
	public Labour addLabour(Labour l)
	{
		return lrepo.save(l);
	}
	
	public List<Labour> findAll(int sp_id) {
		
		return lrepo.findAll(sp_id);
	}
	
	public List<Labour> EmptyAll(int sp_id) {
		
		return lrepo.EmptyAll(sp_id);
	}

	public Labour getLabourName(String lname) {
		return lrepo.findByname(lname);
	}
	
	public void changeStatus(int labour_id) {
		System.out.println(labour_id);
		 lrepo.changeStatus(labour_id);
	}


//	public Optional<Labour> getLabour(int id) 
//	{
//		System.out.println(id);
//		Optional<Labour> or=lrepo.findById(id);
////		 
//		 try
//		 {
//			 
//			 if(or!=null)
//			 {
//				 or.get();
//				 System.out.println("hi");
//			 }
//		 }
//		 catch(Exception e)
//		 {
//			 e.printStackTrace();
//			 
//		 }
//		 return or;
//		
//	}
	
	public Labour getLabour(int id) 
	{
		System.out.println(id);
		//Optional<Labour> L= lrepo.findById(id);
//		 
//		
		//System.out.println(id);
		 Optional<Labour> or=lrepo.findById(id);
		 Labour L=null;
		 try
		 {
			 if(or!=null)
			 {
				 L=or.get();
			 }
		 }
		 catch(Exception e)
		 {
			 e.printStackTrace();
			 
		 }
		 return L;
	}

	//view labour
	public List<Labour> getLabourByServiceProviderId(ServiceProvider sp_id) {
		
		return lrepo.findBySpId(sp_id);
	}


	//also need availabity status
	public List<Labour> getLabourbySP(ServiceProvider sp_id) {
		
		return lrepo.getLabourbySP(sp_id);
	}
	
	//rejectLabour
	public void rejectLabour(int labour_id) {
		System.out.println("Labour id"+labour_id);
		 lrepo.rejectLabour(labour_id);
	}
	
	//updateLabour
	public void updateLabour(DummyLabour dr) {
		//System.out.println("Labour id"+labour_id);
		System.out.println(dr.getLabour_id()+dr.getName()+dr.getContactno()+dr.getPan_no());
		 lrepo.updateLabour(dr.getLabour_id(),dr.getName(),dr.getContactno(),dr.getPan_no());
	}
	
public Labour getLabourByServiceProviderId(int labour_id) {
		
		return lrepo.findLabourById(labour_id);
	}
	
	




	

}
