import { inject } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { firstValueFrom } from 'rxjs';

export function initApp() {
  const configService = inject(ConfigService);
  return firstValueFrom(configService.loadAppConfig());
}
