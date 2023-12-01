package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.TeamEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.TeamDto;

public interface TeamService extends AbstractModelService<TeamDto, TeamEntity> {
    TeamDto findByTeamName(String teamName);

    void deleteByTeamName(String teamName);
}
