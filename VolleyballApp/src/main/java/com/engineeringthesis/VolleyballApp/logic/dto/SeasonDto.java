package com.engineeringthesis.VolleyballApp.logic.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class SeasonDto extends AbstractDto {

    private String seasonName;
    private Date startDate;
    private Date endDate;

}
