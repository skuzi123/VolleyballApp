package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.UserEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends AbstractRepository<UserEntity> {
    UserEntity findByUsername(String username);

}
