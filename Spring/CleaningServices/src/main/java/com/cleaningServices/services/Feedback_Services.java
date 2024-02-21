package com.cleaningServices.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cleaningServices.entities.Feedback;
import com.cleaningServices.repository.FeedbackRepository;

@Service
public class Feedback_Services {

	@Autowired
		FeedbackRepository frepo;
	
	public Feedback addfeedback(Feedback feedback) {
		// TODO Auto-generated method stub
		return frepo.save(feedback);
	}

}
