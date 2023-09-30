package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.ReportEntity;
import com.engineeringthesis.VolleyballApp.data.repository.ReportRepository;
import com.engineeringthesis.VolleyballApp.logic.dto.ReportDto;
import com.engineeringthesis.VolleyballApp.logic.mapper.ReportMapper;
import com.engineeringthesis.VolleyballApp.logic.service.ReportService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class ReportStandardService extends AbstractStandardService<ReportDto, ReportEntity> implements ReportService {
    private final ReportRepository reportRepository;
    private final ReportMapper reportMapper;

    public ReportStandardService(ReportRepository reportRepository, ReportMapper reportMapper) {
        super(reportRepository, reportMapper);
        this.reportRepository = reportRepository;
        this.reportMapper = reportMapper;
    }

    @Override
    public List<ReportDto> findByCreatedByUser(String userId) {
        Objects.requireNonNull(userId);
        return reportMapper.mapToDtoList(reportRepository.findByCreatedByUser(userId));
    }
}
