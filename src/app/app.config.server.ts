import { mergeApplicationConfig, ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

// Enregistrez les données de localisation pour le français
registerLocaleData(fr.default);

const serverConfig: ApplicationConfig = {

  providers: [
    provideServerRendering(),
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ]

};

export const config = mergeApplicationConfig(appConfig, serverConfig);
