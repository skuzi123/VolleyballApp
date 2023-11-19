package com.engineeringthesis.VolleyballApp.logic.mapper;

import com.engineeringthesis.VolleyballApp.data.model.PlayerEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerDto;
import org.springframework.stereotype.Component;

@Component
public class PlayerMapper extends AbstractMapper<PlayerDto, PlayerEntity> {
    @Override
    public PlayerDto mapToDto(PlayerEntity entity) {
        PlayerDto dto = new PlayerDto();
        super.mapToDto(entity, dto);
        dto.setAge(entity.getAge());
        dto.setName(entity.getName());
        dto.setHeight(entity.getHeight());
        dto.setWeight(entity.getWeight());
        dto.setPosition(entity.getPosition());
        dto.setExperience(entity.getExperience());
        dto.setSurname(entity.getSurname());
        dto.setAttackRange(entity.getAttackRange());
        dto.setBlockRange(entity.getBlockRange());
        dto.setTeamId(entity.getTeam().getId());
        dto.setUserId(entity.getUser().getId());
        return dto;


    }

    @Override
    public PlayerEntity mapToEntity(PlayerDto dto) {
        PlayerEntity entity = new PlayerEntity();
        super.mapToEntity(dto, entity);
        entity.setAge(dto.getAge());
        entity.setName(dto.getName());
        entity.setHeight(dto.getHeight());
        entity.setWeight(dto.getWeight());
        entity.setPosition(dto.getPosition());
        entity.setExperience(dto.getExperience());
        entity.setSurname(dto.getSurname());
        entity.setAttackRange(dto.getAttackRange());
        entity.setBlockRange(dto.getBlockRange());
        entity.setTeam(dto.getTeamId());
        entity.setUser(dto.getUserId());
        return entity;
    }
}
