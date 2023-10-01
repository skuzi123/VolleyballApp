package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.SetEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.SetDto;

import java.util.List;

public interface SetService extends AbstractModelService<SetDto, SetEntity> {
    List<SetDto> findByMatch(String matchId);
}
