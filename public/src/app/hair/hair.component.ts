
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from "../data.service";
import { shallowEqual } from '@angular/router/src/utils/collection';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';
import { KeyValuePipe } from '@angular/common';
// import * as Snap from 'snapsvg'; //remove this or throws an error: snap svg Uncaught TypeError: Cannot read property 'on' of undefined
// import 'snapsvg';
//inject variables from /assets/js/main.js here??

declare var Snap: any; //comment out line 4, and add this line back

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.css']
})
export class HairComponent implements OnInit {
  // selected: any;
  selectedCol: string;
  selectedStyle: string;
  // hairStyle: any;
  message: Object;
  fillAreaName: string;
  hairColor: string;
  currHairColor: string;
  currentStyle: string;

  @Output() valueChange = new EventEmitter();
  
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message =>
      {
        this.message = message; 
        
      });

      this.currentStyle = (this.message[0]['fill_area_name']);

      // to preserve setting in case a hairstyle has already been selected
      if (this.currentStyle){
        this.fillAreaName = ("#"+this.currentStyle);
      }

      //to retain already selected color
      //tbd
  
      // so that HairColor fill area is already selected and color can be changed upon load. 
    // previously fill area name was undefined and user had to select a hairstyle before the color will change. 
    // now fill area is assigned to default hair style is coily fro w/ fill area name of #HairColor
      if (this.fillAreaName == null || this.fillAreaName === undefined){
        this.fillAreaName = "#HairColor";  
      } 
  };

     //changing haircolor
  dataFromHairColorChild(eventData){
    this.selectedCol = eventData.srcElement.style.backgroundColor;
    var hairColor = Snap.select(this.fillAreaName);
    hairColor.attr({fill: this.selectedCol});

 };

 // changing hairstyle
 dataFromHairStyleChild(eventData){  
  this.selectedStyle = ("#" + eventData.style_info[0].svg_name);
  this.fillAreaName = ("#" + eventData.style_info[0].fill_area_name);
  var hairStyle = Snap.select(this.selectedStyle);
  hairStyle.attr({visibility: "visible"});
}

newMessage(incoming) {
  this.data.changeMessage(incoming)
}

};