import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {

  constructor(
    private sharedService: SharedService
  ) 
  {}

  public radarChartOptions = {
    responsive: true,
  };
  public radarChartData: ChartData<'radar'> = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ]
  };

  generateNewDataset() {
    const newDatasets = this.sharedService.generateNewDataForChartData(this.radarChartData);

    // Create a new object reference for radarChartData
    this.radarChartData = {
      ...this.radarChartData,
      datasets: newDatasets
    };
  }
}
