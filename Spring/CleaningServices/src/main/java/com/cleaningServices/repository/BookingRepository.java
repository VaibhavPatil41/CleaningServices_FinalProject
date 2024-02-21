package com.cleaningServices.repository;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cleaningServices.entities.BookingEntity;

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

}
