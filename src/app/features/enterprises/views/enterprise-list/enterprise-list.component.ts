import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Subject} from 'rxjs';
import {EnterprisesService} from '../../services/enterprises.service';
import {Router} from '@angular/router';
import {OnDestroy} from '@angular/core/core';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss']
})
export class EnterpriseListComponent implements OnDestroy {
  // Table columns
  public displayedColumns: string[] = ['id', 'name', 'sector', 'siren'];
  // Table paginator
  @ViewChild(MatPaginator, {static: true}) public paginator: MatPaginator;
  // Table sort
  @ViewChild(MatSort, {static: true}) public sort: MatSort;
  // Allows to unsubscribe observable
  private _destroySub$ = new Subject<void>();

  constructor(public enterprisesService: EnterprisesService, private router: Router) {
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
    this._destroySub$.complete();
  }

  public ngAfterViewInit(): void {
    this.enterprisesService.dataSource.paginator = this.paginator;
    this.enterprisesService.dataSource.sort = this.sort;
  }

  /**
   * Open enterprise details view
   * @param name
   * @param id
   */
  public openBiz(name, id) {
    this.router.navigate(['biz', id]).then();
  }
}
