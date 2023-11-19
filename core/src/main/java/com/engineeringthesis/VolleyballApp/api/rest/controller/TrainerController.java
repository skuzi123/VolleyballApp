package com.engineeringthesis.VolleyballApp.api.rest.controller;

import com.engineeringthesis.VolleyballApp.data.model.TrainerEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerDto;
import com.engineeringthesis.VolleyballApp.logic.dto.TrainerDto;
import com.engineeringthesis.VolleyballApp.logic.service.TrainerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/auth/trainers")
public class TrainerController extends AbstractController<TrainerDto, TrainerEntity> {
    private final TrainerService trainerService;

    public TrainerController(TrainerService trainerService) {
        super(trainerService);
        this.trainerService = trainerService;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<TrainerDto> findByUser(@PathVariable String userId) {
        return ResponseEntity.ok(trainerService.findByUser(userId));
    }

    @GetMapping("/team/{teamId}")
    public ResponseEntity<List<TrainerDto>> findByTeam(@PathVariable String teamId) {
        return ResponseEntity.ok(trainerService.findByTeam(teamId));
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<TrainerDto> findByName(@PathVariable String name) {
        return ResponseEntity.ok(trainerService.findByName(name));
    }

    @GetMapping("/surname/{surname}")
    public ResponseEntity<TrainerDto> findBySurname(@PathVariable String surname) {
        return ResponseEntity.ok(trainerService.findBySurname(surname));
    }
}
