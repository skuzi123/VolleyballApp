package com.engineeringthesis.VolleyballApp.data.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "players")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlayerEntity extends AbstractEntity {
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
    @Column(name = "name")
    private String name;
    @Column(name = "surname")
    private String surname;
    @Column(name = "age")
    private Integer age;
    @Column(name = "experience")
    private Integer experience;
    @Column(name = "position"
    )
    private String position;
    @Column(name = "weight",
            length = 5, precision = 2)
    private Double weight;

    @Column(name = "height",
            length = 5, precision = 2)
    private Double height;

    @Column(name = "attack_range",
            length = 5, precision = 2)
    private Double attackRange;

    @Column(name = "block_range",
            length = 5, precision = 2)
    private Double blockRange;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "team_id")
    private TeamEntity team;

    @Column(name = "is_starter")
    private boolean isStarter;

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
