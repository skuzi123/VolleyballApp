package com.engineeringthesis.VolleyballApp.logic.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReportDto extends AbstractDto {

    private String reportName;
    private String reportText;
    private String createdByUserId;
}
