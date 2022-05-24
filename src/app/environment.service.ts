import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  // private property to store all backend URLs
  public backendURL: any;

  constructor() {
    this.backendURL = {};
    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this.backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

}
