package com.cleaningServices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cleaningServices.Dummy.DummyLabour;
import com.cleaningServices.Dummy.DummyService;
import com.cleaningServices.Dummy.DummyServiceProvider;
import com.cleaningServices.entities.BookingEntity;
import com.cleaningServices.entities.Category;
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
public class SPController {
	
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
 
 @PostMapping("/spRegister")
	public ServiceProvider registerServiceProvider(@RequestBody DummyServiceProvider dr)
	{
		ServiceProvider sp=null;
 	Role r=rl.getRole(dr.getRole_id());
 	Login c=lservice.saveLogin(new Login(dr.getUsername(),dr.getPassword(),r));
 	
 	System.out.println("Email : "+dr.getEmail() + "Role_id:"+dr.getRole_id());
 	sp=spservice.saveSP(new ServiceProvider(c,dr.getName(),dr.getEmail(),dr.getContactno(),dr.getAddress(),dr.getLicense_id(),dr.getStatus()));
 	
 	//System.out.println(sp);
		//System.out.println(dr.getName()+""+dr.getContactno());
	    return sp;
	}
 
 @PostMapping("/getSP")
	public ServiceProvider getSp(@RequestBody int login_id) {
		//System.out.println(id);
		 System.out.println("in getSp "+login_id);
	    ServiceProvider sp = spservice.getSp(login_id);
	    System.out.println(sp);
	    return sp;
	}
 
 @PostMapping("/addLabour")
	public Labour addLabour(@RequestBody Labour l,@RequestParam String name)
	{
		Login lg = lservice.getLoginByUsername(name);
	    if (lg == null) {
	        // Handle case where Login is not found
	        throw new IllegalArgumentException("Login not found for username: " + name);
	    }

	    ServiceProvider sp = spservice.getSpByLoginId(lg);
	    if (sp == null) {
	        // Handle case where ServiceProvider is not found
	        throw new IllegalArgumentException("ServiceProvider not found for login id: " + lg.getLoginid());
	    }
	    
	    //String name, String contactno, String pan_no, int status, ServiceProvider sp_id
	    Labour lb = ls.addLabour(new Labour(l.getName(), l.getContactno(), l.getPan_no(),0, sp));
	    return lb;
		
	}
 
 @PostMapping("/addService")
	public Service1 addServ(@RequestBody DummyService s)
	{
		System.out.println(1);
		Service1 s1=null;
	
		System.out.println(s.getSpname());
		System.out.println(s.getSname());
		
		
 	ServiceProvider spid = spservice.getSPBySname(s.getSpname());
 	Category cat = catservice.getIdByCname(s.getCatname());
 	//System.out.println(s.getLabour_name());
 	
 	System.out.println(2);
 	
 	//Labour lid = ls.getLabourName(s.getLabour_name());
 	//System.out.println("lid" +lid);
		
 	//System.out.println(3);
 	
 	s1 = ss.addService(new Service1(s.getDescription(),s.getPrice(),s.getSname(),spid,cat,s.getStatus()));
 	//System.out.println(s1);
 	
 	//System.out.println(4);
 	
 	//maintain status of labour 0 => 1 enagaged for work
 	//System.out.println("Labour ID"+lid.getLabour_id());
 	//ls.changeStatus(lid.getLabour_id());
 	
	    return s1;
	}
 @PostMapping("/viewLabour")
	public List<Labour> viewLabours(@RequestBody int sp_id)
	{
		//get details of labours who has id 
		ServiceProvider sp = spservice.getUserById(sp_id);
		
		 List<Labour> lb = ls.getLabourbySP(sp);
		 System.out.println("Service Provider : " + sp +"Labour" + lb );
		 
	        if (lb == null) {
	            return null;
	        }

	        // Get the ServiceProvider object by Login
	        //ServiceProvider serviceProvider = spservice.getSpByLoginId(login);
//	        if (serviceProvider == null) {
//	            // Handle case where ServiceProvider is not found
//	            // You might throw an exception or return an appropriate response
//	            return null;
//	        }

	       // System.out.println("Service Provider : " + serviceProvider.getSp_id());

	        // Get the list of Labour objects by sp_id
	       return lb;
	        
	}
 
 @GetMapping("/spOrders")
	public List<BookingEntity> getSpOrders(@RequestParam String uname)
	{
		Login login = lservice.getLoginByUsername(uname);
		ServiceProvider u=spservice.getSpByLoginId(login);
		return bookservice.getOrderBySpId(u.getSp_id());
	}
 

	@PutMapping("/updateProfileSp/{uname}")
	public int updateProfile(@RequestBody DummyServiceProvider cr,@PathVariable("uname") String uname)
	{
		System.out.println("updateProfileSp");
		User a=null;
		Login login = lservice.getLoginByUsername(uname);
		System.out.println(login.getLoginid());
 	
 	//System.out.println("Email : "+cr.getEmail() + " Role_id:"+cr.getRole_id()+ " Login_id :"+c.getLoginid());
 	
	    int s= spservice.updateSp(cr.getName(),cr.getEmail(),cr.getContactno(),cr.getAddress(),cr.getLicense_id(),login.getLoginid());
	    int l= lservice.updateLogin(cr.getUsername(),cr.getPassword(),login.getLoginid());
	    System.out.println(s+" "+l);
	    if(s==1&&l==1)
	    {
	    	return 1;
	    }
	    else
	    	return 0;
	}
	
	/*@GetMapping("/viewAllLabour")
	public Labour viewAllLabour(@RequestParam int service_id) {
		
		Service1 s=ss.getLabourIdByServiceId(service_id);
		//System.out.println(s.getLabour_id().getLabour_id());
		Labour l=ls.getLabourByServiceProviderId(s.getLabour_id().getLabour_id());
		
		return l;		
	}
	*/
	@GetMapping("/editProfileSp")
	public DummyServiceProvider editProfileSp(@RequestParam String uname)
	{
		DummyServiceProvider dp=null;
		
		Login login = lservice.getLoginByUsername(uname);
        if (login == null) {
            return null;
        }
        	ServiceProvider sp = spservice.getSpByLoginId(login);
            if (sp== null) {
                // Handle case where ServiceProvider is not found
                // You might throw an exception or return an appropriate response
                return null;
            }
            
            	dp=new DummyServiceProvider(sp.getName(), sp.getEmail(), sp.getContactno(), sp.getAddress(), login.getPassword()
            			,login.getUsername(),sp.getLicense_id(),login.getRole().getRole_id(),sp.getStatus());
            	System.out.println(dp);
        
        return dp;
	}
	
///////////////////////////
	
	@PostMapping("/rejectLabour")
	public void rejectLabour(@RequestBody int labour_id)
	{
		ls.rejectLabour(labour_id);
	}
	
	
	@PostMapping("/getLabour")
	public Labour getLabour(@RequestBody int labour_id)
	{
		return ls.getLabour(labour_id);
	}
	
	
	@GetMapping("/viewEmptyLabour")
	public List<Labour> viewEmptyLabour(@RequestParam int sp_id) {
		
		return ls.EmptyAll(sp_id);
	}
	
	@PostMapping("/setLabour")
	public void setLabour(@RequestBody DummyLabour dl)
	{
		System.out.println(dl.getLabour_id()+dl.getName()+dl.getContactno()+dl.getPan_no());
		 ls.updateLabour(dl);
	}
	
	@GetMapping("/allocateLabour")
	public int allocateLabour(@RequestParam int lab_id,@RequestParam int booking_id)
	{
		Labour l=ls.getLabourIdById(lab_id);
		int b=bookservice.updateLabour(l.getLabour_id(),booking_id);
		return b;
		
		
	}
	
	@GetMapping("/updatePayment")
	public int updatePayment(@RequestParam int booking_id)
	{
		int b=bookservice.updatePayment(booking_id);
		return b;
	}
	
	@GetMapping("/engageLabour")
	public int engageLabour(@RequestParam int lab_id)
	{
		int b=ls.engageLabour(lab_id);
		return b;
	}
	///////////////////////////////
	@GetMapping("/freeLabourBybook_id")
	public int freeStatusByBookID(@RequestParam int booking_id)
	{
		//Get bookID details 
		//bookid labour_id
		//realease labour
		System.out.println("hi");
		BookingEntity bk =  bookservice.findByBookingID(booking_id);
		return ls.freeStatus(bk.getLabour_id());
		
//		System.out.println("in freeLabour"+lab_id);
//		int b=ls.freeStatus(lab_id);
//		return b;
	}

}
