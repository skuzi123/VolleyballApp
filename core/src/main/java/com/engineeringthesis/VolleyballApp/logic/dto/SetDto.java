package com.engineeringthesis.VolleyballApp.logic.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SetDto extends AbstractDto {

    private String matchId;
    private Integer setNumber;
    private Integer homePoints;
    private Integer awayPoints;
}
