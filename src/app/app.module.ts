import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

// Router
import { APP_ROUTING } from './app.routes'

// services
import {HeroesService} from "./services/heroes.service"
// Pipes
import { KeysPipe } from './pipes/keys.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
