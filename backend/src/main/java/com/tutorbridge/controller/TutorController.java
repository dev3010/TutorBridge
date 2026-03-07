package com.tutorbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/tutors")
@CrossOrigin(origins = "http://localhost:3000")
public class TutorController {

    @GetMapping("/{id}")
    public ResponseEntity<?> getTutorById(@PathVariable Long id) {
        // TODO: fetch tutor profile by id
        return ResponseEntity.ok(Map.of("message", "Tutor profile - to be implemented", "id", id));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getMyProfile() {
        // TODO: return logged-in tutor profile (ROLE_TUTOR)
        return ResponseEntity.ok(Map.of("message", "My tutor profile - to be implemented"));
    }

    @PostMapping("/profile")
    public ResponseEntity<?> createOrUpdateProfile(@RequestBody Map<String, Object> profile) {
        // TODO: create/update tutor profile (bio, subjects, rates, availability)
        return ResponseEntity.ok(Map.of("message", "Tutor profile saved - to be implemented"));
    }

    @GetMapping("/me/availability")
    public ResponseEntity<?> getMyAvailability() {
        // TODO: return tutor's availability slots
        return ResponseEntity.ok(Map.of("message", "Availability - to be implemented"));
    }

    @PostMapping("/me/availability")
    public ResponseEntity<?> setAvailability(@RequestBody Map<String, Object> slots) {
        // TODO: set availability slots
        return ResponseEntity.ok(Map.of("message", "Availability updated - to be implemented"));
    }

    @GetMapping("/me/earnings")
    public ResponseEntity<?> getEarnings() {
        // TODO: return earnings summary for tutor
        return ResponseEntity.ok(Map.of("message", "Earnings summary - to be implemented"));
    }
}
