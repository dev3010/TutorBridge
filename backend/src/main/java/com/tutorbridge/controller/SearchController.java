package com.tutorbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/search")
@CrossOrigin(origins = "http://localhost:3000")
public class SearchController {

    @GetMapping("/tutors")
    public ResponseEntity<?> searchTutors(
            @RequestParam(required = false) String subject,
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String mode,
            @RequestParam(required = false) Double minRating,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) Integer experience,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        // TODO: filter tutors by subject, location, mode, rating, price, experience
        return ResponseEntity.ok(Map.of(
                "message", "Tutor search - to be implemented",
                "filters", Map.of("subject", subject, "city", city, "mode", mode, "page", page, "size", size)
        ));
    }
}
