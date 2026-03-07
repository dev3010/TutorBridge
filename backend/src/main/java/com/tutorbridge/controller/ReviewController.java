package com.tutorbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewController {

    @PostMapping
    public ResponseEntity<?> createReview(@RequestBody Map<String, Object> request) {
        // TODO: student leaves review (bookingId, rating 1-5, comment) after completed session
        return ResponseEntity.ok(Map.of("message", "Review submitted - to be implemented"));
    }

    @GetMapping("/tutor/{tutorId}")
    public ResponseEntity<?> getTutorReviews(@PathVariable Long tutorId,
                                             @RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "10") int size) {
        // TODO: list reviews for a tutor
        return ResponseEntity.ok(Map.of("message", "Tutor reviews - to be implemented", "tutorId", tutorId));
    }

    @GetMapping("/booking/{bookingId}")
    public ResponseEntity<?> getReviewByBooking(@PathVariable Long bookingId) {
        // TODO: get review for a specific booking
        return ResponseEntity.ok(Map.of("message", "Review - to be implemented", "bookingId", bookingId));
    }
}
