package com.tutorbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin(origins = "http://localhost:3000")
public class NotificationController {

    @GetMapping
    public ResponseEntity<?> getNotifications(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        // TODO: return notifications for logged-in user
        return ResponseEntity.ok(Map.of("message", "Notifications - to be implemented"));
    }

    @PatchMapping("/{id}/read")
    public ResponseEntity<?> markAsRead(@PathVariable Long id) {
        // TODO: mark notification as read
        return ResponseEntity.ok(Map.of("message", "Notification marked as read - to be implemented", "id", id));
    }

    @PatchMapping("/read-all")
    public ResponseEntity<?> markAllAsRead() {
        // TODO: mark all notifications as read
        return ResponseEntity.ok(Map.of("message", "All notifications marked as read - to be implemented"));
    }

    @GetMapping("/unread-count")
    public ResponseEntity<?> getUnreadCount() {
        // TODO: return count of unread notifications
        return ResponseEntity.ok(Map.of("count", 0));
    }
}
