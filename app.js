"use strict";

// Global scope stuff

let hours = ["6am", "7am", '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let collection = [];
let totalsByHour = [];
let grandTotals = [];
let allTotal = 0;
let table = document.getElementById('print');
let foot = document.createElement('tfoot');

// Constructor

function Store(location, minCustomers, maxCustomers, avgCookie) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookie = avgCookie;
  this.totalCustomers = [];
  this.grandTotal = 0;

  collection.push(this);
}

// Prototypes

Store.prototype.randomCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
}

Store.prototype.genCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookie = this.avgCookie * this.randomCustomersPerHour();
    let cookies = Math.round(cookie);
    this.totalCustomers.push(cookies);
    this.grandTotal += cookies;
  };
  grandTotals.push(this.grandTotal);

}




Store.prototype.display = function () {
  this.genCookies();
  let row = document.createElement('tr');
  table.appendChild(row);

  let heading = document.createElement('th');
  row.appendChild(heading);
  heading.textContent = this.location;

  for (let i = 0; i < hours.length; i++) {
    let entry = document.createElement('td');
    entry.textContent = this.totalCustomers[i];
    row.appendChild(entry);
  }

  let locationTotal = document.createElement('td');
  locationTotal.textContent = this.grandTotal;
  row.appendChild(locationTotal);

}


// function genFooter(){
//   let total = 0;
//   for (let i = 0; i < hours.length; i++){
//     let salesAtHour = 0;
//     for (let j = 0; j < collection.length; j++){

//       let currStore = collection[j];
//       console.log(currStore.totalCustomers[i]);
//     }
//   }
// }


function genFooter() {
  allTotal = 0;
  totalsByHour = [];
  for (let hour in hours) {
    let salesAtHour = 0;
    for (let stores in collection) {
      let currStore = collection[stores];
      let currSale = currStore.totalCustomers[parseInt(hour)];
      salesAtHour += currSale;
      // total += currSale;
      console.log(currStore.totalCustomers);
      console.log(hours);

    }
    totalsByHour.push(salesAtHour);
  }
  for (let i = 0; i < collection.length; i++) {
    allTotal += collection[i].grandTotal;
    // total = total + the collection i + grandTotal
  }
}


// Form

let cookieForm = document.getElementById('cookie-form');

cookieForm.addEventListener('submit', function (event) {
  event.preventDefault();

  console.log(event.target.location.value);
  console.log(event.target.minCustomersPerHour.value);
  console.log(event.target.maxCustomersPerHour.value);
  console.log(event.target.avgCookiesPerCustomer.value);


  new Store(
    event.target.location.value,
    parseInt(event.target.minCustomersPerHour.value),
    parseInt(event.target.maxCustomersPerHour.value),
    parseInt(event.target.avgCookiesPerCustomer.value)
  );

  cookieForm.reset();
  // event.target.location.value = "";
  // event.target.minCustomersPerHour.value = "";
  // event.target.maxCustomersPerHour.value = "";
  // event.target.avgCookiesPerCustomer.value = "";

  table.innerHTML = '';
  foot.innerHTML = '';
  display();
  collect();
  genFooter();
  displayFoot();



  // let newLocation = event.target.location.value;
  // let minCustomers = parseInt(event.target.minCustomers.value);
  // let maxCustomers = parseInt(event.target.maxCustomers.value);
  // let avgCookie = parseInt(event.target.avgCookie.value);

  // new Store(newLocation, minCustomers, maxCustomers, avgCookie);

  // console.log("form submitted");
});

function collect() {
  for (let store of collection) {
    store.display();
  }
}







// All Stores
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);






// Display Table

function display() {
  let header = document.createElement('thead');
  table.appendChild(header);
  let row = document.createElement('tr');
  header.appendChild(row);
  let city = document.createElement('td');
  row.appendChild(city);



  for (let i = 0; i < hours.length; i++) {
    let time = document.createElement('th');
    time.textContent = hours[i];
    row.appendChild(time);

  }

  let totalLabel = document.createElement('th');
  totalLabel.textContent = 'Total';
  row.appendChild(totalLabel);

}



function displayFoot() {
  table.appendChild(foot);
  // make the first cell of the footer
  let label = document.createElement('td');
  label.textContent = 'Hourly Total';
  foot.appendChild(label);
  // make the cells for the totals for hours
  for (let i = 0; i < hours.length; i++) {
    let totalHours = document.createElement('td');
    totalHours.textContent = totalsByHour[i];
    foot.appendChild(totalHours);
  }

  let allTotalEl = document.createElement('td');
  allTotalEl.textContent = allTotal;
  foot.appendChild(allTotalEl);
  // this makes the last cell with the all total at the end of the foot
}



// // Display Footer

// function displayFooter() {
//     let footer = document.getElementById('print');

//     // define row element
//     let row = document.createElement('tr');
//     let head = document.createElement('th');
//     head.textContent = 'Total Sales';
//     row.appendChild(head);
//     footer.appendChild(row);

//     // Outer Loop
//     for (let hour in hours) {
//         let salesAtHour = 0;
//         let cell = document.createElement('td');

//         // Inner Loop
//         for (let collect in collection) {
//             let currentCollect = collection[collect];
//             let numCookies = currentCollect.grandTotal[hour];
//             salesAtHour += numCookies;
//           }
//           cell.textContent = salesAtHour;
//           row.appendChild(cell);
//           console.log(`sales at ${hours[hour]} : ${totalsByHour}`);

//         }
//         // now add grandTotal
//         let cell = document.createElement('td');
//         let totals = 0;

//         for (let collect of collection) {
//             totals += collect.grandTotal;
//           }
//           cell.textContent = totals;
//           row.appendChild(cell);
//         }

display();
collect();
genFooter();
displayFoot();