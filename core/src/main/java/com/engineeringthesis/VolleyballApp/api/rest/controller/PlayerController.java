package com.engineeringthesis.VolleyballApp.api.rest.controller;

import com.engineeringthesis.VolleyballApp.data.model.PlayerEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.PlayerDto;
import com.engineeringthesis.VolleyballApp.logic.service.PlayerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/auth/players")
public class PlayerController extends AbstractController<PlayerDto, PlayerEntity> {
    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        super(playerService);
        this.playerService = playerService;
    }

    @GetMapping("/team/{teamId}")
    public ResponseEntity<List<PlayerDto>> findByTeam(@PathVariable String teamId) {
        return ResponseEntity.ok(playerService.findByTeam(teamId));
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<PlayerDto> findByName(@PathVariable String name) {
        return ResponseEntity.ok(playerService.findByName(name));
    }

    @GetMapping("/surname/{surname}")
    public ResponseEntity<PlayerDto> findBySurname(@PathVariable String surname) {
        return ResponseEntity.ok(playerService.findBySurname(surname));
    }


}
