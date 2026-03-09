package com.tutorbridge.repository;

import com.tutorbridge.entity.TutorProfile;
import com.tutorbridge.entity.enums.TeachingMode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;
import java.util.List;

public interface TutorProfileRepository extends JpaRepository<TutorProfile, Long> {

    TutorProfile findByUserId(Long userId);

    @Query("SELECT t FROM TutorProfile t WHERE " +
           "(:subjectId IS NULL OR EXISTS (SELECT s FROM t.subjects s WHERE s.id = :subjectId)) AND " +
           "(:city IS NULL OR t.city = :city) AND " +
           "(:mode IS NULL OR t.mode = :mode) AND " +
           "(:minRating IS NULL OR t.rating >= :minRating) AND " +
           "(:minPrice IS NULL OR t.hourlyRate >= :minPrice) AND " +
           "(:maxPrice IS NULL OR t.hourlyRate <= :maxPrice)")
    Page<TutorProfile> searchTutors(Long subjectId, String city, TeachingMode mode,
                                    BigDecimal minRating, BigDecimal minPrice, BigDecimal maxPrice,
                                    Pageable pageable);

    List<TutorProfile> findByApprovalStatus(String status);
}
