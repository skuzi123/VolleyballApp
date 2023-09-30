package com.engineeringthesis.VolleyballApp.logic.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto extends AbstractDto {

    private String username;
    private String password;
    private String role;
}
