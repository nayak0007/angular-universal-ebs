import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  ViewChild,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('barChart')
  private chartRef: ElementRef;
  @Input() data: any;
  @Input() keys: string[] = [];
  @Input() label: string = '';
  @Input() title: string = '';
  private chart: any;
  constructor() {
    this.chartRef = null as any;
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    const isFirstChange = Object.values(changes).some((c) => c.isFirstChange());
    if (!isFirstChange) {
      this.chart && this.chart.destroy();
      this.createChart();
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  createChart() {
    const dataPoints: number[] = [];
    this.keys.forEach((key: string) => {
      dataPoints.push(this.data[key]);
    });
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.keys,
        datasets: [
          {
            label: this.label,
            data: dataPoints,
            barPercentage: 0.5,
            barThickness: 40,
            maxBarThickness: 40,
            borderRadius: Number.MAX_VALUE,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: this.title,
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            grid: {
              drawTicks: false,
              borderDash: [5, 2]
            }
          },
          x: {
            grid: {
              drawTicks: false,
              display: false
            }
          },
        },
      },
    });
  }
}
