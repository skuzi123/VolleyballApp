package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.PlayerEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerDto;

import java.util.List;

public interface PlayerService extends AbstractModelService<PlayerDto, PlayerEntity> {
    public List<PlayerDto> findByTeam(String teamId);

    public PlayerDto findByName(String name);

    public PlayerDto findBySurname(String surname);
}
