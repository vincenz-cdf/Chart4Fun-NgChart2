import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {

  constructor(
    private sharedService: SharedService
  ) { }

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions = {
    responsive: true,
    // other options
  };
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [
      {
        data: [350, 450, 100],
      }
    ]
  };

  generateNewDataset() {
    const newDatasets = this.sharedService.generateNewDataForChartData(this.doughnutChartData);

    // Create a new object reference for radarChartData
    this.doughnutChartData = {
      ...this.doughnutChartData,
      datasets: newDatasets
    };

  }
}
