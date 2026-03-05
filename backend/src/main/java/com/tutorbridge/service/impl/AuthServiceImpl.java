package com.tutorbridge.service.impl;

import com.tutorbridge.dto.AuthDtos;
import com.tutorbridge.entity.Role;
import com.tutorbridge.entity.User;
import com.tutorbridge.repository.RoleRepository;
import com.tutorbridge.repository.UserRepository;
import com.tutorbridge.security.JwtUtil;
import com.tutorbridge.service.AuthService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    public AuthServiceImpl(UserRepository userRepository,
                           RoleRepository roleRepository,
                           PasswordEncoder passwordEncoder,
                           AuthenticationManager authenticationManager,
                           JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @Override
    @Transactional
    public AuthDtos.AuthResponse register(AuthDtos.RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new IllegalArgumentException("Email already registered");
        }

        String roleName = "ROLE_" + request.role().toUpperCase();
        Role role = roleRepository.findByName(roleName)
                .orElseGet(() -> roleRepository.save(Role.builder().name(roleName).build()));

        User user = User.builder()
                .email(request.email())
                .fullName(request.fullName())
                .passwordHash(passwordEncoder.encode(request.password()))
                .emailVerified(true) // simplified for now
                .accountStatus("ACTIVE")
                .roles(Collections.singleton(role))
                .build();

        User saved = userRepository.save(user);

        List<String> roles = saved.getRoles().stream()
                .map(Role::getName)
                .collect(Collectors.toList());

        String token = jwtUtil.generateToken(saved.getEmail(), Map.of("roles", roles));

        return new AuthDtos.AuthResponse(
                token,
                saved.getId(),
                saved.getFullName(),
                saved.getEmail(),
                roles
        );
    }

    @Override
    public AuthDtos.AuthResponse login(AuthDtos.LoginRequest request) {
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.email(), request.password())
            );
            SecurityContextHolder.getContext().setAuthentication(auth);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Invalid email or password");
        }

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new BadCredentialsException("Invalid email or password"));

        List<String> roles = user.getRoles().stream()
                .map(Role::getName)
                .collect(Collectors.toList());

        String token = jwtUtil.generateToken(user.getEmail(), Map.of(
                "roles", roles
        ));

        return new AuthDtos.AuthResponse(
                token,
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                roles
        );
    }
}

