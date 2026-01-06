import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
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
