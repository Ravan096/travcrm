import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
} from 'chart.js';


Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);
Chart.register(BarController, BarElement, CategoryScale, LinearScale, LineController, LineElement, PointElement, Tooltip, Legend);

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.loadDonutChart();
    this.loadYearChart();
    this.initRevenueChart();
    this.initLeadSourceChart();
  }


  loadDonutChart() {
    const ctx = document.getElementById('statusDonutChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'Confirmed',
          'New',
          'Invalid',
          'Proposal Sent',
          'No Connect',
          'Hot Lead',
          'Follow Up',
          'Cancelled',
          'Proposal Confirmed'
        ],
        datasets: [{
          data: [
            497,  // Confirmed
            364,  // New
            45,   // Invalid
            28,   // Proposal Sent
            22,   // No Connect
            18,   // Hot Lead
            15,   // Follow Up
            8,    // Cancelled
            5     // Proposal Confirmed
          ],
          backgroundColor: [
            '#4ad295', // green
            '#6d94d6', // blue
            '#f2b066', // orange
            '#e066ff', // purple
            '#ff6b6b', // red
            '#ff8c00', // dark orange
            '#8e44ad', // violet
            '#7f8c8d', // grey
            '#c0392b'  // dark red
          ],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '65%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              font: {
                size: 11
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const total = context.dataset.data.reduce(
                  (sum: number, val: any) => sum + val,
                  0
                );
                const value = context.raw as number;
                const percent = ((value / total) * 100).toFixed(1);
                return `${context.label}: ${percent}%`;
              }
            }
          }
        }
      }
    });
  }


  loadYearChart() {
    const ctx = document.getElementById('yearBarChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
          {
            label: 'Queries',
            data: [13, 8, 25, 23, 22, 45, 29, 26, 40, 32, 20, 50],
            backgroundColor: '#9ecbff'
          },
          {
            label: 'Confirmed',
            data: [6, 5, 6, 5, 15, 5, 40, 25, 26, 22, 19, 25],
            backgroundColor: '#4ad295'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              stepSize: 5
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        }
      }
    });
  }

  initRevenueChart() {
    new Chart('revenueChart', {
      type: 'line',
      data: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
          {
            label: 'This Month',
            data: [665410, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: '#2563eb',
            backgroundColor: '#2563eb',
            tension: 0.4,
            fill: false,
            pointRadius: 5,
            pointBackgroundColor: '#2563eb'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `This Month: ${ctx.parsed.y}`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: '#eee'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }


  initLeadSourceChart() {
    new Chart('leadSourceChart', {
      type: 'bar',
      data: {
        labels: [
          'Advertisement',
          'Walk-In',
          'WhatsApp',
          'Referral',
          'WHATS APP',
          'Telephone',
          'Online',
          'Agent',
          'Website',
          'Instagram',
          'Facebook',
          'Corporate'
        ],
        datasets: [
          {
            label: 'Total Queries',
            data: [520, 410, 160, 120, 90, 80, 70, 60, 55, 45, 35, 20],
            backgroundColor: '#6CB6F1'
          },
          {
            label: 'Confirmed',
            data: [140, 280, 110, 80, 60, 50, 40, 30, 25, 20, 15, 10],
            backgroundColor: '#4DD599'
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          x: {
            grid: {
              color: '#eee'
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }


  stats = [
    { title: "Today's Queries", value: 7, color: 'from-blue-100 to-blue-200', action: 'Add New' },
    { title: 'Total Queries', value: 1327, color: 'from-yellow-100 to-yellow-200' },
    { title: 'Proposal Sent', value: 59, color: 'from-orange-100 to-orange-200', tag: 'Proposal Sent' },
    { title: 'Hot Lead', value: 27, color: 'from-red-100 to-red-200', tag: 'Hot Lead' },
    { title: 'Proposal Confirmed', value: 23, color: 'from-purple-100 to-purple-200', tag: 'Proposal Con.' },
    { title: 'Cancelled', value: 24, color: 'from-red-200 to-red-300', tag: 'Cancel' },
    { title: 'Follow Up', value: 23, color: 'from-orange-200 to-orange-300', tag: 'Follow Up' },
    { title: 'Confirmed', value: 653, color: 'from-green-100 to-green-200', tag: 'Confirmed' },
  ];


}
