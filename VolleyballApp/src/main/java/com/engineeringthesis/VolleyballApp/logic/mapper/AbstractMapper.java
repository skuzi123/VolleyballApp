package com.engineeringthesis.VolleyballApp.logic.mapper;

import com.engineeringthesis.VolleyballApp.data.model.AbstractEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.AbstractDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public abstract class AbstractMapper<T extends AbstractDto, E extends AbstractEntity> {
    public abstract T mapToDto(E entity);

    public abstract E mapToEntity(T dto);

    public List<T> mapToDtoList(List<E> entityList) {
        return entityList.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    public List<E> mapToEntityList(List<T> dtoList) {
        return dtoList.stream()
                .map(this::mapToEntity)
                .collect(Collectors.toList());
    }


    protected void mapToEntity(AbstractDto dto, AbstractEntity entity) {
        entity.setId(dto.getId());
    }

    protected void mapToDto(AbstractEntity entity, AbstractDto dto) {
        dto.setId(entity.getId());
    }
}
