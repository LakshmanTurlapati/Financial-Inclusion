import { Component, OnInit, Renderer2, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var $: any; // Import jQuery
declare var Chart: any; // Import Chart.js

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewChecked {
  public lineBigDashboardChartType: string;
  public lineBigDashboardChartData: Array<any>;
  public lineBigDashboardChartOptions: any;
  public lineBigDashboardChartLabels: Array<any>;
  public lineBigDashboardChartColors: Array<any>;
  public score: number = 0; // Initialize score with a default value
  public dataFetched: boolean = false;
  public fetchedData: any = {};

  public aadhar: string = '';
  public pan: string = '';

  private gaugeChart: any;

  constructor(private http: HttpClient, private renderer: Renderer2, private router: Router) { }

  ngOnInit() {
    this.initializeCharts();
  }

  ngAfterViewChecked() {
    // Ensure the gauge is correctly initialized
    if (this.dataFetched && !this.gaugeChart) {
      this.updateGauge(this.score);
    }
  }

  initializeCharts() {
    this.lineBigDashboardChartType = 'line';
    this.lineBigDashboardChartData = [{
      label: "Data",
      pointBorderWidth: 1,
      pointHoverRadius: 7,
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      fill: true,
      borderWidth: 2,
      data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
    }];
    this.lineBigDashboardChartLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    this.lineBigDashboardChartColors = [{
      backgroundColor: 'rgba(255, 255, 255, 0.24)',
      borderColor: '#FFFFFF',
      pointBorderColor: '#FFFFFF',
      pointBackgroundColor: "#2c2c2c",
      pointHoverBackgroundColor: "#2c2c2c",
      pointHoverBorderColor: '#FFFFFF',
    }];
    this.lineBigDashboardChartOptions = {
      layout: { padding: { left: 20, right: 20, top: 0, bottom: 0 } },
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      legend: { position: "bottom", fillStyle: "#FFF", display: false },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }],
        xAxes: [{
          gridLines: { zeroLineColor: "transparent", display: false },
          ticks: { padding: 10, fontColor: "rgba(255,255,255,0.4)", fontStyle: "bold" }
        }]
      }
    };
  }

  updateGauge(score: number) {
    const ctx = document.getElementById('creditScoreGauge') as HTMLCanvasElement;
    if (!ctx) {
      console.error('Gauge element not found');
      return;
    }

    if (this.gaugeChart) {
      this.gaugeChart.destroy();
    }

    this.gaugeChart = new Chart(ctx, {
      type: 'gauge',
      data: {
        datasets: [{
          value: score,
          minValue: 350,
          data: [350, 500, 600, 700, 800, 850],
          backgroundColor: ['red', 'orange', 'yellow', 'lightgreen', 'green'],
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Credit Score'
        },
        layout: {
          padding: {
            bottom: 30
          }
        }
      }
    });
  }

  onSubmit() {
    this.fetchCreditScoreData(this.aadhar);
  }

  fetchCreditScoreData(aadhar: string) {
    this.http.get(`http://127.0.0.1:5000/api/creditscore/${aadhar}`).subscribe(
      (data: any) => {
        console.log('Fetched data from server:', data);
        const score = data.credit_score || 0; // Extract credit_score from the fetched data
        console.log('Assigned score:', score);
        this.score = score;
        this.fetchedData = data;
        this.dataFetched = true;
        this.updateGauge(this.score); // Update the gauge with the fetched score
      },
      error => {
        console.error('Error fetching data from server:', error);
      }
    );
  }

  navigateAndClose(route: string) {
    $('#optimizeModal').modal('hide'); // Close the modal using jQuery
    this.router.navigate([route]); // Navigate to the specified route
  }

  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}
