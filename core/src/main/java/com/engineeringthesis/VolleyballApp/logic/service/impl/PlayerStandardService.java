package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.PlayerEntity;
import com.engineeringthesis.VolleyballApp.data.model.TeamEntity;
import com.engineeringthesis.VolleyballApp.data.model.UserEntity;
import com.engineeringthesis.VolleyballApp.data.repository.PlayerRepository;
import com.engineeringthesis.VolleyballApp.data.repository.TeamRepository;
import com.engineeringthesis.VolleyballApp.data.repository.UserRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerDto;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerProfileDto;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerStarterDto;
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

    private final UserRepository userRepository;
    private final PlayerMapper playerMapper;

    protected PlayerStandardService(PlayerRepository playerRepository, TeamRepository teamRepository, UserRepository userRepository, PlayerMapper playerMapper) {
        super(playerRepository, playerMapper);
        this.playerRepository = playerRepository;
        this.teamRepository = teamRepository;
        this.userRepository = userRepository;
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

    @Override
    public PlayerDto findByUser(String userId) {
        Objects.requireNonNull(userId);
        UserEntity user = userRepository.findById(userId).orElse(null);
        return playerMapper.mapToDto(playerRepository.findByUser(user));

    }

    @Override
    public PlayerDto patch(PlayerProfileDto dto, String id) {
        Objects.requireNonNull(dto);

        PlayerEntity player = playerRepository.findById(id).orElse(null);

        player.setName(dto.getName());
        player.setSurname(dto.getSurname());
        player.setAge(dto.getAge());
        player.setExperience(dto.getExperience());
        player.setPosition(dto.getPosition());
        player.setWeight(dto.getWeight());
        player.setHeight(dto.getHeight());
        player.setAttackRange(dto.getAttackRange());
        player.setBlockRange(dto.getBlockRange());

        player = playerRepository.save(player);

        return playerMapper.mapToDto(player);
    }


    @Override
    public PlayerDto patchStarter(PlayerStarterDto dto, String id) {
        Objects.requireNonNull(dto);

        PlayerEntity player = playerRepository.findById(id).orElse(null);
        player.setStarter(dto.isStarter());
        player = playerRepository.save(player);
        return playerMapper.mapToDto(player);
    }

}
