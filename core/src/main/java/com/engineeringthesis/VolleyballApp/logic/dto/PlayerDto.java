package com.engineeringthesis.VolleyballApp.logic.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlayerDto extends AbstractDto {

    private String userId;
    private String name;
    private String surname;
    private Integer age;
    private Integer experience;
    private String position;
    private Double weight;
    private Double height;
    private Double attackRange;
    private Double blockRange;
    private String teamId;

}
