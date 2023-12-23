package com.engineeringthesis.VolleyballApp.data.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "sets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SetEntity extends AbstractEntity {
    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "match_id")
    private MatchEntity match;
    @Column(name = "set_number")
    private Integer setNumber;

    @Column(name = "home_points")
    private Integer homePoints;

    @Column(name = "away_points")
    private Integer awayPoints;

    public void setMatch(String matchId) {
        if (matchId == null) {
            this.match = null;
        } else {
            MatchEntity match = new MatchEntity();
            match.setId(matchId);
            this.match = match;
        }
    }

}
