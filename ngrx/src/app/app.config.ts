import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { countReducer } from './reducer/count.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({count: countReducer})]
};
