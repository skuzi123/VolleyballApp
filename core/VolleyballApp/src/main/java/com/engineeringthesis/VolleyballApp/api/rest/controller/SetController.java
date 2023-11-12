package com.engineeringthesis.VolleyballApp.api.rest.controller;

import com.engineeringthesis.VolleyballApp.data.model.SetEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.SetDto;
import com.engineeringthesis.VolleyballApp.logic.service.SetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/auth/sets")
public class SetController extends AbstractController<SetDto, SetEntity> {
    private final SetService setService;


    public SetController(SetService setService) {
        super(setService);
        this.setService = setService;
    }

    @GetMapping("/match/{matchId}")
    public ResponseEntity<List<SetDto>> findByMatch(@PathVariable String matchId) {
        return ResponseEntity.ok(setService.findByMatch(matchId));
    }
}
