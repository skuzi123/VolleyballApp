package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.UserEntity;
import com.engineeringthesis.VolleyballApp.data.repository.UserRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.UserDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.UserMapper;
import com.engineeringthesis.VolleyballApp.logic.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserStandardService extends AbstractStandardService<UserDto, UserEntity> implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;


    public UserStandardService(UserRepository userRepository, UserMapper userMapper) {
        super(userRepository, userMapper);
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    public UserDto findByUsername(String username) {
        return userMapper.mapToDto(userRepository.findByUsername(username));
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }


}
