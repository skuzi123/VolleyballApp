package com.engineeringthesis.VolleyballApp.api.rest.controller;

import com.engineeringthesis.VolleyballApp.data.model.ReportEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.ReportDto;
import com.engineeringthesis.VolleyballApp.logic.service.ReportService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/reports")
public class ReportController extends AbstractController<ReportDto, ReportEntity> {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        super(reportService);
        this.reportService = reportService;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ReportDto>> findByCreatedByUser(@PathVariable String userId) {
        return ResponseEntity.ok(reportService.findByCreatedByUser(userId));
    }
}
