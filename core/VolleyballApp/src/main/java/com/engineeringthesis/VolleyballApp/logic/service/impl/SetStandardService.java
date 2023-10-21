package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.MatchEntity;
import com.engineeringthesis.VolleyballApp.data.model.SetEntity;
import com.engineeringthesis.VolleyballApp.data.repository.MatchRepository;
import com.engineeringthesis.VolleyballApp.data.repository.SetRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.SetDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.SetMapper;
import com.engineeringthesis.VolleyballApp.logic.service.SetService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class SetStandardService extends AbstractStandardService<SetDto, SetEntity> implements SetService {
    private final SetRepository setRepository;
    private final SetMapper setMapper;
    private final MatchRepository matchRepository;

    public SetStandardService(SetRepository setRepository, SetMapper setMapper,
                              MatchRepository matchRepository) {
        super(setRepository, setMapper);
        this.setRepository = setRepository;
        this.setMapper = setMapper;
        this.matchRepository = matchRepository;
    }


    @Override
    public List<SetDto> findByMatch(String matchId) {
        Objects.requireNonNull(matchId);
        MatchEntity match = matchRepository.findById(matchId).orElse(null);

        return setMapper.mapToDtoList(setRepository.findByMatch(match));
    }
}
