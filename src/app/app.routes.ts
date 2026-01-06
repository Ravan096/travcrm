import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { QueriesComponent } from './features/queries/queries.component';
import { QueryDetailsComponent } from './pages/query-details/query-details.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';

export const routes: Routes = [
    { path: "", component: DashboardComponent },
    { path: 'queries/:id', component: QueryDetailsComponent },
    { path: "queries", component: QueriesComponent },
    { path: "login", component: SignInComponent },
    { path: "register", component: SignUpComponent }
];
