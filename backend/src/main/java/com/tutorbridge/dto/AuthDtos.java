package com.tutorbridge.dto;

import java.util.List;

public class AuthDtos {

    public record RegisterRequest(
            String fullName,
            String email,
            String password,
            String role // STUDENT or TUTOR or ADMIN (simplified)
    ) {}

    public record LoginRequest(
            String email,
            String password
    ) {}

    public record AuthResponse(
            String token,
            Long userId,
            String fullName,
            String email,
            List<String> roles
    ) {
    }
}


