package com.cleaningServices.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cleaningServices.entities.Role;
import com.cleaningServices.repository.RoleRepository;



@Service
public class Role_Service {
	@Autowired
	RoleRepository roleRepo;
	
	public Role getRole(int id)
	{
		System.out.println("IN Role Service id = "+id);
		 Optional<Role> or=roleRepo.findById(id);
		 Role r=null;
		 try
		 {
			 if(or!=null)
			 {
				 r=or.get();
			 }
			  
		 }
		 catch(Exception e)
		 {
			 e.printStackTrace();
		 }
		 return r;
	}

}
