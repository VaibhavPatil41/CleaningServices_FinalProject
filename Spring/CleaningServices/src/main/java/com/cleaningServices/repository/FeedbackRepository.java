package com.cleaningServices.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cleaningServices.entities.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
	
	
}
