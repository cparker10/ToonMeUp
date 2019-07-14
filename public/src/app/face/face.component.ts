import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {
  project_skin_color = [];
  @Output() showSkinColor = new EventEmitter();


  constructor() {
    this.project_skin_color = [
      // {color: "none",hex:"#00FFFFFF"},
      {color: "rosey brown",hex:"#E7CEC9"},
      {color: "original",hex:"#c49e8c"},
      {color: "med mocha",hex:"#B39285"},
      {color: "deer",hex:"#C18566"},
      {color: "russet",hex:"#8D5524"},
      
      {color: "chestnut",hex:"#524138"},
      // {color: "test",hex:"#260701"},
      // {color: "test",hex:"#3D0C02"},
      // {color: "chestnut",hex:"#524138"},
      // {color: "chestnut",hex:"#524138"},
      // {color: "chestnut",hex:"#524138"},
      // {color: "chestnut",hex:"#524138"},
      // {color: "chestnut",hex:"#524138"},
      // {color: "chestnut",hex:"#524138"}

    ]
  }

  ngOnInit() { 
  }
  
   triggerEvent(){
    this.showSkinColor.emit(event); //we can pass in any data type
    }

  

}
