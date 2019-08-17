import { Component, OnInit} from '@angular/core';
import { DataService } from "./data.service";

// import { Background } from './background';
// import { Hair } from './hair';
// import { Face } from './face';
// import * as Snap from 'snap.svg';
// import 'snapsvg';

declare var Snap: any;
// declare var Snap: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  selected: any;
  s: any;
  b: any;  //rect for backgroun
  r: any; //tect for skin 
  faceColor: string;
  hairColor: string;
  eyebrowColor: string;
  lipColor: string;
  topColor: string;
  ruffleColor: string;
  girl: string;
  message: object;
  isApple: boolean;

  constructor (private data: DataService)  { }

  ngOnInit() {
    var apple = ['iPad', 'iPhone', 'iPod'];
    if (apple.indexOf(navigator.platform) > -1){
      this.isApple = true;
    };

    this.s = Snap("#svg");
    this.b = this.s.rect(0,0,800,800);  //for changing background
    this.b.attr({ id: "bgrTest"});  //for changing background
    // this.data.currentMessage.subscribe(message => this.message = message); //moved this to the hair component instead

   }

   //changing background
  dataFromChild(eventData){
    this.selected = eventData.srcElement.currentSrc;
    var bkg_image = this.s.image(this.selected, 0, 0, 800, 800);
    var chosen_bkgr = bkg_image.toPattern( 0,0,800,800 );
    this.b.attr({ fill: chosen_bkgr});
  }

  //changing face color
  dataFromFaceChild(eventData){
    console.log(eventData);
    this.selected = eventData.srcElement.style.backgroundColor;
    var faceColor = Snap.select("#Skin");
    faceColor.attr('fill' , this.selected);

  }

//changing haircolor/style datafromHairColorChild now moves to hair component

  // hairstyles
// CurlyFroGroup
// HairColor
// _2BraidsGroup
// _2BraidsHairColor
// CrownPuffGroup
// PuffHairColor
}