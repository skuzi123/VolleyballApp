package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.SetEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SetRepository extends AbstractRepository<SetEntity> {
    public List<SetEntity> findByMatch(String matchId);
}
