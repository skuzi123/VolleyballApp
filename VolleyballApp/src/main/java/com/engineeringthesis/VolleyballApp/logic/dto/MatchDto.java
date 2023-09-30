package com.engineeringthesis.VolleyballApp.logic.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class MatchDto extends AbstractDto {

    private String hostTeamId;
    private String guestTeamId;
    private Date matchDate;
    private String result;


}
