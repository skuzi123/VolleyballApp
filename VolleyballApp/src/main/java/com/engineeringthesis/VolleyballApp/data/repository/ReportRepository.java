package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.ReportEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends AbstractRepository<ReportEntity> {
    public List<ReportEntity> findByCreatedByUser(String userId);
}
