package com.tutorbridge.repository;

import com.tutorbridge.entity.AvailabilitySlot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AvailabilitySlotRepository extends JpaRepository<AvailabilitySlot, Long> {
    List<AvailabilitySlot> findByTutorIdAndIsAvailableTrue(Long tutorId);
}
