package com.cleaningServices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cleaningServices.entities.ServiceProvider;
import com.cleaningServices.services.BookingService;
import com.cleaningServices.services.CategoryService;
import com.cleaningServices.services.Feedback_Services;
import com.cleaningServices.services.LabourService;
import com.cleaningServices.services.LoginService;
import com.cleaningServices.services.Role_Service;
import com.cleaningServices.services.ServiceProviderService;
import com.cleaningServices.services.Service_Service;
import com.cleaningServices.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	 @Autowired
	    LoginService lservice;
	 @Autowired
		UserService uservice;
	 @Autowired
		ServiceProviderService spservice;
	 @Autowired
	 	Role_Service rl;
	 @Autowired
	 LabourService ls;
	 @Autowired
	 Service_Service ss;
	 @Autowired
	 	CategoryService catservice;
	 @Autowired
	 	BookingService bookservice;
 @Autowired
 Feedback_Services fservice;
 
 @GetMapping("/aproveReq")
	public List<ServiceProvider> approve()
	{
		System.out.println("before return ");
		System.out.println(spservice.approve());
		return spservice.approve();
	}
	
 
	@PostMapping("/acceptSP")
	public String acceptSP(@RequestBody int sp_id)
	{		
		System.out.println("userController"+sp_id);
		spservice.approveSP(sp_id);
		return "Done";
	}
	
	@PostMapping("/rejectSP")
	public void rejectSP(@RequestBody int sp_id)
	{		
		 spservice.rejectSP(sp_id);
	}

}
