package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.PlayerEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends AbstractRepository<PlayerEntity> {
    public List<PlayerEntity> findByTeam(String teamId);

    public PlayerEntity findByName(String name);

    public PlayerEntity findBySurname(String surname);

}
