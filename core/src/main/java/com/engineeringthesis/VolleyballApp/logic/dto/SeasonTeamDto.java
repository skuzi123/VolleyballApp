package com.engineeringthesis.VolleyballApp.logic.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeasonTeamDto extends AbstractDto{

//    private SeasonTeamIdDto id;
    private String seasonId;
    private String teamId;
    private Integer points;
    private Integer matches;

}
