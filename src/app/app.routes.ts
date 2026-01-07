import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { QueriesComponent } from './features/queries/queries.component';
import { QueryDetailsComponent } from './pages/query-details/query-details.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: SignInComponent },
            { path: 'register', component: SignUpComponent }
        ]
    },

    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'queries/:id', component: QueryDetailsComponent },
            { path: 'queries', component: QueriesComponent }
        ]
    },
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
