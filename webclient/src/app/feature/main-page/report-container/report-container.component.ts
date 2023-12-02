import {Component, OnInit} from '@angular/core';
import {ReportService} from "../../../core/services/report-service";
import {Report} from "../../../core/model/report";
import {MatDialog} from "@angular/material/dialog";
import {ReportComponent} from "../report/report.component";
import {TokenStorageService} from "../../../core/services/token-storage.service";

@Component({
  selector: 'app-report-container',
  templateUrl: './report-container.component.html',
  styleUrls: ['./report-container.component.scss']
})
export class ReportContainerComponent implements OnInit {
  reports: Report[] = [];

  constructor(private reportService: ReportService, private dialog: MatDialog, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.loadReports()
  }

  loadReports() {
    this.reportService.getReports().subscribe({
      next: (data) => {
        this.reports = data;
      },
      error: (error) => {
        console.error('Error fetching products', error);
      },
    });
  }

  isAdmin(): boolean {
    const authUser = localStorage.getItem('auth-user');
    if (authUser) {
      // console.log(JSON.parse(authUser).roles)
      return JSON.parse(authUser).roles.includes('ADMIN')
    } else {
      console.error("Can't read role")
      return false;
    }

  }


  openReport() {
    const dialogRef = this.dialog.open(ReportComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadReports();
      }
    });
  }
}
