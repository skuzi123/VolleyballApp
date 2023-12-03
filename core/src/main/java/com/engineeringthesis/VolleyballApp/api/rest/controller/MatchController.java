package com.engineeringthesis.VolleyballApp.api.rest.controller;

import com.engineeringthesis.VolleyballApp.data.model.MatchEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.MatchDto;
import com.engineeringthesis.VolleyballApp.logic.service.MatchService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/auth/matches")
public class MatchController extends AbstractController<MatchDto, MatchEntity> {

    private final MatchService matchService;

    public MatchController(MatchService matchService) {
        super(matchService);
        this.matchService = matchService;
    }

    @GetMapping("/{hostTeamId}/{guestTeamId}")
    public ResponseEntity<List<MatchDto>> findByHostTeamOrGuestTeam(@PathVariable final String hostTeamId, @PathVariable final String guestTeamId) {
        return ResponseEntity.ok(matchService.findByHostTeamOrGuestTeam(hostTeamId, guestTeamId));
    }



}
