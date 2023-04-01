import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: false,
      initialNavigation: !isIframe ? 'enabledBlocking' : 'disabled' ,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
