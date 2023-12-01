package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.TeamEntity;
import com.engineeringthesis.VolleyballApp.data.repository.TeamRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.TeamDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.TeamMapper;
import com.engineeringthesis.VolleyballApp.logic.service.TeamService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Transactional
public class TeamStandardService extends AbstractStandardService<TeamDto, TeamEntity> implements TeamService {
    private final TeamRepository teamRepository;
    private final TeamMapper teamMapper;

    public TeamStandardService(TeamRepository teamRepository, TeamMapper teamMapper) {
        super(teamRepository, teamMapper);
        this.teamRepository = teamRepository;
        this.teamMapper = teamMapper;
    }

    @Override
    public TeamDto findByTeamName(String teamName) {
        return teamMapper.mapToDto(teamRepository.findByTeamName(teamName));
    }

    @Override
    public void deleteByTeamName(String teamName) {
            Objects.requireNonNull(teamName);

            teamRepository.deleteByTeamName(teamName);

    }
}
