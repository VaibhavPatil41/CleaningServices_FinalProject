package com.cleaningServices.repository;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cleaningServices.entities.BookingEntity;

import jakarta.transaction.Transactional;

@Repository
public interface BookingRepository extends JpaRepository<BookingEntity, Integer> {

	//BookingEntity save(BookingEntity bookingEntity);

//	@Query(value="select * from booking b WHERE user_id=:user_id",nativeQuery = true)
//	Optional<BookingEntity> findByUserId(int user_id);

	
//	@Query(value="select * from booking b WHERE sp_id=:sp_id",nativeQuery=true)
//	Optional<BookingEntity> findBySpId(int sp_id);
	
	@Query(value="select * from booking b WHERE user_id=:user_id",nativeQuery = true)
	List<BookingEntity> findByUserId(int user_id);
	
	@Query(value="select * from booking b WHERE sp_id=:sp_id",nativeQuery=true)
	List<BookingEntity> findBySpId(int sp_id);

	
	@Modifying
	@Transactional
	@Query(value="update Booking SET payment_status = 1 WHERE booking_id=:booking_id",nativeQuery=true)
	void paymentReceived(int booking_id);
	
	@Modifying
	@Query(value="update booking SET labour_id=:labour_id WHERE booking_id=:booking_id",nativeQuery = true)
	int updateLabourId(int labour_id,int booking_id);

	
	@Modifying
	@Query(value="update booking SET payment_status=1 WHERE booking_id=:booking_id",nativeQuery = true)
	int updatePayment(int booking_id);
	
	
	
	@Query(value="select * from booking  WHERE booking_id=:booking_id",nativeQuery = true)
	BookingEntity findByBookingID(int booking_id);
}
