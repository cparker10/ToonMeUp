import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import * as Snap from 'snapsvg';
import { DataService } from "../data.service";


declare var Snap: any;

@Component({
  selector: 'app-hairstyle',
  templateUrl: './hairstyle.component.html',
  styleUrls: ['./hairstyle.component.css']
})
export class HairstyleComponent implements OnInit {
  project_hair_style = [];
  public style_info:any = []; //this is the object containing info for the hairstyles
  styleName: string; 
  fillArea: string;
  svgGroupName: string;
  public show: number;
  public reveal: boolean;
  public message: Object;

  @Output() showHairStyle = new EventEmitter<Object>();
 
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);

    this.project_hair_style = [
      { filename: "sm-2Braids.png", desc: "Two braids", fill_area_name: "_2BraidsHairColor", svg_name: "_2BraidsGroup", reveal: false },
      { filename: "sm_curlyfro.png", desc: "Coily Fro", fill_area_name: "HairColor", svg_name: "CurlyFroGroup", reveal: false  },
      { filename: "sm_crown.png", desc: "Crown", fill_area_name: "PuffHairColor", svg_name: "CrownPuffGroup", reveal: false }
    ]

  };

  newMessage(style_info: Object) {
    this.data.changeMessage(style_info);
  }

  clicked(index: number, event:any, style_info: Object){
    this.show = index;
    this.style_info.length = 0;
    this.styleName = this.project_hair_style[this.show].filename;
    this.fillArea = this.project_hair_style[this.show].fill_area_name;
    this.svgGroupName = this.project_hair_style[this.show].svg_name;
    this.reveal = this.project_hair_style[this.show].reveal;
    this.style_info.push({filename: this.styleName, fill_area_name: this.fillArea, svg_name: this.svgGroupName, reveal: this.reveal});
    // console.log("filename is " + this.project_hair_style[this.show].filename + "svg_name " + this.project_hair_style[this.show].svg_name);
    // console.log("printing this style info from hairstylecomponent" + this.style_info[0].filename);
    this.showHairStyle.emit({event, style_info});
    this.newMessage(style_info);
   };

  
   toggle(style: {filename: string, fill_area_name: string, svg_name: string, reveal: boolean, index: number }){
    this.project_hair_style.map((p) => {
      if (p.svg_name == style.svg_name ){
        p.reveal = !p.reveal;
        
      } else {
        p.reveal = false;
        
        var hide = Snap.select("#"+ p.svg_name);
        hide.attr({visibility: "hidden"}); 
      }
    });    
  }


}
