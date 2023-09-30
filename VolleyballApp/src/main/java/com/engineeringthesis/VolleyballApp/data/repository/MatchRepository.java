package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.MatchEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MatchRepository extends AbstractRepository<MatchEntity> {
    public List<MatchEntity> findByHostTeamOrGuestTeam(String hostTeamId, String guestTeamId);


}
