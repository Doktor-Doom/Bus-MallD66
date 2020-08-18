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
new Stuff('img/banana.jpg', 'banana', 'banana');
new Stuff('img/bathroom.jpg', 'bathroom', 'bathroom');
new Stuff('img/boots.jpg', 'boots', 'boots');
new Stuff('img/breakfast.jpg', 'breakfast', 'breakfast');
new Stuff('img/bubblegum.jpg', 'bubblegum', 'bubblegum');
new Stuff('img/chair.jpg', 'chair', 'chair');
new Stuff('img/cthulu.jpg', 'cthulu', 'cthulu');
new Stuff('img/dog-duck.jpg', 'dog-duck', 'dog-duck');
new Stuff('img/dragon.jpg', 'dragon', 'dragon');
new Stuff('img/pen.jpg', 'pen', 'pen');
new Stuff('img/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new Stuff('img/scissors.jpg', 'scissors', 'scissors');
new Stuff('img/shark.jpg', 'shark', 'shark');
new Stuff('img/sweep.jpg', 'sweep', 'sweep');
new Stuff('img/tauntaun.jpg', 'tauntaun', 'tauntaun');
new Stuff('img/unicorn.jpg', 'unicorn', 'unicorn');
new Stuff('img/usb.jpg', 'usb', 'usb');
new Stuff('img/water-can.jpg', 'water-can', 'water-can');
new Stuff('img/wine-glass.jpg', 'wine-glass', 'wine-glass');


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

  while (randoIndex1 === randoIndex2 || randoIndex2 === randoIndex3 || randoIndex3 === randoIndex1){
    randoIndex1 = getRandomNum(stuffArr.length);
    randoIndex2 = getRandomNum(stuffArr.length);
    randoIndex3 = getRandomNum(stuffArr.length);
  }

  var imgElement1 = document.createElement('img')
  var imgElement2 = document.createElement('img')
  var imgElement3 = document.createElement('img')

  imgElement1.setAttribute('src', choseImg1.filePath);
  imgElement1.setAttribute('alt', imgElement1.alt);
  parentElement1.appendChild(imgElement1);

  imgElement2.setAttribute('src', choseImg2.filePath);
  imgElement2.setAttribute('alt', imgElement2.alt);
  parentElement2.appendChild(imgElement2);

  imgElement3.setAttribute('src', choseImg3.filePath);
  imgElement3.setAttribute('alt', imgElement3.alt);
  parentElement3.appendChild(imgElement3);


}

function handleClick(event) {
  var alt = event.target.alt;

  for (var i = 0; i < parentArr.length; i++){
    var alt = event.target.alt;
    parentArr[i].innerHTML = '';
  }
  console.log('event target alt', event.target.alt);
  randoPics();
}

parentSection.addEventListener('click', handleClick);
randoPics();