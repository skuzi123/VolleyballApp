package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.AbstractEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.AbstractDto;

import java.util.List;


public interface AbstractModelService<T extends AbstractDto, E extends AbstractEntity> {
    public T add(final T dto);

    public T getById(final String id);

    public List<T> getAll();

    public void deleteById(final String id);

    public T update(final T dto, final String id);
}
