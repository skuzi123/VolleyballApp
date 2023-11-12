package com.engineeringthesis.VolleyballApp.logic.security.payload.request;

import com.engineeringthesis.VolleyballApp.data.model.ERole;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class SignUpRequest {

    @NotBlank
    private String username;


    private ERole role;

    @NotBlank
    private String password;


}
