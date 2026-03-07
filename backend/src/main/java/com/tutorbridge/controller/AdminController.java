package com.tutorbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @GetMapping("/dashboard")
    public ResponseEntity<?> getDashboard() {
        // TODO: platform stats (users, tutors, bookings, revenue)
        return ResponseEntity.ok(Map.of("message", "Admin dashboard - to be implemented"));
    }

    @GetMapping("/tutors/pending")
    public ResponseEntity<?> getPendingTutors() {
        // TODO: list tutors awaiting approval
        return ResponseEntity.ok(Map.of("message", "Pending tutors - to be implemented"));
    }

    @PatchMapping("/tutors/{id}/approve")
    public ResponseEntity<?> approveTutor(@PathVariable Long id) {
        // TODO: approve tutor registration
        return ResponseEntity.ok(Map.of("message", "Tutor approved - to be implemented", "id", id));
    }

    @PatchMapping("/tutors/{id}/reject")
    public ResponseEntity<?> rejectTutor(@PathVariable Long id, @RequestBody(required = false) Map<String, String> reason) {
        // TODO: reject tutor registration
        return ResponseEntity.ok(Map.of("message", "Tutor rejected - to be implemented", "id", id));
    }

    @GetMapping("/users")
    public ResponseEntity<?> getUsers(
            @RequestParam(required = false) String role,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        // TODO: list all users (students, tutors)
        return ResponseEntity.ok(Map.of("message", "User list - to be implemented"));
    }

    @PatchMapping("/users/{id}/status")
    public ResponseEntity<?> updateUserStatus(@PathVariable Long id, @RequestBody Map<String, String> request) {
        // TODO: suspend/activate user (ACTIVE, SUSPENDED)
        return ResponseEntity.ok(Map.of("message", "User status updated - to be implemented", "id", id));
    }

    @GetMapping("/analytics")
    public ResponseEntity<?> getAnalytics() {
        // TODO: revenue, growth, top tutors, etc.
        return ResponseEntity.ok(Map.of("message", "Platform analytics - to be implemented"));
    }

    @GetMapping("/transactions")
    public ResponseEntity<?> getTransactions(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        // TODO: list all transactions
        return ResponseEntity.ok(Map.of("message", "Transactions - to be implemented"));
    }
}
