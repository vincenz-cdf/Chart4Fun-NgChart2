import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { AllChartComponent } from './all-chart/all-chart.component';

const routes: Routes = [
  { path: 'line-chart', component: LineChartComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'radar-chart', component: RadarChartComponent },
  { path: 'doughnut-chart', component: DoughnutChartComponent },
  { path: 'all-chart', component: AllChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
