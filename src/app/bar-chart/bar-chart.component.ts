import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  constructor(
    private sharedService:SharedService
  ) {}

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  generateNewDataset() {
    this.barChartData = [...this.sharedService.generateNewDataForAllDatasets(this.barChartData, this.barChartLabels)]; // Create a new array reference
  }
}
