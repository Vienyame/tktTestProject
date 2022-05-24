import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnterprisesComponent} from './enterprises.component';
import {EnterpriseDetailsComponent, EnterpriseListComponent} from './views';
import {SharedModule} from '../../shared';
import {ENTERPRISES_ROUTES} from './enterprises.routes';

@NgModule({
  declarations: [EnterprisesComponent, EnterpriseDetailsComponent, EnterpriseListComponent],
  imports: [
    CommonModule, SharedModule, ENTERPRISES_ROUTES
  ]
})
export class EnterprisesModule {
}
