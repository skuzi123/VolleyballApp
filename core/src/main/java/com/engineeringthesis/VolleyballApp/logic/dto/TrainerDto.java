package com.engineeringthesis.VolleyballApp.logic.dto;

import jakarta.persistence.Column;
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
    private String image;
}
