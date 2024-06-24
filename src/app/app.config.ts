import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideForms, ReactiveFormsModule } from '@angular/forms'; // Ensure this import
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideForms(), // Ensure FormsModule and ReactiveFormsModule are provided
    ReactiveFormsModule // This might be required if not included in provideForms
  ]
};
