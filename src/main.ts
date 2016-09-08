import 'core-js';           
import 'reflect-metadata';  
import 'zone.js/dist/zone';

// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { AppComponent } from './app/app.component';

// bootstrap(AppComponent);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app';
import { AppModule } from './app/app.module';

if(environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);