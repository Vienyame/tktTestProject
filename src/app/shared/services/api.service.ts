import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../../environment.service';
import {Enterprise, Result} from '../models';


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private _http: HttpClient, private _environment: EnvironmentService) {
  }

  /**
   * get all enterprises
   */
  public getAllEnterprises(): Observable<Enterprise[]> {
    return this._http.get<Enterprise[]>(this._environment.backendURL.allEnterprises);
  }

  /**
   * Get a enterprise by id
   * @param bizId
   */
  public getEnterprise(bizId: number): Observable<Enterprise> {
    return this._http.get<Enterprise>(this._environment.backendURL.oneEnterprise.replace(':id', bizId));
  }

  /**
   * Get list of all results
   */
  public getEnterpriseResults(): Observable<Result[]> {
    return this._http.get<Result[]>(this._environment.backendURL.allResults);
  }
}
