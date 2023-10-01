package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.ReportEntity;
import com.engineeringthesis.VolleyballApp.data.model.UserEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends AbstractRepository<ReportEntity> {
    List<ReportEntity> findByCreatedByUser(UserEntity user);
}
