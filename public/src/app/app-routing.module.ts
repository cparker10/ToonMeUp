import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FaceComponent } from './face/face.component';
import { HairComponent } from './hair/hair.component';
import { NoseComponent } from './nose/nose.component';
import { LipsComponent } from './lips/lips.component';
import { ClothesComponent } from './clothes/clothes.component';
import { BackgroundComponent } from './background/background.component';
import  { HaircolorComponent } from './haircolor/haircolor.component';
import  { HairstyleComponent } from './hairstyle/hairstyle.component';
import { EyesComponent } from './eyes/eyes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'index', component: AppComponent},
  { path: 'home', component: HomeComponent},
  { path: 'face', component: FaceComponent},
  { path: 'hair', component: HairComponent},
  { path: 'eyes', component: EyesComponent},
  { path: 'nose', component: NoseComponent},
  { path: 'lips', component: LipsComponent},
  { path: 'clothes', component: ClothesComponent},
  { path: 'background', component: BackgroundComponent},
  { path: 'haircolor', component: HaircolorComponent},
  { path: 'hairstyle', component: HairstyleComponent},
  { path: '', pathMatch: 'full', redirectTo: '/index' },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
