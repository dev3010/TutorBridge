package com.tutorbridge.dto;

import com.tutorbridge.entity.enums.TeachingMode;
import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.Set;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class TutorProfileDTO {
    private Long id;
    private Long userId;
    private String fullName;
    private String bio;
    private Integer experienceYears;
    private String qualification;
    private BigDecimal hourlyRate;
    private TeachingMode mode;
    private String city;
    private String area;
    private BigDecimal rating;
    private Integer totalReviews;
    private Set<String> subjectNames;
}
