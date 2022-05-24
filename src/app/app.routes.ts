import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NotFoundComponent } from './not-found';

const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},
  {path: 'biz', loadChildren: () => import('./features/enterprises/enterprises.module').then((m) => m.EnterprisesModule)},
  {path: '**', component: NotFoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, {useHash: true});
