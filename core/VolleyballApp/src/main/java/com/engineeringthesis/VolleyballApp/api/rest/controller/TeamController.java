package com.engineeringthesis.VolleyballApp.api.rest.controller;

import com.engineeringthesis.VolleyballApp.data.model.TeamEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.TeamDto;
import com.engineeringthesis.VolleyballApp.logic.service.TeamService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/auth/teams")
public class TeamController extends AbstractController<TeamDto, TeamEntity> {
    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        super(teamService);
        this.teamService = teamService;
    }

    @GetMapping("/teamName/{teamNameId}")
    public ResponseEntity<TeamDto> findByTeamName(@PathVariable String teamName) {
        return ResponseEntity.ok(teamService.findByTeamName(teamName));
    }
}
