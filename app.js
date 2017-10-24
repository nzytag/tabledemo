'use strict';

var table = document.getElementById('table_content');
var data = [];
var cars = [];

// function Car(make, model, year, mileage) {
//   this.make = make;
//   this.make = model;
//   this.make = year;
//   this.mileage = mileage;
// }
//
// var toyota = new Car('toyota', 'corolla', 1998, 32300);
// var honda = new Car('honda', 'accord', 2000, 20000);
// var ford = new Car('ford', 'escort', 2999, 20000);
//
// cars.push(toyota);
// cars.push(honda);
// cars.push(ford);




var cars = [{
  make: 'honda',
  model: 'accord',
  year: 2011,
  mileage: 87000
},
{
  make: 'toyota',
  model: 'corolla',
  year: 1999,
  mileage: 21300
},
{
  make: 'ford',
  model: 'escort',
  year: 1993,
  mileage: 98000
}];

for (var i = 0; i < cars.length; i++) {
  data.push(
    '<td>' + cars[i].make + '</td>' +
    '<td>' + cars[i].model + '</td>' +
    '<td>' + cars[i].year + '</td>' +
    '<td>' + cars[i].mileage + '</td>'
  );
}
console.log(data);
var newRow;
for (var j = 0; j < data.length; j++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = data[j];
  table.appendChild(newRow);
}


















//null
