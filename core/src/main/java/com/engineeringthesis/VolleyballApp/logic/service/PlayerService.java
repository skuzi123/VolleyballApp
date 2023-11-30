package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.PlayerEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerDto;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerProfileDto;

import java.util.List;

public interface PlayerService extends AbstractModelService<PlayerDto, PlayerEntity> {
    List<PlayerDto> findByTeam(String teamId);

    PlayerDto findByName(String name);

    PlayerDto findBySurname(String surname);

    PlayerDto findByUser(String userId);

    PlayerDto patch(final PlayerProfileDto dto, final String id);
}
