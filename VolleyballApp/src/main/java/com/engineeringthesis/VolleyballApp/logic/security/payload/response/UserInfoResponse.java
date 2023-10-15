package com.engineeringthesis.VolleyballApp.logic.security.payload.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserInfoResponse {

    private String id;
    private String username;
    private String role;

    public UserInfoResponse(String id, String username, String role) {
        this.id = id;
        this.username = username;
        this.role = role;
    }
}
