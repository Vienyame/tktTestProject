import {Injectable} from '@angular/core';
import {ApiService, Enterprise, Result} from '../../../shared';
import {forkJoin, map, Subject, takeUntil} from 'rxjs';
import {OnDestroy} from '@angular/core/core';
import {MatTableDataSource} from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService implements OnDestroy {
  // Table datasource
  public dataSource = new MatTableDataSource<Enterprise>();
  // Allow to unsubscribe observable
  private _destroySub$ = new Subject<void>();

  constructor(private _api: ApiService) {
    this.dataSource.data = [];
    this._api.getAllEnterprises()
      .pipe(takeUntil(this._destroySub$))
      .subscribe(data => {
        this.dataSource.data = data;
      });
  }

  /**
   * Enterprise details
   * @param bizId
   */
  public enterpriseDetails(bizId) {
    return forkJoin([this._api.getEnterprise(bizId), this._api.getEnterpriseResults()])
      .pipe(map(([biz, res]) => {
        return res.filter((item: Result) => item.business === biz.id);
      }));
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
    this._destroySub$.complete();
  }

}
