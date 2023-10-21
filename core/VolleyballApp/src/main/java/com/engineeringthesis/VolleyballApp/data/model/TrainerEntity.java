package com.engineeringthesis.VolleyballApp.data.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "trainers")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TrainerEntity extends AbstractEntity {

    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
    @Column(name = "work_history"
    )
    private String workHistory;
    @Column(name = "achievements"
    )
    private String achievements;

    public void setUser(String userId) {
        if (userId == null) {
            this.user = null;
        } else {
            UserEntity user = new UserEntity();
            user.setId(userId);
            this.user = user;
        }
    }
}
