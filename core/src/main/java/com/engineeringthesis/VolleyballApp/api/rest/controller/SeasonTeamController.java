package com.engineeringthesis.VolleyballApp.api.rest.controller;

import com.engineeringthesis.VolleyballApp.data.model.MatchEntity;
import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamEntity;
import com.engineeringthesis.VolleyballApp.data.model.SeasonTeamId;
import com.engineeringthesis.VolleyballApp.logic.dto.MatchDto;
import com.engineeringthesis.VolleyballApp.logic.dto.SeasonTeamDto;
import com.engineeringthesis.VolleyballApp.logic.service.MatchService;
import com.engineeringthesis.VolleyballApp.logic.service.SeasonTeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/auth/seasonteams")
public class SeasonTeamController extends AbstractController<SeasonTeamDto, SeasonTeamEntity> {


    private final SeasonTeamService seasonTeamService;

    public SeasonTeamController(SeasonTeamService seasonTeamService) {
        super(seasonTeamService);

        this.seasonTeamService = seasonTeamService;
    }

//    @Autowired
//    public SeasonTeamController(SeasonTeamService seasonTeamService) {
//        this.seasonTeamService = seasonTeamService;
//    }
//
    @GetMapping("/{seasonId}/{teamId}")
    public ResponseEntity<SeasonTeamDto> getBySeasonAndTeam(@PathVariable final String seasonId, @PathVariable final String teamId) {
        return ResponseEntity.ok(seasonTeamService.findBySeasonAndTeam(seasonId,teamId));
    }
//
//    @GetMapping()
//    public ResponseEntity<List<SeasonTeamDto>> getAll() {
//        return ResponseEntity.ok(seasonTeamService.getAll());
//    }
//
//    @PostMapping
//    public ResponseEntity<SeasonTeamDto> add(@RequestBody final SeasonTeamDto dto) {
//        return ResponseEntity.ok(seasonTeamService.add(dto));
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<SeasonTeamDto> update(@RequestBody final SeasonTeamDto t, final SeasonTeamId id) {
//        return ResponseEntity.ok(seasonTeamService.update(t, id));
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<SeasonTeamDto> deleteById(@PathVariable final SeasonTeamId id) {
//        seasonTeamService.deleteById(id);
//        return ResponseEntity.noContent().build();
//    }

}
