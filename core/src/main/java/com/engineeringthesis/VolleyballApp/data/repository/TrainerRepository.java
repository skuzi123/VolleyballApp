package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.PlayerEntity;
import com.engineeringthesis.VolleyballApp.data.model.TeamEntity;
import com.engineeringthesis.VolleyballApp.data.model.TrainerEntity;
import com.engineeringthesis.VolleyballApp.data.model.UserEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainerRepository extends AbstractRepository<TrainerEntity> {
    TrainerEntity findByUser(UserEntity user);

    List<TrainerEntity> findByTeam(TeamEntity team);

    TrainerEntity findByName(String name);

    TrainerEntity findBySurname(String surname);

}
