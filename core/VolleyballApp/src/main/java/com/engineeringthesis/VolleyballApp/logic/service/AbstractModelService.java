package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.AbstractEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.AbstractDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AbstractModelService<T extends AbstractDto, E extends AbstractEntity> {
    T add(final T dto);

    T getById(final String id);

    List<T> getAll();

    void deleteById(final String id);

    T update(final T dto, final String id);
}
