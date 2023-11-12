package com.engineeringthesis.VolleyballApp.data.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class SeasonTeamId implements Serializable {

    private String seasonId;
    private String teamId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SeasonTeamId that = (SeasonTeamId) o;
        return seasonId.equals(that.seasonId) && teamId.equals(that.teamId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(seasonId, teamId);
    }
}
