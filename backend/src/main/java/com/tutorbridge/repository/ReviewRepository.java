package com.tutorbridge.repository;

import com.tutorbridge.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Page<Review> findByTutorId(Long tutorId, Pageable pageable);
    Review findByBookingId(Long bookingId);
}
