package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.AbstractEntity;
import com.engineeringthesis.VolleyballApp.data.repository.AbstractRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.AbstractDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.AbstractMapper;
import com.engineeringthesis.VolleyballApp.logic.service.AbstractModelService;

import java.util.List;
import java.util.Objects;

public abstract class AbstractStandardService<T extends AbstractDto, E extends AbstractEntity> implements AbstractModelService<T, E> {
    private final AbstractRepository<E> repository;
    private final AbstractMapper<T, E> mapper;

    protected AbstractStandardService(AbstractRepository<E> repository, AbstractMapper<T, E> mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public T add(final T dto) {
        Objects.requireNonNull(dto);

        if (dto.getId() != null) {
            throw new RuntimeException("Object to create cannot have id!");
        }

        E entity = mapper.mapToEntity(dto);
        return mapper.mapToDto(repository.save(entity));
    }

    @Override
    public T getById(final String id) {
        Objects.requireNonNull(id);

        return mapper.mapToDto(repository.findById(id).get());
    }

    @Override
    public List<T> getAll() {
        return mapper.mapToDtoList(repository.findAll());
    }

    @Override
    public void deleteById(final String id) {
        Objects.requireNonNull(id);

        repository.deleteById(id);
    }

    @Override
    public T update(final T dto, final String id) {
        Objects.requireNonNull(dto);

        if (dto.getId() != null) {
            throw new RuntimeException("Object to put cannot have id!");
        }

        dto.setId(id);
        return mapper.mapToDto(repository.save(mapper.mapToEntity(dto)));
    }
}
