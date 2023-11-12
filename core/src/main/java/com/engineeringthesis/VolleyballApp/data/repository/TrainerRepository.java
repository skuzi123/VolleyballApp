package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.TrainerEntity;
import com.engineeringthesis.VolleyballApp.data.model.UserEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainerRepository extends AbstractRepository<TrainerEntity> {
    TrainerEntity findByUser(UserEntity user);

}
