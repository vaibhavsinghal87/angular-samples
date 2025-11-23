import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  ENDPOINTS,
  EndpointName,
} from '../api/api.endpoints';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private http = inject(HttpClient);

  constructor() {}

  loadAppConfig(keys: string[] = []): any {
    const endpoint = ENDPOINTS[EndpointName.CONFIG];
    return this.http.post(endpoint.path, keys);
  }
}
