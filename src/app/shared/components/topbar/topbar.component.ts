import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  isProfileOpen = false;

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
  }

  closeProfile() {
    this.isProfileOpen = false;
  }

}
