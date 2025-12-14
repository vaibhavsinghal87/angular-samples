import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../api/api.endpoints';
import { IRequest } from '../interfaces/IRequest';
import { IResponse } from '../interfaces/IResponse';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  /**
   *
   * @param args
   * @returns
   */
  getData(args: IRequest): Observable<IResponse> {
    return this.http.get<IResponse>(
      endpoints.digital.getSummary.URI,
      {
        params: { ...args },
      }
    );
  }
}
