package com.engineeringthesis.VolleyballApp.data.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "reports")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReportEntity extends AbstractEntity {

    @Column(name = "report_name")
    private String reportName;

    @Column(name = "report_text", columnDefinition = "TEXT")
    private String reportText;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "created_by_user_id")
    private UserEntity createdByUser;

    public void setCreatedByUser(String createdByUserId) {
        if (createdByUserId == null) {
            this.createdByUser = null;
        } else {
            UserEntity createdByUser = new UserEntity();
            createdByUser.setId(createdByUserId);
            this.createdByUser = createdByUser;
        }
    }

}
