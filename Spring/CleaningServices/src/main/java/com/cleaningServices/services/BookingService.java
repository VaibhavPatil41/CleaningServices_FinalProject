package com.cleaningServices.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cleaningServices.entities.BookingEntity;
import com.cleaningServices.repository.BookingRepository;

@Service
public class BookingService {

	@Autowired 
		BookingRepository bookrepo;
	
	
	public BookingEntity addBooking(BookingEntity bookingEntity) {
		
		return bookrepo.save(bookingEntity);
	}


//	public Optional<BookingEntity> getOrderByUserId(int user_id) {
//		
//		return bookrepo.findByUserId(user_id);
//	}
	
	public List<BookingEntity> getOrderByUserId(int user_id) {
		
		return bookrepo.findByUserId(user_id);
	}


//	public Optional<BookingEntity> getOrderBySpId(int sp_id) {
//		
//		return bookrepo.findBySpId(sp_id);
//	}
	
	public List<BookingEntity> getOrderBySpId(int sp_id) {
		
		return bookrepo.findBySpId(sp_id);
	}


	
	
}
