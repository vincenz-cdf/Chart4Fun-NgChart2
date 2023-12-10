import { Injectable } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private triggerFunctionSource = new Subject<void>();

  // Observable string streams
  triggerFunction$ = this.triggerFunctionSource.asObservable();

  // Service message commands
  triggerSecondComponentFunction() {
    this.triggerFunctionSource.next();
  }

  generateNewDataForAllDatasets(chartData: ChartDataset[], labels: any) {
    const newData = chartData.map(dataset => ({
      ...dataset,
      data: labels.map(() => Math.round(Math.random() * 100))
    }));

    return newData;
  }

  generateNewDataForChartData(chartData: ChartData<any>) {
    const newData = chartData.datasets.map(dataset => ({
      ...dataset,
      data: chartData.labels!.map(() => Math.round(Math.random() * 100))
    }));

    console.log(newData)
    return newData; // Create a new array reference
  }
}
