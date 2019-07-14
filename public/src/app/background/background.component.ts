import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * from 'jquery';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  @Input() showBackground: any;  // use the @Input decorator to indicate this comes from the parent
  project_bkgr = [];
  @Output() showBkgrColor = new EventEmitter();


  constructor() {
    this.project_bkgr = [
      {name:"bkgr_princess",filename:"bkgr_princess.jpg"},
      {name:"bkgr_floral_print",filename:"bkgr_floral_print.jpg"},
      {name:"bkgr_halftone",filename:"bkgr_halftone.jpg"},
      {name:"bkgr_orangeweb",filename:"bkgr_orangeweb.jpg"},
      {name:"bkgr_rainbowmm",filename:"bkgr_rainbowmm.jpg"},
      {name:"bkgr_cheetah",filename:"bkgr_cheetah.jpg"},
      {name:"bkgr_bright",filename:"bkgr_bright.jpeg"},
      {name:"bkgr_burst",filename:"bkgr_burst.png"},
      {name:"bkgr_sunray",filename:"bkgr_sunray.jpg"},
      {name:"bkgr_circ_halftone",filename:"bkgr_circ_halftone.jpg"},
      {name:"bkgr_royal",filename:"bkgr_royal.jpg"},
      {name:"bkgr_flowerwall",filename:"bkgr_flowerwall.jpg"},
      {name:"bkgr_rainbowwave",filename:"bkgr_rainbowwave.jpg"},
  ]
   };


   triggerEvent(){
    //  2b. Emit the Event
    this.showBkgrColor.emit(event); //we can pass in any data type
    }

  ngOnInit() {
  }

} //end of class
