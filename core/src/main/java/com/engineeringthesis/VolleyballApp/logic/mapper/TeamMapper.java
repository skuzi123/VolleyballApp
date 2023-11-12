package com.engineeringthesis.VolleyballApp.logic.mapper;

import com.engineeringthesis.VolleyballApp.data.model.TeamEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.TeamDto;
import org.springframework.stereotype.Component;

@Component
public class TeamMapper extends AbstractMapper<TeamDto, TeamEntity> {
    @Override
    public TeamDto mapToDto(TeamEntity entity) {
        TeamDto dto = new TeamDto();
        super.mapToDto(entity, dto);
        dto.setTeamName(entity.getTeamName());
        return dto;

    }

    @Override
    public TeamEntity mapToEntity(TeamDto dto) {
        TeamEntity entity = new TeamEntity();
        super.mapToEntity(dto, entity);
        entity.setTeamName(dto.getTeamName());
        return entity;
    }
}
