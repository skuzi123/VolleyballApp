package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.MatchEntity;
import com.engineeringthesis.VolleyballApp.data.model.TeamEntity;
import com.engineeringthesis.VolleyballApp.data.repository.MatchRepository;
import com.engineeringthesis.VolleyballApp.data.repository.TeamRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.MatchDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.MatchMapper;
import com.engineeringthesis.VolleyballApp.logic.service.MatchService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class MatchStandardService extends AbstractStandardService<MatchDto, MatchEntity> implements MatchService {
    private final MatchRepository matchRepository;
    private final TeamRepository teamRepository;
    private final MatchMapper matchMapper;

    protected MatchStandardService(MatchRepository matchRepository, TeamRepository teamRepository, MatchMapper matchMapper) {
        super(matchRepository, matchMapper);
        this.matchRepository = matchRepository;
        this.teamRepository = teamRepository;
        this.matchMapper = matchMapper;
    }

@Override
public List<MatchDto> findByHostTeamOrGuestTeam(String hostTeamId, String guestTeamId) {
    Objects.requireNonNull(hostTeamId);
    Objects.requireNonNull(guestTeamId);

    TeamEntity hostTeam = teamRepository.findById(hostTeamId).orElse(null);
    TeamEntity guestTeam = teamRepository.findById(guestTeamId).orElse(null);

    List<MatchEntity> matches = matchRepository.findByHostTeamOrGuestTeam(hostTeam, guestTeam);

    return matchMapper.mapToDtoList(matches);
}

}
