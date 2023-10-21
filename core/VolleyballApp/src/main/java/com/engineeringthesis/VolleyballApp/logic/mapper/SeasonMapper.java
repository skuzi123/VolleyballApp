package com.engineeringthesis.VolleyballApp.logic.mapper;

import com.engineeringthesis.VolleyballApp.data.model.SeasonEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonDto;
import org.springframework.stereotype.Component;

@Component
public class SeasonMapper extends AbstractMapper<SeasonDto, SeasonEntity> {

    @Override
    public SeasonDto mapToDto(SeasonEntity entity) {
        SeasonDto dto = new SeasonDto();
        super.mapToDto(entity, dto);
        dto.setSeasonName(entity.getSeasonName());
        dto.setStartDate(entity.getStartDate());
        dto.setEndDate(entity.getEndDate());
        return dto;
    }

    @Override
    public SeasonEntity mapToEntity(SeasonDto dto) {
        SeasonEntity entity = new SeasonEntity();
        super.mapToEntity(dto, entity);
        entity.setSeasonName(dto.getSeasonName());
        entity.setStartDate(dto.getStartDate());
        entity.setEndDate(dto.getEndDate());
        return entity;
    }
}
