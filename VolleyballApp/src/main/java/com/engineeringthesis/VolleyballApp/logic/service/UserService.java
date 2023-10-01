package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.UserEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.UserDto;

public interface UserService extends AbstractModelService<UserDto, UserEntity> {
    UserDto findByUsername(String username);
}
