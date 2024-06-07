import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//import'./topics/01-basic-types';
//import './topics/02-object-interface';
//import './topics/03-functions';
//import './topics/04-homework';
import './topics/05-basic-destructuring';




platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
