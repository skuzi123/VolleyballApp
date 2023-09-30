package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamId;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonTeamDto;

import java.util.List;

public interface SeasonTeamService {
    public SeasonTeamDto add(final SeasonTeamDto dto);

    public SeasonTeamDto getById(final String id);

    public List<SeasonTeamDto> getAll();

    public void deleteById(final String id);

    public SeasonTeamDto update(final SeasonTeamDto dto, final SeasonTeamId id);
}
