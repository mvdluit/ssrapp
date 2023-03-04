import { Inject, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { request, Request } from 'express';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
