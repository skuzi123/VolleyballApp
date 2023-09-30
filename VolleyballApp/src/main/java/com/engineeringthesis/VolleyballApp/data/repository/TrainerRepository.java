package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.TrainerEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainerRepository extends AbstractRepository<TrainerEntity> {
    public TrainerEntity findByUser(String userId);

}
