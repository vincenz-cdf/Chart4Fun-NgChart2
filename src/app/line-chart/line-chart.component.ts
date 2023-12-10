import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  constructor(
    private sharedService: SharedService
  ) 
  {}

  lineChartData: ChartDataset[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];
  lineChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];

  generateNewDataset() {
  
    this.lineChartData = [...this.sharedService.generateNewDataForAllDatasets(this.lineChartData, this.lineChartLabels)]; // Create a new array reference
  }
}
