import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  private collapsed$ = new BehaviorSubject<boolean>(false);
  isCollapsed$ = this.collapsed$.asObservable();

  // mobile drawer
  private mobileOpen$ = new BehaviorSubject<boolean>(false);
  isMobileOpen$ = this.mobileOpen$.asObservable();

  toggleDesktop() {
    this.collapsed$.next(!this.collapsed$.value);
  }

  openMobile() {
    this.mobileOpen$.next(true);
  }

  closeMobile() {
    this.mobileOpen$.next(false);
  }

  isMobile(): boolean {
    return window.innerWidth < 1024; // lg breakpoint
  }
}
