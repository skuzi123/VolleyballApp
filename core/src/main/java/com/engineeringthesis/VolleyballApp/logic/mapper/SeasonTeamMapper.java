package com.engineeringthesis.VolleyballApp.logic.mapper;

import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamEntity;
import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamId;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonTeamDto;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonTeamIdDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SeasonTeamMapper extends AbstractMapper<SeasonTeamDto,SeasonTeamEntity>{
    @Override
    public SeasonTeamDto mapToDto(SeasonTeamEntity entity) {
        SeasonTeamDto dto = new SeasonTeamDto();
        super.mapToDto(entity, dto);
        dto.setSeasonId(entity.getSeason().getId());
        dto.setTeamId(entity.getTeam().getId());
        dto.setPoints(entity.getPoints());
        dto.setMatches(entity.getMatches());
        return dto;
    }

    @Override
    public SeasonTeamEntity mapToEntity(SeasonTeamDto dto) {
        SeasonTeamEntity entity = new SeasonTeamEntity();
        super.mapToEntity(dto,entity);
        entity.setSeason(dto.getSeasonId());
        entity.setTeam(dto.getTeamId());
        entity.setPoints(dto.getPoints());
        entity.setMatches(dto.getMatches());
        return entity;
    }

//    public SeasonTeamDto mapToDto(SeasonTeamEntity entity) {
//        SeasonTeamDto dto = new SeasonTeamDto();
//        SeasonTeamIdDto idDto = new SeasonTeamIdDto();
//        idDto.setSeasonId(entity.getId().getSeasonId());
//        idDto.setTeamId(entity.getId().getTeamId());
//        dto.setId(idDto);
//        dto.setPoints(entity.getPoints());
//        return dto;
//    }
//
//    public SeasonTeamEntity mapToEntity(SeasonTeamDto dto) {
//        SeasonTeamEntity entity = new SeasonTeamEntity();
//        SeasonTeamId id = new SeasonTeamId();
//        id.setSeasonId(dto.getId().getSeasonId());
//        id.setTeamId(dto.getId().getTeamId());
//        entity.setId(id);
//        entity.setPoints(dto.getPoints());
//        return entity;
//    }
//
    public List<SeasonTeamDto> mapToDtoList(List<SeasonTeamEntity> entityList) {
        return entityList.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    public List<SeasonTeamEntity> mapToEntityList(List<SeasonTeamDto> dtoList) {
        return dtoList.stream()
                .map(this::mapToEntity)
                .collect(Collectors.toList());
    }
}


