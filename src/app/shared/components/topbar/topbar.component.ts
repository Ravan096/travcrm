import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  isProfileOpen = false;

  toggleProfile() {
    console.log('PROFILE CLICKED');
    this.isProfileOpen = !this.isProfileOpen;
  }

  closeProfile() {
    this.isProfileOpen = false;
  }

  constructor(public layout: LayoutService) { }

  toggleSidebar() {
    if (window.innerWidth < 1024) {
      // mobile
      this.layout.openMobile();
    } else {
      // desktop
      this.layout.toggleDesktop();
    }
  }

}
