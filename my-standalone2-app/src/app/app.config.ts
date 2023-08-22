import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {provideHttpClient } from '@angular/common/http'
import { provideRouter } from '@angular/router';
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(),
    provideHttpClient(),
    provideRouter([])
  ]
};
