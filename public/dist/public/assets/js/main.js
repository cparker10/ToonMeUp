// console.log("connected!")
//note: snap elements on broswer 'paper' are layered in the reverse order from js.  
// ie the first js element is at the very back of the browser 'paper'.  
// the last item in js is in the front of browser paper.  items must appear before code.

//DRAWING OBJECTS
  var s = Snap("#svg");
  var h = Snap("#hairStyleClass");
  
  // var s = Snap(800, 800);
  s.attr({ viewBox: "0 0 800 800", fill: 'white'});
  // var c = s.rect(750, -90, 100, 100);
  
  var g = s.group();
  var face, blouse, fro, braids, crown, faceGrp, blouseGrp, froGrp, braidsGrp, crownGrp, hairGrp;
  



//CODE

  $(document).ready ( function(){
    //load //this loads face
    Snap.load("./assets/images/Source-Girl_Test.svg", onSVGLoaded3); 
   
  });


//method to load svg
function onSVGLoaded(data) {
  g.append( data );
  // console.log("got it");
};

//method to load all
function onSVGLoaded2(data) {
  face = s.group().append( data );
  group.append(face);
  // console.log("got it");
};

//method to load individual parts
function onSVGLoaded3(data) {
  face = data.select("#FaceGroup");
  blouse = data.select("#BlouseGroup");
  fro = data.select("#CurlyFroGroup");
  braids = data.select("#_2BraidsGroup");
  crown  = data.select("#CrownPuffGroup");
  faceGrp = s.group().append(face).addClass("faceGrp");
  blouseGrp = s.group().append(blouse);
  hairGrp = s.group().append(fro).append(braids).append(crown).addClass("hairGrp");
  
  g.append(faceGrp);
  g.append(hairGrp); //load order matters. load hair after face so that the 
  g.append(blouseGrp);
  
  braidsGrp = Snap.select("#_2BraidsGroup");
  braidsGrp.attr({visibility: "hidden"}); //hiding braids on load
  crownGrp = Snap.select("#CrownPuffGroup");
  crownGrp.attr({ visibility: "hidden"}); //hiding crown on load - curly fro should be showing
  // console.log("got it");
};



// //changing hairstyle code1
// function chgHairstyle1(){
//   $('#hair').on('click', 'img', function(){
//     var selected = $(this).attr('src');
//     $('g#hairstyle svg').remove(); //from parent g and id hairstyle remove child svg
//     console.log("selected hairstyle is  " + selected);
//     Snap.load(selected, onSVGLoaded);
//     });

// }


//for changing hairstyles - need to have just the selected one display, and not reload every selection
//saving image for download - tools?

