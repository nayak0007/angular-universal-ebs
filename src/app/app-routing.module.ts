import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'public/home',
  },
  {
    path: 'public', loadChildren: () => import('./modules/ssr/ssr.module').then(
      m => m.SsrModule
    )
  },
  {
    path: 'private', loadChildren: () => import('./modules/csr/csr.module').then(
      m => m.CsrModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
