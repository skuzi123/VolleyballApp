package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.PlayerEntity;
import com.engineeringthesis.VolleyballApp.data.model.TeamEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends AbstractRepository<PlayerEntity> {
    List<PlayerEntity> findByTeam(TeamEntity team);

    PlayerEntity findByName(String name);

    PlayerEntity findBySurname(String surname);

}
