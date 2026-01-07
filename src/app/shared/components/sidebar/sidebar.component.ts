import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false;
  isMobileOpen = false;

  constructor(private layout: LayoutService) {
    this.layout.isCollapsed$.subscribe(v => this.isCollapsed = v);
    this.layout.isMobileOpen$.subscribe(v => this.isMobileOpen = v);
  }

  closeMobile() {
    this.layout.closeMobile();
  }

  onNavClick() {
    if (this.layout.isMobile()) {
      this.layout.closeMobile();
    }
  }

}
