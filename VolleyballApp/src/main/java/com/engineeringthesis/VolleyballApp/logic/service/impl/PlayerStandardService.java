package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.PlayerEntity;
import com.engineeringthesis.VolleyballApp.data.repository.PlayerRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.PlayerMapper;
import com.engineeringthesis.VolleyballApp.logic.service.PlayerService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class PlayerStandardService extends AbstractStandardService<PlayerDto, PlayerEntity> implements PlayerService {

    private final PlayerRepository playerRepository;
    private final PlayerMapper playerMapper;

    protected PlayerStandardService(PlayerRepository playerRepository, PlayerMapper playerMapper) {
        super(playerRepository, playerMapper);
        this.playerRepository = playerRepository;
        this.playerMapper = playerMapper;
    }


    @Override
    public List<PlayerDto> findByTeam(String teamId) {
        Objects.requireNonNull(teamId);
        return playerMapper.mapToDtoList(playerRepository.findByTeam(teamId));
    }

    @Override
    public PlayerDto findByName(String name) {
        return playerMapper.mapToDto(playerRepository.findByName(name));
    }

    @Override
    public PlayerDto findBySurname(String surname) {
        return playerMapper.mapToDto(playerRepository.findByName(surname));
    }

}
