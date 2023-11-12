package com.engineeringthesis.VolleyballApp.logic.mapper;

import com.engineeringthesis.VolleyballApp.data.model.ERole;
import com.engineeringthesis.VolleyballApp.data.model.UserEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.UserDto;
import org.springframework.stereotype.Component;

@Component
public class UserMapper extends AbstractMapper<UserDto, UserEntity> {
    @Override
    public UserDto mapToDto(UserEntity entity) {
        UserDto dto = new UserDto();
        super.mapToDto(entity, dto);
        dto.setUsername(entity.getUsername());
        dto.setPassword(entity.getPassword());
        dto.setRole(entity.getRole().toString());
        return dto;
    }

    @Override
    public UserEntity mapToEntity(UserDto dto) {
        UserEntity entity = new UserEntity();
        super.mapToEntity(dto, entity);
        entity.setUsername(dto.getUsername());
        entity.setPassword(dto.getPassword());
        entity.setRole(ERole.valueOf(dto.getRole()));
        return entity;
    }
}
