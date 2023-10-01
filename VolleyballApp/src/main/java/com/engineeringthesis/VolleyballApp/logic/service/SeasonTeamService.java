package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamId;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonTeamDto;

import java.util.List;

public interface SeasonTeamService {
    SeasonTeamDto add(final SeasonTeamDto dto);

    SeasonTeamDto getById(final SeasonTeamId id);

    List<SeasonTeamDto> getAll();

    void deleteById(final SeasonTeamId id);

    SeasonTeamDto update(final SeasonTeamDto dto, final SeasonTeamId id);
}
