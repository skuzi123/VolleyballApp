package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.TrainerEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.TrainerDto;

public interface TrainerService extends AbstractModelService<TrainerDto, TrainerEntity> {
    TrainerDto findByUser(String userId);
}
