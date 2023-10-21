package com.engineeringthesis.VolleyballApp.data.repository;

import com.engineeringthesis.VolleyballApp.data.model.AbstractEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface AbstractRepository<T extends AbstractEntity> extends JpaRepository<T, String> {
    Optional<T> findById(String id);
}
