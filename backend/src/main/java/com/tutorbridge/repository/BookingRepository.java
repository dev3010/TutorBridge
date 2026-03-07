package com.tutorbridge.repository;

import com.tutorbridge.entity.Booking;
import com.tutorbridge.entity.enums.BookingStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    Page<Booking> findByStudentId(Long studentId, Pageable pageable);
    Page<Booking> findByTutorId(Long tutorId, Pageable pageable);
    Page<Booking> findByStudentIdAndStatus(Long studentId, BookingStatus status, Pageable pageable);
    Page<Booking> findByTutorIdAndStatus(Long tutorId, BookingStatus status, Pageable pageable);
}
