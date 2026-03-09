package com.tutorbridge.service;

import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;

public interface AdminService {
    Map<String, Object> getDashboardStats();

    List<?> getPendingTutors();

    void approveTutor(Long tutorId);

    void rejectTutor(Long tutorId, Map<String, String> reason);

    Page<?> getUsers(String role, int page, int size);

    void updateUserStatus(Long userId, String status);

    Map<String, Object> getPlatformAnalytics();

    Page<?> getTransactions(int page, int size);
}
