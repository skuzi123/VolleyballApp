package com.engineeringthesis.VolleyballApp.logic.service.impl;

import com.engineeringthesis.VolleyballApp.data.model.ReportEntity;
import com.engineeringthesis.VolleyballApp.data.model.UserEntity;
import com.engineeringthesis.VolleyballApp.data.repository.ReportRepository;
import com.engineeringthesis.VolleyballApp.data.repository.UserRepository;
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
    private final UserRepository userRepository;

    public ReportStandardService(ReportRepository reportRepository, ReportMapper reportMapper,
                                 UserRepository userRepository) {
        super(reportRepository, reportMapper);
        this.reportRepository = reportRepository;
        this.reportMapper = reportMapper;
        this.userRepository = userRepository;
    }

    @Override
    public List<ReportDto> findByCreatedByUser(String userId) {
        Objects.requireNonNull(userId);
        UserEntity user = userRepository.findById(userId).orElse(null);
        return reportMapper.mapToDtoList(reportRepository.findByCreatedByUser(user));
    }
}
