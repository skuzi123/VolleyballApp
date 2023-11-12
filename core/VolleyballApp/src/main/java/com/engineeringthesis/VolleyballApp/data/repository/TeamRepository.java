package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.TeamEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends AbstractRepository<TeamEntity> {
    TeamEntity findByTeamName(String teamName);
}
