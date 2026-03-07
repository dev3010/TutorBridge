package com.tutorbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/favorites")
@CrossOrigin(origins = "http://localhost:3000")
public class FavoriteController {

    @GetMapping
    public ResponseEntity<?> getFavorites() {
        // TODO: return logged-in student's favorite tutors
        return ResponseEntity.ok(Map.of("message", "Favorite tutors - to be implemented"));
    }

    @PostMapping("/{tutorId}")
    public ResponseEntity<?> addFavorite(@PathVariable Long tutorId) {
        // TODO: add tutor to favorites (student only)
        return ResponseEntity.ok(Map.of("message", "Tutor added to favorites - to be implemented", "tutorId", tutorId));
    }

    @DeleteMapping("/{tutorId}")
    public ResponseEntity<?> removeFavorite(@PathVariable Long tutorId) {
        // TODO: remove tutor from favorites
        return ResponseEntity.ok(Map.of("message", "Tutor removed from favorites - to be implemented", "tutorId", tutorId));
    }

    @GetMapping("/check/{tutorId}")
    public ResponseEntity<?> isFavorite(@PathVariable Long tutorId) {
        // TODO: check if tutor is in favorites
        return ResponseEntity.ok(Map.of("isFavorite", false, "tutorId", tutorId));
    }
}
