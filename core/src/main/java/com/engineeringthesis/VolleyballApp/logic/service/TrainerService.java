package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.TrainerEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.TrainerDto;
import com.engineeringthesis.VolleyballApp.logic.dto.TrainerProfileDto;

import java.util.List;

public interface TrainerService extends AbstractModelService<TrainerDto, TrainerEntity> {
    TrainerDto findByUser(String userId);

    List<TrainerDto> findByTeam(String teamId);

    TrainerDto findByName(String name);

    TrainerDto findBySurname(String surname);

    TrainerDto patch(final TrainerProfileDto trainerProfileDto, final String id);
}
