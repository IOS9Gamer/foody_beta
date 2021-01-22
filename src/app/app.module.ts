import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertService } from '@services/AlertService';
import { HttpRequestService } from '@services/HttpRequestService';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire'
import { environment } from 'environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, HttpClientModule, AngularFireModule.initializeApp(environment.firestone), AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AlertService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
