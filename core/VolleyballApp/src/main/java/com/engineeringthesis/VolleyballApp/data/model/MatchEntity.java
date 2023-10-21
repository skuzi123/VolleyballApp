package com.engineeringthesis.VolleyballApp.data.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;


@Entity
@Table(name = "matches")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MatchEntity extends AbstractEntity {

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "host_team_id", nullable = false)
    private TeamEntity hostTeam;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "guest_team_id", nullable = false)
    private TeamEntity guestTeam;

    @Column(name = "match_date")
    private Date matchDate;
    @Column(name = "result")
    private String result;

    public void setHostTeam(String hostTeamId) {
        if (hostTeamId == null) {
            this.hostTeam = null;
        } else {
            TeamEntity hostTeam = new TeamEntity();
            hostTeam.setId(hostTeamId);
            this.hostTeam = hostTeam;
        }
    }

    public void setGuestTeam(String guestTeamId) {
        if (guestTeamId == null) {
            this.guestTeam = null;
        } else {
            TeamEntity guestTeam = new TeamEntity();
            guestTeam.setId(guestTeamId);
            this.guestTeam = guestTeam;
        }
    }

}
