import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MsalUserService } from './services/msaluser.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { environment } from '../environments/environment';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
export const protectedResourceMap: any = [
  [environment.baseUrl, environment.scopeUri],
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    MsalModule.forRoot({
      clientID: environment.uiClienId,
      authority: 'https://login.microsoftonline.com/' + environment.tenantId,
      // cacheLocation: 'localStorage',
      protectedResourceMap,
      redirectUri: environment.redirectUrl,
    }),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    HttpClient,
    MsalUserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
