package com.tutorbridge.repository;

import com.tutorbridge.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("""
        SELECT u FROM User u
        JOIN u.roles r
        WHERE r.name = :role
    """)
    Page<User> findByRole(String role, Pageable pageable);

    @Query("SELECT COUNT(u) FROM User u WHERE u.status = 'ACTIVE'")
    Long countActiveUsers();
}