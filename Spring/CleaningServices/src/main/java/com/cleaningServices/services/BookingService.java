package com.cleaningServices.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cleaningServices.entities.BookingEntity;
import com.cleaningServices.repository.BookingRepository;

import jakarta.transaction.Transactional;

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
	
	public void paymentReceived(int booking_id) {
		
		bookrepo.paymentReceived(booking_id);
	}
	

	@Transactional
	public int updateLabour(int labour_id,int booking_id) {
		
		return bookrepo.updateLabourId(labour_id,booking_id);
	}


	@Transactional
	public int updatePayment(int booking_id) {
		
		return bookrepo.updatePayment(booking_id);
	}
	

	public BookingEntity findByBookingID(int booking_id) {
		return bookrepo.findByBookingID(booking_id);
	}
	
	
}
