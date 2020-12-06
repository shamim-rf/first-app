import { DashboardCardData } from './../../shared/mock/dashboard-card-data';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import { ICardData } from 'src/app/shared/model/response.interface';
export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}
declare var require: any;

const data = require('../../shared/mock/data.json');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards: ICardData[] = DashboardCardData;
  barChart1: Chart = {
    type: 'Bar',
    data: data['Bar'],
    options: {
      seriesBarDistance: 15,
      high: 12,

      axisX: {
        showGrid: false,
        offset: 20
      },
      axisY: {
        showGrid: true,
        offset: 40
      },
      height: 360
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
