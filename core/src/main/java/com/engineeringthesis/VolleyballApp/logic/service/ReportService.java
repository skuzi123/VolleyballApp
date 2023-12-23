package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.ReportEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.ReportDto;

import java.util.List;

public interface ReportService extends AbstractModelService<ReportDto, ReportEntity> {
    List<ReportDto> findByCreatedByUser(String userId);
}
