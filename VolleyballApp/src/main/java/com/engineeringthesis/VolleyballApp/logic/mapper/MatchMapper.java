package com.engineeringthesis.VolleyballApp.logic.mapper;

import com.engineeringthesis.VolleyballApp.data.model.MatchEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.MatchDto;
import org.springframework.stereotype.Component;

@Component
public class MatchMapper extends AbstractMapper<MatchDto, MatchEntity> {
    @Override
    public MatchDto mapToDto(MatchEntity entity) {
        MatchDto dto = new MatchDto();
        super.mapToDto(entity, dto);
        dto.setHostTeamId(entity.getHostTeam().getId());
        dto.setGuestTeamId(entity.getGuestTeam().getId());
        dto.setMatchDate(entity.getMatchDate());
        dto.setResult(entity.getResult());
        return dto;
    }

    @Override
    public MatchEntity mapToEntity(MatchDto dto) {
        MatchEntity entity = new MatchEntity();
        super.mapToEntity(dto, entity);
        entity.setHostTeam(dto.getHostTeamId());
        entity.setMatchDate(dto.getMatchDate());
        entity.setResult(dto.getResult());
        return entity;
    }
}
