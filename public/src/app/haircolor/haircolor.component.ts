import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from "../data.service";
import { color } from 'snapsvg';

@Component({
  selector: 'app-haircolor',
  templateUrl: './haircolor.component.html',
  styleUrls: ['./haircolor.component.css']
})
export class HaircolorComponent implements OnInit {
  project_hair_color = [];
  @Output() showHairColor = new EventEmitter();
  
  message: object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.message = message; 
      
    });
    
    
    this.project_hair_color = [     
      {color: "burlywood",hex:"#DEB887"},
      {color: "chocolate",hex:"#D2691E"},
      {color: "saddlebrown",hex:"#8B4513"},
      {color: "root beer",hex:"#3a3c3d"},
      {color: "off black",hex:"#090806"},
    ]
  }

  newMessage(incoming) {
    this.data.changeMessage(incoming);
  }

  triggerEvent(){
    this.showHairColor.emit(event);
    }

}

// go to skin change color, return to hair, try to change hair color - won't work 