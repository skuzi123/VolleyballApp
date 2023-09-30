package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamEntity;
import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamId;
import com.engineeringthesis.VolleyballApp.data.repository.SeasonTeamRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonTeamDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.SeasonTeamMapper;
import com.engineeringthesis.VolleyballApp.logic.service.SeasonTeamService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class SeasonTeamStandardService implements SeasonTeamService {
    private final SeasonTeamRepository seasonTeamRepository;
    private final SeasonTeamMapper seasonTeamMapper;

    public SeasonTeamStandardService(SeasonTeamRepository seasonTeamRepository, SeasonTeamMapper seasonTeamMapper) {
        this.seasonTeamRepository = seasonTeamRepository;
        this.seasonTeamMapper = seasonTeamMapper;
    }

    @Override
    public SeasonTeamDto add(SeasonTeamDto dto) {
        Objects.requireNonNull(dto);

        if (dto.getId() != null) {
            throw new RuntimeException("Object to create cannot have id!");
        }

        SeasonTeamEntity entity = seasonTeamMapper.mapToEntity(dto);
        return seasonTeamMapper.mapToDto(seasonTeamRepository.save(entity));
    }

    @Override
    public SeasonTeamDto getById(String id) {
        Objects.requireNonNull(id);

        return seasonTeamMapper.mapToDto(seasonTeamRepository.findById(id).get());
    }

    @Override
    public List<SeasonTeamDto> getAll() {
        return seasonTeamMapper.mapToDtoList(seasonTeamRepository.findAll());
    }

    @Override
    public void deleteById(String id) {
        Objects.requireNonNull(id);

        seasonTeamRepository.deleteById(id);
    }

    @Override
    public SeasonTeamDto update(SeasonTeamDto dto, SeasonTeamId id) {
        Objects.requireNonNull(dto);

        if (dto.getId() != null) {
            throw new RuntimeException("Object to put cannot have id!");
        }

        dto.setId(dto.getId());
        return seasonTeamMapper.mapToDto(seasonTeamRepository.save(seasonTeamMapper.mapToEntity(dto)));
    }
}
