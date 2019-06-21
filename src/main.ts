import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import axios from 'axios';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

axios.defaults.baseURL = 'http://localhost:8080/apiHoteleria/index.php';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
