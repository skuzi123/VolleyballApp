package com.engineeringthesis.VolleyballApp.data.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "seasons_teams")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SeasonTeamEntity extends AbstractEntity{

//    @EmbeddedId
//    private SeasonTeamId id;
@ManyToOne(cascade = CascadeType.REMOVE)
@MapsId("seasonId")
@JoinColumn(name = "season_id")
private SeasonEntity season;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @MapsId("teamId")
    @JoinColumn(name = "team_id")
    private TeamEntity team;

    @Column(name = "points")
    private Integer points;

    @Column(name = "matches")
    private Integer matches;

    public void setSeason(String seasonId) {
        if (seasonId == null) {
            this.season = null;
        } else {
            SeasonEntity season = new SeasonEntity();
            season.setId(seasonId);
            this.season = season;
        }
    }

    public void setTeam(String teamId) {
        if (teamId == null) {
            this.team = null;
        } else {
            TeamEntity team = new TeamEntity();
            team.setId(teamId);
            this.team = team;
        }
    }

}
