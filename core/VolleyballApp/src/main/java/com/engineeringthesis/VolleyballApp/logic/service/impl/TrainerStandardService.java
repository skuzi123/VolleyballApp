package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.TrainerEntity;
import com.engineeringthesis.VolleyballApp.data.model.UserEntity;
import com.engineeringthesis.VolleyballApp.data.repository.TrainerRepository;
import com.engineeringthesis.VolleyballApp.data.repository.UserRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.TrainerDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.TrainerMapper;
import com.engineeringthesis.VolleyballApp.logic.service.TrainerService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Transactional
public class TrainerStandardService extends AbstractStandardService<TrainerDto, TrainerEntity> implements TrainerService {
    private final TrainerRepository trainerRepository;
    private final TrainerMapper trainerMapper;
    private final UserRepository userRepository;

    public TrainerStandardService(TrainerRepository trainerRepository, TrainerMapper trainerMapper,
                                  UserRepository userRepository) {
        super(trainerRepository, trainerMapper);
        this.trainerRepository = trainerRepository;
        this.trainerMapper = trainerMapper;
        this.userRepository = userRepository;
    }

    @Override
    public TrainerDto findByUser(String userId) {
        Objects.requireNonNull(userId);
        UserEntity user = userRepository.findById(userId).orElse(null);
        return trainerMapper.mapToDto(trainerRepository.findByUser(user));
    }
}
