import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponent,TopbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'travcrm';
}
