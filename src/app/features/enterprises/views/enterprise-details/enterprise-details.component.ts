import {Component, OnDestroy} from '@angular/core';
import {EnterprisesService} from '../../services/enterprises.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {map, Subject, takeUntil} from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: 'enterprise-details.component.html',
  styleUrls: ['enterprise-details.component.scss']
})
export class EnterpriseDetailsComponent implements OnDestroy {
  // Enterprise details list
  public bizDetails;
  // Allows to unsubscribe observable
  private _destroySub$ = new Subject<void>();

  constructor(public enterprisesService: EnterprisesService, private router: Router, private route: ActivatedRoute, private location: Location) {
    this.route.paramMap
      .pipe(takeUntil(this._destroySub$),
        map((params: ParamMap) => params.get('id'))
      )
      .subscribe(id => {
        this.refreshBizDetails(id);
      });
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
    this._destroySub$.complete();
  }

  /* Back to enterprises list */
  public backTo() {
    this.location.back();
  }

  /**
   * Retrieve details list
   * @param id
   * @private
   */
  private refreshBizDetails(id: string) {
    this.enterprisesService.enterpriseDetails(id)
      .pipe(takeUntil(this._destroySub$))
      .subscribe(details => {
        this.bizDetails = details;
      });

  }
}
