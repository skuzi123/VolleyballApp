package com.engineeringthesis.VolleyballApp.api.rest.controller;

import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamId;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonTeamDto;
import com.engineeringthesis.VolleyballApp.logic.service.SeasonTeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/seasonteams")
public class SeasonTeamController {

    private final SeasonTeamService seasonTeamService;

    @Autowired
    public SeasonTeamController(SeasonTeamService seasonTeamService) {
        this.seasonTeamService = seasonTeamService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<SeasonTeamDto> getById(@PathVariable final SeasonTeamId id) {
        return ResponseEntity.ok(seasonTeamService.getById(id));
    }

    @GetMapping()
    public ResponseEntity<List<SeasonTeamDto>> getAll() {
        return ResponseEntity.ok(seasonTeamService.getAll());
    }

    @PostMapping
    public ResponseEntity<SeasonTeamDto> add(@RequestBody final SeasonTeamDto dto) {
        return ResponseEntity.ok(seasonTeamService.add(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SeasonTeamDto> update(@RequestBody final SeasonTeamDto t, final SeasonTeamId id) {
        return ResponseEntity.ok(seasonTeamService.update(t, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<SeasonTeamDto> deleteById(@PathVariable final SeasonTeamId id) {
        seasonTeamService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
