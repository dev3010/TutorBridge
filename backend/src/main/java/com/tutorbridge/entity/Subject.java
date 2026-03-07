package com.tutorbridge.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "subjects", indexes = @Index(name = "idx_subject_name", columnList = "subject_name"))
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subject_id")
    private Long id;

    @Column(name = "subject_name", nullable = false, unique = true)
    private String subjectName;
}
