import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from "./data.service"; //just added

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FaceComponent } from './face/face.component';
import { HairComponent } from './hair/hair.component';
import { NoseComponent } from './nose/nose.component';
import { LipsComponent } from './lips/lips.component';
import { ClothesComponent } from './clothes/clothes.component';
import { BackgroundComponent } from './background/background.component';
import { EyesComponent } from './eyes/eyes.component';
import { HairstyleComponent } from './hairstyle/hairstyle.component';
import { HaircolorComponent } from './haircolor/haircolor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FaceComponent,
    HairComponent,
    NoseComponent,
    LipsComponent,
    ClothesComponent,
    BackgroundComponent,
    EyesComponent,
    HairstyleComponent,
    HaircolorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, DataService], //just added
  bootstrap: [AppComponent]
})
export class AppModule { }
