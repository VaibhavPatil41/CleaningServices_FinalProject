package com.cleaningServices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cleaningServices.Dummy.Dummyuser;
import com.cleaningServices.entities.BookingEntity;
import com.cleaningServices.entities.Feedback;
import com.cleaningServices.entities.Login;
import com.cleaningServices.entities.Role;
import com.cleaningServices.entities.Service1;
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
public class CustomerController {
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
	
	@PostMapping("/userRegister")
	public User registerCustomer(@RequestBody Dummyuser cr)
	{
    	User a=null;
    	Role r=rl.getRole(cr.getRole_id());
    	Login c=lservice.saveLogin(new Login(cr.getUsername(),cr.getPassword(),r));
    	
    	System.out.println("Email : "+cr.getEmail() + "Role_id:"+cr.getRole_id());
    	a=uservice.saveUser(new User(c,cr.getName(),cr.getEmail(),cr.getContactno(),cr.getAddress(),cr.getDob()));
    	
		System.out.println(cr.getName()+""+cr.getContactno());
	    return a;
	}
	
	@PostMapping("/getCust")
	public User getCust(@RequestBody int login_id) {
		//System.out.println(id);
		 System.out.println("in getUser "+login_id);
	    User U = uservice.getUserByLoginId(login_id);
	    System.out.println(U);
	    return U;
	}
	

	@GetMapping("/custOrders")
	public List<BookingEntity> getCustOrders(@RequestParam String uname)
	{
		Login login = lservice.getLoginByUsername(uname);
		User u=uservice.getUserByLoginId(login);
		
		return bookservice.getOrderByUserId(u.getUser_id());
	}
	
	@PutMapping("/updateProfileCust")
	public int updateProfile(@RequestBody Dummyuser cr)
	{
		
		User a=null;
		Login login = lservice.getLoginByUsername(cr.getUsername());
		System.out.println(login.getLoginid());
    	
    	//System.out.println("Email : "+cr.getEmail() + " Role_id:"+cr.getRole_id()+ " Login_id :"+c.getLoginid());
    	
	    int u= uservice.updateUser(cr.getName(),cr.getEmail(),cr.getContactno(),cr.getAddress(),cr.getDob(),login.getLoginid());
	    int l= lservice.updateLogin(cr.getUsername(),cr.getPassword(),login.getLoginid());
	    System.out.println(u+" "+l);
	    if(u==1&&l==1)
	    {
	    	return 1;
	    }
	    else
	    	return 0;
	    		
	}
	
	@GetMapping("/editProfileCust")
	public Dummyuser editProfile(@RequestParam String uname)
	{
		Dummyuser du=null;
		
		System.out.println(uname);
		Login login = lservice.getLoginByUsername(uname);
        if (login == null) {
            return null;
        }
        User u = uservice.getUserByLoginId(login);
        if (u== null) {
            // Handle case where ServiceProvider is not found
            // You might throw an exception or return an appropriate response
            return null;
        }
        System.out.println(u.getName());
        	du=new Dummyuser(u.getName(), u.getEmail(), u.getContactno(), u.getAddress(), u.getDob(), login.getPassword(),
			login.getUsername(),login.getRole().getRole_id());
        return du;
 
	}
	
	@PostMapping("/feedback")
	public Feedback givefeedback(@RequestBody Feedback feed,@RequestParam int service_id,@RequestParam int user_id )
	{
		Feedback f=null;
    	
    	Service1 service = ss.findBySid(service_id); 
    	User user = uservice.findByUid(user_id);

    	f = fservice.addfeedback(new Feedback(service,user,feed.getRating(),feed.getComment()));
    	System.out.println(f);
	    return f;
	}

}
