package com.engineeringthesis.VolleyballApp.api.rest.controller;

import com.engineeringthesis.VolleyballApp.data.model.SeasonEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonDto;
import com.engineeringthesis.VolleyballApp.logic.service.SeasonService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/seasons")
public class SeasonController extends AbstractController<SeasonDto, SeasonEntity> {

    private final SeasonService seasonService;

    public SeasonController(SeasonService seasonService) {
        super(seasonService);
        this.seasonService = seasonService;
    }

    @GetMapping("/seasonName/{seasonName}")
    public ResponseEntity<SeasonDto> findBySeasonName(@PathVariable String seasonName) {
        return ResponseEntity.ok(seasonService.findBySeasonName(seasonName));
    }
}
