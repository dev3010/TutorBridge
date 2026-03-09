package com.tutorbridge.service.impl;

import com.tutorbridge.repository.*;
import com.tutorbridge.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final UserRepository userRepository;
    private final TutorProfileRepository tutorProfileRepository;
    private final BookingRepository bookingRepository;
    private final PaymentRepository paymentRepository;

    @Override
    public Map<String, Object> getDashboardStats() {

        Map<String, Object> stats = new HashMap<>();

        stats.put("totalUsers", userRepository.count());
        stats.put("totalTutors", tutorProfileRepository.count());
        stats.put("totalBookings", bookingRepository.count());
        stats.put("totalRevenue", paymentRepository.getTotalRevenue());

        return stats;
    }

    @Override
    public List<?> getPendingTutors() {
        return tutorProfileRepository.findByApprovalStatus("PENDING");
    }

    @Override
    public void approveTutor(Long tutorId) {

        var tutor = tutorProfileRepository.findById(tutorId)
                .orElseThrow(() -> new RuntimeException("Tutor not found"));

        tutor.setApprovalStatus("APPROVED");

        tutorProfileRepository.save(tutor);
    }

    @Override
    public void rejectTutor(Long tutorId, Map<String, String> reason) {

        var tutor = tutorProfileRepository.findById(tutorId)
                .orElseThrow(() -> new RuntimeException("Tutor not found"));

        tutor.setApprovalStatus("REJECTED");

        tutorProfileRepository.save(tutor);
    }

    @Override
    public Page<?> getUsers(String role, int page, int size) {

        PageRequest pageable = PageRequest.of(page, size);

        if (role == null) {
            return userRepository.findAll(pageable);
        }

        return userRepository.findByRole(role, pageable);
    }

    @Override
    public void updateUserStatus(Long userId, String status) {

        var user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setStatus(status);

        userRepository.save(user);
    }

    @Override
    public Map<String, Object> getPlatformAnalytics() {

        Map<String, Object> analytics = new HashMap<>();

        analytics.put("totalRevenue", paymentRepository.getTotalRevenue());
        analytics.put("totalBookings", bookingRepository.count());
        analytics.put("activeUsers", userRepository.countActiveUsers());

        return analytics;
    }

    @Override
    public Page<?> getTransactions(int page, int size) {

        PageRequest pageable = PageRequest.of(page, size);

        return paymentRepository.findAll(pageable);
    }
}