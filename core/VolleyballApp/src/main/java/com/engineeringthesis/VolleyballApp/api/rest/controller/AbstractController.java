package com.engineeringthesis.VolleyballApp.api.rest.controller;

import com.engineeringthesis.VolleyballApp.data.model.AbstractEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.AbstractDto;
import com.engineeringthesis.VolleyballApp.logic.service.AbstractModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public abstract class AbstractController<T extends AbstractDto, E extends AbstractEntity> {
    private final AbstractModelService<T, E> service;

    @Autowired
    protected AbstractController(AbstractModelService<T, E> service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<T> getById(@PathVariable final String id) {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping()
    public ResponseEntity<List<T>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @PostMapping
    public ResponseEntity<T> add(@RequestBody final T t) {
        return ResponseEntity.ok(service.add(t));
    }

    @PutMapping("/{id}")
    public ResponseEntity<T> update(@RequestBody final T t,@PathVariable final String id) {
        return ResponseEntity.ok(service.update(t, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<T> deleteById(@PathVariable final String id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
