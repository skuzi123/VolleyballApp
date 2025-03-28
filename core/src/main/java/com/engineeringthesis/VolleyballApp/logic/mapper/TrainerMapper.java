package com.engineeringthesis.VolleyballApp.logic.mapper;

import com.engineeringthesis.VolleyballApp.data.model.TrainerEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.TrainerDto;
import org.springframework.stereotype.Component;

@Component
public class TrainerMapper extends AbstractMapper<TrainerDto, TrainerEntity> {
    @Override
    public TrainerDto mapToDto(TrainerEntity entity) {
        TrainerDto dto = new TrainerDto();
        super.mapToDto(entity, dto);
        dto.setUserId(entity.getUser().getId());
        dto.setTeamId(entity.getTeam().getId());
        dto.setName(entity.getName());
        dto.setSurname(entity.getSurname());
        dto.setAge(entity.getAge());
        dto.setAchievements(entity.getAchievements());
        dto.setWorkHistory(entity.getWorkHistory());
        dto.setImage(entity.getImage());
        return dto;
    }

    @Override
    public TrainerEntity mapToEntity(TrainerDto dto) {
        TrainerEntity entity = new TrainerEntity();
        super.mapToEntity(dto, entity);
        entity.setUser(dto.getUserId());
        entity.setTeam(dto.getTeamId());
        entity.setName(dto.getName());
        entity.setSurname(dto.getSurname());
        entity.setAge(dto.getAge());
        entity.setAchievements(dto.getAchievements());
        entity.setWorkHistory(dto.getWorkHistory());
        entity.setImage(dto.getImage());
        return entity;
    }
}
