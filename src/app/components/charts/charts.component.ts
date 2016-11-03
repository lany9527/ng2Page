import {Component, OnInit, OnChanges, Input, Output, ElementRef} from '@angular/core';
import * as D3 from 'd3/index';
import * as Moment from 'moment';

@Component({
  selector: 'app-charts',
  // templateUrl: './charts.component.html',
  template: '<ng-content></ng-content>',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  private host;
  private svg;        //画布
  private margin;
  private width;
  private height;
  private xScale;
  private yScale;     //y轴 比例
  private xAxis;      //X轴
  private yAxis;      //Y轴
  private htmlElement;

  @Input() config: Array<AreaChartConfig>;

  constructor(private element: ElementRef) {
    this.htmlElement = this.element.nativeElement;
    this.host = D3.select(this.element.nativeElement);
  }

  ngOnInit() {
    console.log(D3)
  }


  ngOnChanges(): void {
    if (!this.config || this.config.length === 0) return;
    this.setup();
    this.buildSVG();
    this.populate();
    this.drawXAxis();
    this.drawYAxis();
  }

  //chart container
  private setup(): void {


  }

  //build SVG element
  private buildSVG(): void {

  }

  //draw x Axis
  private drawXAxis(): void {

  }

  //draw y Axis
  private drawYAxis(): void {

  }

  //maximum value in Y
  private getMaxY(): void {

  }

  //populate datasets into areas
  private populate(): void {

  }
}

export class AreaChartConfig {
  setting: { fill: string, interpolation: string};
  dataset: Array< {x: string, y: string} >
}