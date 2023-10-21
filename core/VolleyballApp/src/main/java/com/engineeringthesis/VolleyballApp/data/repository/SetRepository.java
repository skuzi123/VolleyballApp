package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.MatchEntity;
import com.engineeringthesis.VolleyballApp.data.model.SetEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SetRepository extends AbstractRepository<SetEntity> {
    List<SetEntity> findByMatch(MatchEntity match);
}
