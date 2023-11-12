package com.engineeringthesis.VolleyballApp.api.rest.controller;

import com.engineeringthesis.VolleyballApp.data.model.TrainerEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.TrainerDto;
import com.engineeringthesis.VolleyballApp.logic.service.TrainerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
