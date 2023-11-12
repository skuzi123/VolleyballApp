package com.engineeringthesis.VolleyballApp.logic.mapper;

import com.engineeringthesis.VolleyballApp.data.model.SetEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.SetDto;
import org.springframework.stereotype.Component;

@Component
public class SetMapper extends AbstractMapper<SetDto, SetEntity> {
    @Override
    public SetDto mapToDto(SetEntity entity) {
        SetDto dto = new SetDto();
        super.mapToDto(entity, dto);
        dto.setAwayPoints(entity.getAwayPoints());
        dto.setSetNumber(entity.getSetNumber());
        dto.setHomePoints(entity.getHomePoints());
        dto.setMatchId(entity.getMatch().getId());
        return dto;

    }

    @Override
    public SetEntity mapToEntity(SetDto dto) {
        SetEntity entity = new SetEntity();
        super.mapToEntity(dto, entity);
        entity.setAwayPoints(dto.getAwayPoints());
        entity.setSetNumber(dto.getSetNumber());
        entity.setHomePoints(dto.getHomePoints());
        entity.setMatch(dto.getMatchId());
        return entity;
    }
}
