package com.cleaningServices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cleaningServices.Dummy.DummyLabour;
import com.cleaningServices.Dummy.DummyPaymentRequest;
import com.cleaningServices.Dummy.DummyService;
import com.cleaningServices.Dummy.DummyServiceProvider;
import com.cleaningServices.Dummy.Dummyfeedback;
import com.cleaningServices.Dummy.Dummyuser;
import com.cleaningServices.Dummy.LoginRequest;
import com.cleaningServices.entities.BookingEntity;
import com.cleaningServices.entities.Category;
import com.cleaningServices.entities.Feedback;
import com.cleaningServices.entities.Labour;
import com.cleaningServices.entities.Login;
import com.cleaningServices.entities.Role;
import com.cleaningServices.entities.Service1;
import com.cleaningServices.entities.ServiceProvider;
import com.cleaningServices.entities.User;
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
public class CommonController {
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
	 
	 
	@PostMapping("/checkLogin")
    public Login checkLogin(@RequestBody LoginRequest lr)
    {
		//System.out.println("lr"+lr);
    	
    	
    	//System.out.println(lr.getUname());
    	Login L=lservice.getLoginByUsername(lr.getUname());
    	
    	System.out.println(L.getRole().getRole_id());
    	if(L.getRole().getRole_id()==1)
    	{
    		return L;
    	}
    	else if(L.getRole().getRole_id()==2)
    	{
    		return L;
    	}
    	else if(L.getRole().getRole_id()==3)
    	{
    		return L;
    	}
    	
    	return L; 
    }
	
	@PutMapping("/updateService")
    public ResponseEntity <Service1> updateService(@RequestBody DummyService updatedService,@RequestParam int s_id) {
        
            Service1 service = ss.updateService(s_id,updatedService);
            return ResponseEntity.ok().body(service);
    }
	
	@PutMapping("/deleteService")
	public String deleteService(@RequestParam int sid){
		ss.updateStatus(sid);  //service service
		return "Done";
		
	}
	
	@GetMapping("/viewAllCat")
	public List<Category> viewCategory(){
		
		return catservice.findAll();
	}
	
	
	
	@GetMapping("/viewServices")
	public List<Service1> viewServices(@RequestParam int sp_id){
		
		return ss.findById(sp_id);
	}
	
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	
	
	
	
	
	
	
	
	
	
	
	
	@GetMapping("/getService")
	public Service1 getService(@RequestParam int id)
	{
		Service1 s=ss.getServiceById(id);
		
		return s;
	}
	
	@GetMapping("/home")
	public List<Service1> home(@RequestParam int catid){
		
		return ss.findBycatid(catid);
	}
	
	@PostMapping("/book")
	public BookingEntity book(@RequestBody BookingEntity b,@RequestParam int sp_id,@RequestParam int pk_id,@RequestParam int user_id)
	{
		System.out.println(user_id);
		ServiceProvider sp=spservice.getSPBySPId(sp_id);
		Service1 s=ss.getServiceById(pk_id);
		User u=uservice.getUserById(user_id);
		
		//ls.changeStatus()
		
		BookingEntity books = bookservice.addBooking(new BookingEntity(u, sp, s, b.getAddress(), b.getDate(),
				b.getPayment_status(),0));
		return books;
	}
	
	
	
	
	
	@PostMapping("/paymentReceived")
	public void paymentReceived(@RequestBody DummyPaymentRequest dr)
	{
		System.out.println("Booking ID "+dr.getBooking_id());
		System.out.println("Labour ID "+dr.getLabour_id());
		//ls.freeStatus(dr.getLabour_id());
		bookservice.paymentReceived(dr.getBooking_id());
	}
	
//	//status of labour 1=>0
//	@PostMapping("/paymentReceived")
//	public void paymentReceived(@RequestBody int booking_id)
//	{
//		System.out.println(booking_id);
//		bookservice.paymentReceived(booking_id);
//	}
	
//	@PostMapping("/feedback")
//	public Feedback givefeedback(@RequestBody Dummyfeedback feed,@RequestParam int service_id,@RequestParam int user_id )
//	{
//		Feedback f=null;
//    	
//    	Service1 service = ss.findBySid(service_id); 
//    	User user = uservice.findByUid(user_id);
//    	
//    	System.out.println(service_id);
//    	System.out.println(user_id);
//
//    	f = fservice.addfeedback(new Feedback(service,user,feed.getRating(),feed.getComment()));
//    	System.out.println(f);
//	    return f;
//	}
	
	
}
