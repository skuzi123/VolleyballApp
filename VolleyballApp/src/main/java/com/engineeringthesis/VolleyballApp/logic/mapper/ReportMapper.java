package com.engineeringthesis.VolleyballApp.logic.mapper;

import com.engineeringthesis.VolleyballApp.data.model.ReportEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.ReportDto;
import org.springframework.stereotype.Component;

@Component
public class ReportMapper extends AbstractMapper<ReportDto, ReportEntity> {
    @Override
    public ReportDto mapToDto(ReportEntity entity) {
        ReportDto dto = new ReportDto();
        super.mapToDto(entity, dto);
        dto.setReportName(entity.getReportName());
        dto.setReportText(entity.getReportText());
        dto.setCreatedByUserId(entity.getCreatedByUser().getId());
        return dto;
    }

    @Override
    public ReportEntity mapToEntity(ReportDto dto) {
        ReportEntity entity = new ReportEntity();
        super.mapToEntity(dto, entity);
        entity.setReportName(dto.getReportName());
        entity.setReportText(dto.getReportText());
        entity.setCreatedByUser(dto.getCreatedByUserId());
        return entity;
    }
}
