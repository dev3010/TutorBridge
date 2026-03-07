package com.tutorbridge.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class BookingRequestDTO {
    @NotNull
    private Long tutorId;
    @NotNull
    private Long subjectId;
    private Long slotId;
    @NotNull
    private LocalDate sessionDate;
    @NotNull
    private BigDecimal price;
}
