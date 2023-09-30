package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.SeasonEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface SeasonRepository extends AbstractRepository<SeasonEntity> {
    public SeasonEntity findBySeasonName(String seasonName);
}
