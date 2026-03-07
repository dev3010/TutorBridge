package com.tutorbridge.repository;

import com.tutorbridge.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    List<Favorite> findByStudentId(Long studentId);
    Optional<Favorite> findByStudentIdAndTutorId(Long studentId, Long tutorId);
    boolean existsByStudentIdAndTutorId(Long studentId, Long tutorId);
    void deleteByStudentIdAndTutorId(Long studentId, Long tutorId);
}
