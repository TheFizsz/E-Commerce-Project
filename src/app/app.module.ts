import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Import components*/
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.compoment';
import {LandingComponent} from './landing/landing.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
