import {RouterModule, Routes} from '@angular/router';
import {EnterprisesComponent} from './enterprises.component';
import {EnterpriseDetailsComponent, EnterpriseListComponent} from './views';

const ROUTES: Routes = [
  {
    path: '', component: EnterprisesComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: EnterpriseListComponent},
      {path: ':id', component: EnterpriseDetailsComponent},
    ]
  },

];
export const ENTERPRISES_ROUTES = RouterModule.forChild(ROUTES);
