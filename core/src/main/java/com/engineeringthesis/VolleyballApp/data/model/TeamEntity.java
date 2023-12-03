package com.engineeringthesis.VolleyballApp.data.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "teams")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TeamEntity extends AbstractEntity {
    @Column(name = "team_name"
    )
    private String teamName;
    @Column(name = "image"
    )
    private String image;

}
