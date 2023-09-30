package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.SetEntity;
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

    public SetStandardService(SetRepository setRepository, SetMapper setMapper) {
        super(setRepository, setMapper);
        this.setRepository = setRepository;
        this.setMapper = setMapper;
    }


    @Override
    public List<SetDto> findByMatch(String matchId) {
        Objects.requireNonNull(matchId);

        return setMapper.mapToDtoList(setRepository.findByMatch(matchId));
    }
}
