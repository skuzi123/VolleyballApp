package com.engineeringthesis.VolleyballApp.logic.service;

import com.engineeringthesis.VolleyballApp.data.model.MatchEntity;
import com.engineeringthesis.VolleyballApp.logic.dto.MatchDto;

import java.util.List;


public interface MatchService extends AbstractModelService<MatchDto, MatchEntity> {
    List<MatchDto> findByHostTeamOrGuestTeam(String hostTeamId, String guestTeamId);

}
