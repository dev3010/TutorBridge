package com.tutorbridge.service;

import com.tutorbridge.dto.AuthDtos;

public interface AuthService {

    AuthDtos.AuthResponse register(AuthDtos.RegisterRequest request);

    AuthDtos.AuthResponse login(AuthDtos.LoginRequest request);
}

