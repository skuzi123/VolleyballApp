package com.engineeringthesis.VolleyballApp.data.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity extends AbstractEntity {
    @Column(name = "username", nullable = false)
    private String username;
    @Column(name = "password", nullable = false)
    private String password;
    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private ERole role;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private TrainerEntity trainer;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private PlayerEntity player;

    public UserEntity(String username, String password, ERole role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
