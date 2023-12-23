package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.*;
import com.engineeringthesis.VolleyballApp.data.repository.SeasonRepository;
import com.engineeringthesis.VolleyballApp.data.repository.SeasonTeamRepository;
import com.engineeringthesis.VolleyballApp.data.repository.TeamRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerDto;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonTeamDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.SeasonTeamMapper;
import com.engineeringthesis.VolleyballApp.logic.service.SeasonTeamService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class SeasonTeamStandardService extends AbstractStandardService<SeasonTeamDto, SeasonTeamEntity> implements SeasonTeamService {
    private final SeasonTeamRepository seasonTeamRepository;
    private final SeasonTeamMapper seasonTeamMapper;
    private final SeasonRepository seasonRepository;
    private final TeamRepository teamRepository;

    public SeasonTeamStandardService(SeasonTeamRepository seasonTeamRepository, SeasonTeamMapper seasonTeamMapper,
                                     SeasonRepository seasonRepository,
                                     TeamRepository teamRepository) {
        super(seasonTeamRepository,seasonTeamMapper);
        this.seasonTeamRepository = seasonTeamRepository;
        this.seasonTeamMapper = seasonTeamMapper;
        this.seasonRepository = seasonRepository;
        this.teamRepository = teamRepository;
    }

    @Override
    public SeasonTeamDto findBySeasonAndTeam(String seasonId, String teamId) {
        Objects.requireNonNull(seasonId);
        Objects.requireNonNull(teamId);
        SeasonEntity season = seasonRepository.findById(seasonId).orElse(null);
        TeamEntity team = teamRepository.findById(teamId).orElse(null);

        SeasonTeamEntity seasonTeam = seasonTeamRepository.findBySeasonAndTeam(season,team);
        return seasonTeamMapper.mapToDto(seasonTeam);
    }
//    public List<PlayerDto> findByTeam(String teamId) {
//        Objects.requireNonNull(teamId);
//        TeamEntity team = teamRepository.findById(teamId).orElse(null);
//        if (team == null) {
//            return Collections.emptyList();
//        }
//        List<PlayerEntity> players = playerRepository.findByTeam(team);
//        return playerMapper.mapToDtoList(players);
//    }
//    @Override
//    public SeasonTeamDto add(SeasonTeamDto dto) {
//        Objects.requireNonNull(dto);
//
//        if (dto.getId() != null) {
//            throw new RuntimeException("Object to create cannot have id!");
//        }
//
//        SeasonTeamEntity entity = seasonTeamMapper.mapToEntity(dto);
//        return seasonTeamMapper.mapToDto(seasonTeamRepository.save(entity));
//    }
//
//    @Override
//    public SeasonTeamDto getById(SeasonTeamId id) {
//        Objects.requireNonNull(id);
//
//        return seasonTeamMapper.mapToDto(seasonTeamRepository.findById(id).get());
//    }
//
//    @Override
//    public List<SeasonTeamDto> getAll() {
//        return seasonTeamMapper.mapToDtoList(seasonTeamRepository.findAll());
//    }
//
//    @Override
//    public void deleteById(SeasonTeamId id) {
//        Objects.requireNonNull(id);
//
//        seasonTeamRepository.deleteById(id);
//    }
//
//    @Override
//    public SeasonTeamDto update(SeasonTeamDto dto, SeasonTeamId id) {
//        Objects.requireNonNull(dto);
//
//        if (dto.getId() != null) {
//            throw new RuntimeException("Object to put cannot have id!");
//        }
//
//        dto.setId(dto.getId());
//        return seasonTeamMapper.mapToDto(seasonTeamRepository.save(seasonTeamMapper.mapToEntity(dto)));
//    }
}
