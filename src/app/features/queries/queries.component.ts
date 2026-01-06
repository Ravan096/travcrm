import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queries',
  imports: [CommonModule],
  templateUrl: './queries.component.html',
  styleUrl: './queries.component.css'
})
export class QueriesComponent {



  constructor(private router: Router) { }

  openQuery(id: number) {
    this.router.navigate(['/queries', id]);
  }
  showFilter = false;
  showAddQuery = false;

  openAddQuery() {
    this.showAddQuery = true;
  }

  closeAddQuery() {
    this.showAddQuery = false;
  }
  getStatusClass(status: string): string {
    switch (status) {
      case 'New':
        return 'bg-[#6b94d6] text-white';

      case 'Cancelled':
        return 'bg-[#c65353] text-white';

      case 'Proposal Sent':
        return 'bg-[#e49e5e] text-white';

      case 'Follow Up':
        return 'bg-[#ff7b00] text-white';

      case 'Confirmed':
        return 'bg-green-600 text-white';

      default:
        return 'bg-gray-400 text-white';
    }
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  queries = [
    {
      id: 101631,
      customer: 'Mr. Tripplanista',
      destination: 'Dubai',
      date: '15-01-2026',
      package: 'Dubai tour - 170,830 INR',
      status: 'Confirmed'
    },

    { id: 101631, customer: 'Mr. Tripplanista', destination: 'Dubai', date: '15-01-2026', package: 'Dubai tour - 170,830 INR', status: 'New' },
    { id: 101632, customer: 'Ms. Wanderlust', destination: 'Paris', date: '18-01-2026', package: 'Paris Getaway - 220,500 INR', status: 'Proposal Sent' },
    { id: 101633, customer: 'Mr. Explorer', destination: 'Singapore', date: '20-01-2026', package: 'Singapore Delight - 145,000 INR', status: 'Confirmed' },
    { id: 101634, customer: 'Mrs. Globetrotter', destination: 'Maldives', date: '22-01-2026', package: 'Maldives Luxury - 310,000 INR', status: 'Cancelled' },
    { id: 101635, customer: 'Mr. Adventurer', destination: 'Thailand', date: '25-01-2026', package: 'Thailand Fun - 95,000 INR', status: 'Confirmed' },
    { id: 101636, customer: 'Ms. Nomad', destination: 'Bali', date: '28-01-2026', package: 'Bali Escape - 120,000 INR', status: 'Proposal Sent' },
    { id: 101637, customer: 'Mr. Voyager', destination: 'London', date: '30-01-2026', package: 'London Classic - 250,000 INR', status: 'Proposal Sent' },
    { id: 101638, customer: 'Mrs. Jetsetter', destination: 'New York', date: '02-02-2026', package: 'NYC Explorer - 330,000 INR', status: 'Confirmed' },
    { id: 101639, customer: 'Mr. Backpacker', destination: 'Nepal', date: '05-02-2026', package: 'Nepal Trek - 80,000 INR', status: 'Follow Up' },
    { id: 101640, customer: 'Ms. Traveller', destination: 'Australia', date: '08-02-2026', package: 'Australia Adventure - 400,000 INR', status: 'Confirmed' },
    { id: 101641, customer: 'Mr. Holidaymaker', destination: 'Canada', date: '10-02-2026', package: 'Canada Tour - 350,000 INR', status: 'Cancelled' },
    { id: 101642, customer: 'Mrs. Explorer', destination: 'Italy', date: '12-02-2026', package: 'Italy Romance - 280,000 INR', status: 'Confirmed' },
    { id: 101643, customer: 'Mr. Wanderer', destination: 'Spain', date: '15-02-2026', package: 'Spain Fiesta - 260,000 INR', status: 'Proposal Sent' },
    { id: 101644, customer: 'Ms. Adventurer', destination: 'Switzerland', date: '18-02-2026', package: 'Swiss Alps - 370,000 INR', status: 'Confirmed' },
    { id: 101645, customer: 'Mr. Nomad', destination: 'Japan', date: '20-02-2026', package: 'Japan Culture - 310,000 INR', status: 'Confirmed' },
    { id: 101646, customer: 'Mrs. Traveller', destination: 'South Africa', date: '23-02-2026', package: 'Safari Adventure - 290,000 INR', status: 'Proposal Sent' },
    { id: 101647, customer: 'Mr. Jetsetter', destination: 'Turkey', date: '26-02-2026', package: 'Turkey Delight - 210,000 INR', status: 'Confirmed' },
    { id: 101648, customer: 'Ms. Explorer', destination: 'Vietnam', date: '01-03-2026', package: 'Vietnam Heritage - 130,000 INR', status: 'Confirmed' },
    { id: 101649, customer: 'Mr. Backpacker', destination: 'Sri Lanka', date: '03-03-2026', package: 'Sri Lanka Tour - 90,000 INR', status: 'Proposal Sent' },
    { id: 101650, customer: 'Mrs. Wanderlust', destination: 'Greece', date: '06-03-2026', package: 'Greek Islands - 270,000 INR', status: 'Confirmed' },
    { id: 101651, customer: 'Mr. Voyager', destination: 'Egypt', date: '09-03-2026', package: 'Egypt Pyramids - 240,000 INR', status: 'Confirmed' },
    { id: 101652, customer: 'Ms. Holidaymaker', destination: 'Dubai', date: '12-03-2026', package: 'Dubai Luxury - 180,000 INR', status: 'Proposal Sent' },
    { id: 101653, customer: 'Mr. Explorer', destination: 'Malaysia', date: '15-03-2026', package: 'Malaysia Fun - 140,000 INR', status: 'Confirmed' },
    { id: 101654, customer: 'Mrs. Jetsetter', destination: 'France', date: '18-03-2026', package: 'French Riviera - 300,000 INR', status: 'Confirmed' },
    { id: 101655, customer: 'Mr. Adventurer', destination: 'Hong Kong', date: '20-03-2026', package: 'Hong Kong Tour - 160,000 INR', status: 'Cancelled' }

  ];
}
