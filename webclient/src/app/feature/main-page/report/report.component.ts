import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {ReportService} from "../../../core/services/report-service";
import {Report} from "../../../core/model/report";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  reportForm!: FormGroup;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<ReportComponent>,
              private reportService: ReportService) {
    this.createForm();
  }

  private createForm() {
    this.reportForm = this.fb.group({
      reportName: ['', Validators.required],
      reportText: ['', Validators.required],
      createdByUserId: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.reportForm.valid) {
      const report = new Report(
        this.reportForm.value.reportName,
        this.reportForm.value.reportText,
        this.reportForm.value.createdByUserId
      );

      this.reportService.addReport(report).subscribe({
        next: (resp) => {
          this.dialogRef.close(report);
        },
        error: (err) => {
          console.error(err);

        }
      })

    }
  }
}
