package com.engineeringthesis.VolleyballApp.logic.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TrainerDto extends AbstractDto {

    private String userId;
    private String teamId;
    private String name;
    private String surname;
    private Integer age;
    private String workHistory;
    private String achievements;
}
