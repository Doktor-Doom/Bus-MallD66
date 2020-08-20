'use strict'

// var randomNum
var parentSection = document.getElementById('rando');

var parentElement1 = document.getElementById('stuff1');
var parentElement2 = document.getElementById('stuff2');
var parentElement3 = document.getElementById('stuff3');

var parentArr = [parentElement1, parentElement2, parentElement3];

var stuffArr = [];

// var totalClick = 0;

// var maxClick = 25;



class Stuff {
  constructor(filePath, alt, name) {

    this.filePath = filePath;
    this.alt = alt;
    this.name = name;
    this.clicks = 0;
    this.shown = 0;


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
new Stuff('img/cthulhu.jpg', 'cthulu', 'cthulu');
new Stuff('img/dog-duck.jpg', 'dog-duck', 'dog-duck');
new Stuff('img/dragon.jpg', 'dragon', 'dragon');
new Stuff('img/pen.jpg', 'pen', 'pen');
new Stuff('img/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new Stuff('img/scissors.jpg', 'scissors', 'scissors');
new Stuff('img/shark.jpg', 'shark', 'shark');
new Stuff('img/sweep.png', 'sweep', 'sweep');
new Stuff('img/tauntaun.jpg', 'tauntaun', 'tauntaun');
new Stuff('img/unicorn.jpg', 'unicorn', 'unicorn');
new Stuff('img/usb.gif', 'usb', 'usb');
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

Stuff.nameData = [];
Stuff.voteData = [];

var grabChartData = function () {
  for (var i = 0; i < stuffArr.length; i++){
    Stuff.nameData.push(stuffArr[i].name);
    Stuff.voteData.push(stuffArr[i].votes);
  }
};

var grabChart = function (){
  grabChartData();
  var ctx = document.getElementById('myChart').getContext('2d');
  // var myChart = new Chart(ctx, {
  //   type: 'bar',
    data: {
      labels: Stuff.nameData,
      datasets: [{
        label: 'Popularity',
        data: Stuff.voteData,
        backgroundColor: [
          'rgba(54, 122, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(55, 99, 132, 0.2)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 19, 64, 1)',
          'rgba(25, 119, 164, 0.2)',
          'rgba(2, 149, 132, 1)',
          'rgba(54, 162, 35, 1)',
          'rgba(255, 126, 186, 1)',
          'rgba(75, 192, 92, 1)',
          'rgba(13, 102, 255, 1)',
          'rgba(254, 162, 235, 0.2)',
          'rgba(54, 162, 25, 1)',
          'rgba(255, 120, 86, 0.2)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 92, 0.2)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 5
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
//   });
// };

// function handleClick(event) {
//   var alt = event.target.alt;

//   for (var i = 0; i < parentArr.length; i++){
//     var alt = event.target.alt;
//     parentArr[i].innerHTML = ''; 
//   }
//   console.log('event target alt', event.target.alt);
//   randoPics();
// }

parentSection.addEventListener('click', handleClick);
randoPics();

