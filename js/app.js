'use strict'

// var randomNum
var parentSection = document.getElementById('rando');

var parentElement1 = document.getElementById('stuff1');
var parentElement2 = document.getElementById('stuff2');
var parentElement3 = document.getElementById('stuff3');

var parentArr = [parentElement1, parentElement2, parentElement3];

var stuffArr = [];

class Stuff {
  constructor(filePath, alt) {

    this.filePath = filePath;
    this.alt = alt;
    this.clicks = 0;

    stuffArr.push(this);
  }
}

new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');
new Stuff('img/bag.jpg', 'bag', 'bag');

function getRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randoPics() {
  var randoIndex1 = getRandomNum(stuffArr.length);
  var randoIndex2 = getRandomNum(stuffArr.length);
  var randoIndex3 = getRandomNum(stuffArr.length);

  var choseImg1 = stuffArr[randoIndex1];
  var choseImg2 = stuffArr[randoIndex2];
  var choseImg3 = stuffArr[randoIndex3];
}
function handleClick(event) {
  var alt = event.target.alt;

  for (var i = 0; ){}
}

parentSection.addEventListener('click', handleClick);
randoPics();