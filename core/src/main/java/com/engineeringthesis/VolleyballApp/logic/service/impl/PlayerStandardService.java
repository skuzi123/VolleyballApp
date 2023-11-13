package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.PlayerEntity;
import com.engineeringthesis.VolleyballApp.data.model.TeamEntity;
import com.engineeringthesis.VolleyballApp.data.repository.PlayerRepository;
import com.engineeringthesis.VolleyballApp.data.repository.TeamRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.PlayerMapper;
import com.engineeringthesis.VolleyballApp.logic.service.PlayerService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class PlayerStandardService extends AbstractStandardService<PlayerDto, PlayerEntity> implements PlayerService {

    private final PlayerRepository playerRepository;

    private final TeamRepository teamRepository;
    private final PlayerMapper playerMapper;

    protected PlayerStandardService(PlayerRepository playerRepository, TeamRepository teamRepository, PlayerMapper playerMapper) {
        super(playerRepository, playerMapper);
        this.playerRepository = playerRepository;
        this.teamRepository = teamRepository;
        this.playerMapper = playerMapper;
    }


    @Override
    public List<PlayerDto> findByTeam(String teamId) {
        Objects.requireNonNull(teamId);
        TeamEntity team = teamRepository.findById(teamId).orElse(null);
        if (team == null) {
            return Collections.emptyList();
        }
        List<PlayerEntity> players = playerRepository.findByTeam(team);
        return playerMapper.mapToDtoList(players);
    }

    @Override
    public PlayerDto findByName(String name) {
        return playerMapper.mapToDto(playerRepository.findByName(name));
    }

    @Override
    public PlayerDto findBySurname(String surname) {
        return playerMapper.mapToDto(playerRepository.findBySurname(surname));
    }

}
