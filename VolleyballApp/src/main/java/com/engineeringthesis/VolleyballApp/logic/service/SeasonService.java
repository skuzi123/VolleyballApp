package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.SeasonEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonDto;

public interface SeasonService extends AbstractModelService<SeasonDto, SeasonEntity> {
    public SeasonDto findBySeasonName(String seasonName);
}
