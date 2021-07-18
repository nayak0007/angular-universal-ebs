import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsrComponent } from './ssr.component';

const routes: Routes = [
  {
    path: '', component: SsrComponent,
    children: [
      {
        path: 'home', loadChildren: ()=> import('./dashboard/dashboard.module').then(
          m => m.DashboardModule
        )
      },
      {
        path: 'contactus', loadChildren: ()=> import('./contactus/contactus.module').then(
          m => m.ContactusModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsrRoutingModule { }
