package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamEntity;
import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamId;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonTeamDto;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

public interface SeasonTeamService extends AbstractModelService<SeasonTeamDto, SeasonTeamEntity> {
//    SeasonTeamDto add(final SeasonTeamDto dto);
//
//    SeasonTeamDto getById(final SeasonTeamId id);
//
//    List<SeasonTeamDto> getAll();
//
//    void deleteById(final SeasonTeamId id);
//
//    SeasonTeamDto update(final SeasonTeamDto dto, final SeasonTeamId id);
    SeasonTeamDto findBySeasonAndTeam(String seasonId,String teamId);
}
