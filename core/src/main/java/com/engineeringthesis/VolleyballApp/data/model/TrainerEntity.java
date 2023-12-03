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
    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "team_id")
    private TeamEntity team;
    @Column(name = "name")
    private String name;
    @Column(name = "surname")
    private String surname;
    @Column(name = "age")
    private Integer age;
    @Column(name = "work_history"
    )
    private String workHistory;
    @Column(name = "achievements"
    )
    private String achievements;
    @Column(name = "image")
    private String image;

    public void setTeam(String teamId) {
        if (teamId == null) {
            this.team = null;
        } else {
            TeamEntity team = new TeamEntity();
            team.setId(teamId);
            this.team = team;
        }
    }
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
