package com.tutorbridge.controller;

import com.tutorbridge.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/dashboard")
    public ResponseEntity<?> getDashboard() {
        return ResponseEntity.ok(adminService.getDashboardStats());
    }

    @GetMapping("/tutors/pending")
    public ResponseEntity<?> getPendingTutors() {
        return ResponseEntity.ok(adminService.getPendingTutors());
    }

    @PatchMapping("/tutors/{id}/approve")
    public ResponseEntity<?> approveTutor(@PathVariable Long id) {
        adminService.approveTutor(id);
        return ResponseEntity.ok(Map.of("message", "Tutor approved successfully"));
    }

    @PatchMapping("/tutors/{id}/reject")
    public ResponseEntity<?> rejectTutor(
            @PathVariable Long id,
            @RequestBody(required = false) Map<String, String> reason
    ) {
        adminService.rejectTutor(id, reason);
        return ResponseEntity.ok(Map.of("message", "Tutor rejected successfully"));
    }

    @GetMapping("/users")
    public ResponseEntity<Page<?>> getUsers(
            @RequestParam(required = false) String role,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        return ResponseEntity.ok(adminService.getUsers(role, page, size));
    }

    @PatchMapping("/users/{id}/status")
    public ResponseEntity<?> updateUserStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> request
    ) {
        adminService.updateUserStatus(id, request.get("status"));
        return ResponseEntity.ok(Map.of("message", "User status updated"));
    }

    @GetMapping("/analytics")
    public ResponseEntity<?> getAnalytics() {
        return ResponseEntity.ok(adminService.getPlatformAnalytics());
    }

    @GetMapping("/transactions")
    public ResponseEntity<?> getTransactions(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        return ResponseEntity.ok(adminService.getTransactions(page, size));
    }
}