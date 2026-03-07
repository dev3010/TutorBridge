package com.tutorbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser() {
        // TODO: return logged-in user profile from SecurityContext
        return ResponseEntity.ok(Map.of("message", "User profile - to be implemented"));
    }

    @PutMapping("/me")
    public ResponseEntity<?> updateProfile(@RequestBody Map<String, Object> updates) {
        // TODO: update user profile (name, phone, etc.)
        return ResponseEntity.ok(Map.of("message", "Profile updated - to be implemented"));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) {
        // TODO: send password reset email
        return ResponseEntity.ok(Map.of("message", "Reset link sent - to be implemented"));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> request) {
        // TODO: reset password with token
        return ResponseEntity.ok(Map.of("message", "Password reset - to be implemented"));
    }
}
