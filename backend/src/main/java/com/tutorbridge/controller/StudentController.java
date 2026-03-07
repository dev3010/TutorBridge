package com.tutorbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @GetMapping("/me")
    public ResponseEntity<?> getMyProfile() {
        // TODO: return logged-in student profile (ROLE_STUDENT)
        return ResponseEntity.ok(Map.of("message", "Student profile - to be implemented"));
    }

    @GetMapping("/me/bookings")
    public ResponseEntity<?> getMyBookings() {
        // TODO: return student's booking history
        return ResponseEntity.ok(Map.of("message", "My bookings - to be implemented"));
    }

    @GetMapping("/me/favorites")
    public ResponseEntity<?> getMyFavorites() {
        // TODO: return favorite tutors
        return ResponseEntity.ok(Map.of("message", "Favorite tutors - to be implemented"));
    }
}
