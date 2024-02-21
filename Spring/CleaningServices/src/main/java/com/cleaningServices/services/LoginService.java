package com.cleaningServices.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cleaningServices.entities.Login;
import com.cleaningServices.repository.Login_repo;

import jakarta.transaction.Transactional;

@Service
public class LoginService {

		@Autowired
		Login_repo lrepo;
		
		
		public Login saveLogin(Login u)
		{
			return lrepo.save(u);
		}
		
		public Login getLoginByUsername(String uname)
		{
			System.out.println("lservice: "+uname);
			
			 return lrepo.getUserByUsername(uname);
		}
		
		@Transactional
		public int updateLogin(String username, String password,int lid) {
			
			return lrepo.updateLogin(username,password,lid);
		}
		/*public int getLoginByUsernamepass(String uname,String pass)
		{
			System.out.println(uname+" "+pass);
			
			 return lrepo.getUserByUsernamepass(uname,pass);
		}
		public Login getLoginByUserpass(String uname,String pass)
		{
			System.out.println(uname+" "+pass);
			
			 return lrepo.getUserByUserpass(uname,pass);
		}
		
		*/
	}


