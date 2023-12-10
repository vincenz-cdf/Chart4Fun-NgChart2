import { Component, ViewChild } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';

@Component({
  selector: 'app-all-chart',
  templateUrl: './all-chart.component.html',
  styleUrl: './all-chart.component.css'
})
export class AllChartComponent {

  @ViewChild(LineChartComponent) lineChartComponent!: LineChartComponent;
  @ViewChild(DoughnutChartComponent) doughnutChartComponent!: DoughnutChartComponent;
  @ViewChild(BarChartComponent) barChartComponent!: BarChartComponent;
  @ViewChild(RadarChartComponent) radarChartComponent!: RadarChartComponent;


  private triggerFunctionSubscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.triggerFunctionSubscription = this.sharedService.triggerFunction$.subscribe(() => {
      this.updateCharts();
    });
  }

  updateCharts() {
    this.lineChartComponent.generateNewDataset();
    this.doughnutChartComponent.generateNewDataset();
    this.barChartComponent.generateNewDataset();
    this.radarChartComponent.generateNewDataset();
  }

  ngOnDestroy() {
    this.triggerFunctionSubscription.unsubscribe();
  }
  

}
