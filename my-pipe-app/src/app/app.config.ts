import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {provideHttpClient} from '@angular/common/http'
import { DatePipe } from '@angular/common';
import { ExampleService } from './services/example.service';
export const appConfig: ApplicationConfig = {
  providers: [
    DatePipe,
    ExampleService,
    provideHttpClient(),
    importProvidersFrom([])
  ]
};
