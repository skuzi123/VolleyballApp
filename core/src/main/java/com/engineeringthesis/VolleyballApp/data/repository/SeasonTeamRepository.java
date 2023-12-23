package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.SeasonEntity;
import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamEntity;
import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamId;
import com.engineeringthesis.VolleyballApp.data.model.TeamEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeasonTeamRepository extends AbstractRepository<SeasonTeamEntity> {
//    List<SeasonTeamEntity> findBySeason(String seasonId);
    SeasonTeamEntity findBySeasonAndTeam(SeasonEntity season, TeamEntity team);
}
