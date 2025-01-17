package com.ggums.ggumtle.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Bucket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Size(max = 100)
    private String title;

    @Size(max = 1000)
    private String timeCapsule;

    private String bucketPicture;

    @Enumerated(EnumType.STRING)
    private ReminderDate reminderDate;

    private Double latitude;

    private Double longitude;

    private String color;

    private String address;

    private Boolean isPrivate;

    private LocalDateTime createdDate;

    private LocalDate achievementDate;

    @OneToMany(mappedBy = "bucket", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    List<BucketReaction> bucketReactions = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "bucket_interest",
            joinColumns = @JoinColumn(name = "bucket_id"),
            inverseJoinColumns = @JoinColumn(name = "interest_id")
    )
    private Set<Interest> bucketInterest = new HashSet<>();
}
