package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.SeasonEntity;
import com.engineeringthesis.VolleyballApp.data.repository.SeasonRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.SeasonMapper;
import com.engineeringthesis.VolleyballApp.logic.service.SeasonService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SeasonStandardService extends AbstractStandardService<SeasonDto, SeasonEntity> implements SeasonService {
    private final SeasonRepository seasonRepository;
    private final SeasonMapper seasonMapper;

    public SeasonStandardService(SeasonRepository seasonRepository, SeasonMapper seasonMapper) {
        super(seasonRepository, seasonMapper);
        this.seasonRepository = seasonRepository;
        this.seasonMapper = seasonMapper;
    }

    @Override
    public SeasonDto findBySeasonName(String seasonName) {
        return seasonMapper.mapToDto(seasonRepository.findBySeasonName(seasonName));
    }
}
