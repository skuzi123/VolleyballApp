import {Component, OnInit} from '@angular/core';
import {ReportService} from "../../../core/services/report-service";
import {Report} from "../../../core/model/report";

@Component({
  selector: 'app-report-container',
  templateUrl: './report-container.component.html',
  styleUrls: ['./report-container.component.scss']
})
export class ReportContainerComponent implements OnInit{
  reports: Report[] = [];
  constructor(private reportService: ReportService) {
  }
  ngOnInit(): void {
    this.reportService.getReports().subscribe(reports => {
      this.reports = reports;
    })
  }

}
