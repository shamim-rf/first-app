import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAreaLayoutComponent } from './shared/layout/user-area-layout.component';
const routes: Routes = [
  {
    path: '',
    component: UserAreaLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./shared/layout/user-area-layout.module').then(m => m.UserAreaLayoutModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
