import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Import components*/
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.compoment';
import {LandingComponent} from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
