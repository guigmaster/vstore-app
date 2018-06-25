import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ProductCardComponent } from '../components/product-card/product-card'
import { ProductServiceProvider } from '../providers/product-service/product-service';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: 'pt' },
    ProductServiceProvider
  ]
})
export class AppModule {}
