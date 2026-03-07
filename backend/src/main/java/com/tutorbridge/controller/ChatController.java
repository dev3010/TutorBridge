package com.tutorbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Optional advanced feature: REST endpoints for chat.
 * For real-time messaging, use WebSocket (STOMP) in addition to or instead of these.
 */
@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:3000")
public class ChatController {

    @GetMapping("/conversations")
    public ResponseEntity<?> getConversations() {
        // TODO: list chat conversations for logged-in user
        return ResponseEntity.ok(Map.of("message", "Conversations - to be implemented"));
    }

    @GetMapping("/conversations/{otherUserId}")
    public ResponseEntity<?> getMessages(
            @PathVariable Long otherUserId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "50") int size
    ) {
        // TODO: fetch messages between current user and otherUserId
        return ResponseEntity.ok(Map.of("message", "Messages - to be implemented", "otherUserId", otherUserId));
    }

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(@RequestBody Map<String, Object> request) {
        // TODO: send message (receiverId, content, optional bookingId)
        return ResponseEntity.ok(Map.of("message", "Message sent - to be implemented"));
    }

    @PatchMapping("/conversations/{otherUserId}/read")
    public ResponseEntity<?> markConversationAsRead(@PathVariable Long otherUserId) {
        // TODO: mark messages from otherUserId as read
        return ResponseEntity.ok(Map.of("message", "Messages marked as read - to be implemented", "otherUserId", otherUserId));
    }
}
