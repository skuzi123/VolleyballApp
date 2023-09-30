package com.engineeringthesis.VolleyballApp.data.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "trainers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TrainerEntity extends AbstractEntity {

    @ManyToOne(cascade = CascadeType.REMOVE)
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
