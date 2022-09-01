"use strict";

// Global scope stuff

let hours = ["6am", "7am", '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let collection = [];
let totalsByHour = [];
let grantTotal = [];
let table = document.getElementById('print');

// Constructor

function Store(location,minCustomersPerHour,maxCustomersPerHour,avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.numberOfCustomers = [];
  this.numberOfCookies = [];
  this.totalCookiesSold = 0;

  collection.push(this);
  console.log(collection);
}

// Prototypes

Store.prototype.randomCustomersPerHour = function() {
  for (let i = 0; i < hours.length; i++) {
    this.numberOfCustomers.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour)
  }
};

Store.prototype.avgCookiesPerHour = function () {
  for (let i = 0; i < this.numberOfCustomers.length; i++) {
    this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgCookiesPerCustomer));
  }
};

Store.prototype.totalCookies = function () {
  for (let i = 0; i < this.numberOfCookies.length; i++) {
    this.totalCookiesSold += this.numberOfCookies[i];
  }
};


Store.prototype.display = function () {
    this.totalCookies
    let row = document.createElement('tr');
    table.appendChild(row);
    
    let heading = document.createElement('th');
    row.appendChild(heading);
    heading.textContent = this.location;

    
    for(let i = 0; i < hours.length; i++) {
      let entry = document.createElement('td');
      entry.textContent = this.numberOfCookies[i];
      row.appendChild(entry);
    }

    let locationTotal = document.createElement('td');
    locationTotal.textContent = this.totalCookiesSold;
    row.appendChild(locationTotal);

}

// Form

let cookieForm = document.getElementById('cookie-form');

cookieForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let newLocation = event.target.location.value;
  let minCustomersPerHour = parseInt(event.target.minCustomersPerHour.value);
  let maxCustomersPerHour = parseInt(event.target.maxCustomersPerHour.value);
  let avgCookiesPerCustomer = parseInt (event.target.avgCookiesPerCustomer.value);
  new Store(newLocation, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer);

  console.log("form submitted");
});








// First for loop - go over the hours column
// Once inside, creating data table
// create variable called HourTotal

// Second for loop - running over the collections array
// HourTotal += collections[j].numberOfCookies[i];
// grandTotal += hourTotal


// All Stores

let seattle = new Store("Seattle", 23, 65, 6.3)
seattle.randomCustomersPerHour();
seattle.avgCookiesPerHour();
seattle.totalCookies();
seattle.display();
console.log(seattle);

let tokyo = new Store("Tokyo", 3, 24, 1.2)
tokyo.randomCustomersPerHour();
tokyo.avgCookiesPerHour();
tokyo.totalCookies();
tokyo.display();
console.log(tokyo);

let dubai = new Store("Dubai", 11, 38, 3.7)
dubai.randomCustomersPerHour();
dubai.avgCookiesPerHour();
dubai.totalCookies();
dubai.display();
console.log(dubai);

let paris = new Store("Paris", 20, 38, 2.3)
paris.randomCustomersPerHour();
paris.avgCookiesPerHour();
paris.totalCookies();
paris.display();
console.log(paris);

let lima = new Store("Lima", 2, 16, 4.6)
lima.randomCustomersPerHour();
lima.avgCookiesPerHour();
lima.totalCookies();
lima.display();
console.log(lima);



display();
displayFooter();

// Display Table

function display() {
  let header = document.createElement('thead');
  table.appendChild(header);
  let row = document.createElement('tr');
  header.appendChild(row);
  let city = document.createElement('td');
  row.appendChild(city);



  for(let i = 0; i < hours.length; i++) {
    let time = document.createElement('th');
    time.textContent = hours[i];
    row.appendChild(time);

  }

  let totalLabel = document.createElement('th');
  totalLabel.textContent = 'Total';
  row.appendChild(totalLabel);

}

// Display Footer

function displayFooter() {
  let footer = document.getElementById('print');

  // define row element
  let row = document.createElement('tr');
  let head = document.createElement('th');
  head.textContent = 'Total Sales';
  row.appendChild(head);
  footer.appendChild(row);

  // Outer Loop
  for (let hour in hours) {
    let salesAtHour = 0;
    let cell = document.createElement('td');

    // Inner Loop
    for (let collect in collection) {
      let currentCollect = collection[collect];
      let numCookies = currentCollect.numberOfCookies[hour];
      salesAtHour += numCookies;
    }
    cell.textContent = salesAtHour;
    row.appendChild(cell);
    console.log(`sales at ${hours[hour]} : ${totalsByHour}`);

  }
  // now add grandTotal
  let cell = document.createElement('td');
  let totals = 0;
  
  for (let collect of collection) {
    totals += collect.totalCookiesSold;
  }
  cell.textContent = totals;
  row.appendChild(cell);

}