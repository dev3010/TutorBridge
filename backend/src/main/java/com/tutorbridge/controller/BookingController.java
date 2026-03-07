package com.tutorbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody Map<String, Object> request) {
        // TODO: student creates booking (tutorId, subjectId, date, time, mode)
        return ResponseEntity.ok(Map.of("message", "Booking created - to be implemented"));
    }

    @GetMapping("/student")
    public ResponseEntity<?> getStudentBookings() {
        // TODO: return bookings for logged-in student
        return ResponseEntity.ok(Map.of("message", "Student bookings - to be implemented"));
    }

    @GetMapping("/tutor")
    public ResponseEntity<?> getTutorBookings() {
        // TODO: return bookings for logged-in tutor
        return ResponseEntity.ok(Map.of("message", "Tutor bookings - to be implemented"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookingById(@PathVariable Long id) {
        // TODO: return booking details (if authorized)
        return ResponseEntity.ok(Map.of("message", "Booking details - to be implemented", "id", id));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestBody Map<String, String> request) {
        // TODO: tutor accepts/rejects (CONFIRMED, REJECTED)
        return ResponseEntity.ok(Map.of("message", "Booking status updated - to be implemented", "id", id));
    }

    @PatchMapping("/{id}/complete")
    public ResponseEntity<?> markComplete(@PathVariable Long id) {
        // TODO: mark booking as COMPLETED
        return ResponseEntity.ok(Map.of("message", "Booking completed - to be implemented", "id", id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> cancelBooking(@PathVariable Long id) {
        // TODO: cancel booking
        return ResponseEntity.ok(Map.of("message", "Booking cancelled - to be implemented", "id", id));
    }
}
