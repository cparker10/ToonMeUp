var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require('path');

app.use(express.static(path.join(__dirname, './public/dist/public')));
app.use(express.static(path.join(__dirname, './public/node_modules')));

mongoose.connect('mongodb://localhost/partypeopledb', { useNewUrlParser: true });

const UserSchema = new mongoose.Schema({
    name: {type:String, required:[true, "Add name"], minlength: [3, "Name should be at least 3 characters."]},
    creator_email: {type:String, required:[true, "Please enter valid email."]},
    creator_password: {type:String, required:[true, "Password required."], minlength: [3, "Please enter valid password."]},
    characters: [],
}, {timestamps: true });

const CharacterSchema = new mongoose.Schema({
    project_name: {type:String},
    project_desc: {type:String},
    project_gender: {type:String},
    project_face: {type:String},
    project_skin_color: {type:String},
    project_ears: {type:String},  
    project_hair: {type:String},
    project_hair_color: {type:String},
    project_eyebrows: {type:String},
    project_eyebrows_color: {type:String},
    project_eye: {type:String},
    project_eye_color: {type:String},
    project_lips: {type:String},
    project_lips_color: {type:String},
    project_clothes: {type:String},
    project_clothes_color: {type:String},
}, {timestamps: true });

const User = mongoose.model('User', UserSchema);
const Character = mongoose.model('Character', CharacterSchema);

    
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

// Setting our Server to Listen on Port: 6789
app.listen(6789, function () {
    console.log("listening on port 6789");
})