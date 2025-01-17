package com.ggums.ggumtle.common.entity;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BaseTime {

    @Column(nullable = false)
    @CreatedDate
    private LocalDateTime createdDate;

    @Column(nullable = false)
    @LastModifiedDate
    private LocalDateTime updatedDate;
}
