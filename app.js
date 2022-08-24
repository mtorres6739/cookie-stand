"use strict";

// Global scope stuff

let hours = ["6am", "7am", '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let collection = [];
let totalsByHour = [];
let table = document.getElementById('print');

// Constructor

function Store(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  
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






// Store.prototype.calcDisplayData = function () {
//   for (let i = 0; i < hours.length; i++) {
//     display[i] = `${hours[i]}: ${this.numberOfCookies[i]} cookies`
//   }
// };

Store.prototype.display = function () {
  // this.totalCookies
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

// Store.prototype.footer = function () {
//   for (let i = 0; i < hours.length; i++) {
//     let hoursTotal = document.createElement('tr');
//     hoursTotal.textContent = this.numberOfCookies[i];
//     row.appendChild(hoursTotal);
//     for(let j = 0; j < collection.length; j++){
//       hoursTotal += collection[j].numberOfCookies[i];
//       totalsByHour += hoursTotal;
//     }
//   };

// }


// First for loop - go over the hours column
// Once inside, creating data table
// create variable called HourTotal

// Second for loop - running over the collections array
// HourTotal += collections[j].numberOfCookies[i];
// grandTotal += hourTotal




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

// NOT Prototype

display();
displayFooter();

// Table header row

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

  // function displayFooter() {
  //   let footer = document.createElement('tfoot');
  //   table.appendChild(footer);
  //   let row = document.createElement('tr');
  //   footer.appendChild(row);
  //   let footerTotal = document.createElement('td');
  //   row.appendChild(footerTotal);
  // }

  // let footer = document.createElement('tfoot');
  // table.appendChild(footer);
  // row = document.createElement('tr');
  // footer.appendChild(row);
  // allHoursTotal = document.createElement('td');
  // row.appendChild(allHoursTotal);

}

// for(let i = 0; i < hours.length; i++) {
//   let hoursTotal = Store.numberOfCookies[i];
//   console.log(hoursTotal);
// }

// All stores


// console.log(collection);
// for (let store of collection){
//   store.display();

// }









































// let listEl = document.getElementById('firstSet');
// for (let i in objectStore1.numberOfCookies) {
//   let newListEl = document.createElement('li');
//   newListEl.textContent = ` ${hours[i]}: ${objectStore1.numberOfCookies[i]} cookies`;
//   console.log(objectStore1.numberOfCookies);
//   listEl.appendChild(newListEl);
// }

// let printTotal = document.getElementById('grandTotal');
// let newPrintTotal = document.createElement('p');
// newPrintTotal.textContent = `Total: ${objectStore1.totalCookiesSold} cookies`;
// printTotal.appendChild(newPrintTotal);


// let printTitle = document.getElementById('printTitle');
// let newPrintTitle = document.createElement('p');
// newPrintTitle.textContent = `${objectStore1.location}`;
// printTitle.appendChild(newPrintTitle);



// console.log(seattleStore);

// function runDisplay (data) {
//   display.push(new Store(data.location, data.minCustomersPerHour, data.maxCustomersPerHour, data.avgCookiesPerCustomer, data.numberOfCustomers, data.numberOfCookies, data.totalCookiesSold));
// }

// runDisplay({
//   location: 'Seattle',
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   avgCookiesPerCustomer: 6.3,
//   numberOfCustomers: [],
//   numberOfCookies: [],
//   totalCookiesSold: 0,
// })

// console.log(display);

// object store 1 - Seattle

// let objectStore1 = {
//   location: 'Seattle',
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   avgCookiesPerCustomer: 6.3,
//   numberOfCustomers: [],
//   numberOfCookies: [],
//   totalCookiesSold: 0,
//   randomCustomersPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.numberOfCustomers.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour +1)) + this.minCustomersPerHour)
//     }
//   },
//   avgCookiesPerHour: function () {
//     for (let i = 0; i < this.numberOfCustomers.length; i++) {
//       this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgCookiesPerCustomer));
//     }
//   },
//   totalCookies: function () {
//     for (let i = 0; i < this.numberOfCookies.length; i++) {
//       this.totalCookiesSold += this.numberOfCookies[i];
//     }
//   },
//   calcDisplayData: function () {
//     for (let i = 0; i < hours.length; i++) {
//       display[i] = `${hours[i]}: ${this.numberOfCookies[i]} cookies`
//     }
//   }

// }

// Store.randomCustomersPerHour();
// console.log(Store.numberOfCustomers);

// Store.avgCookiesPerHour();
// console.log(Store.numberOfCookies);

// Store.totalCookies();
// console.log(Store.totalCookiesSold);

// Store.calcDisplayData();
// console.log(display);





// let listEl = document.getElementById('firstSet');
// for (let i in objectStore1.numberOfCookies) {
//   let newListEl = document.createElement('li');
//   newListEl.textContent = ` ${hours[i]}: ${objectStore1.numberOfCookies[i]} cookies`;
//   console.log(objectStore1.numberOfCookies);
//   listEl.appendChild(newListEl);
// }

// let printTotal = document.getElementById('grandTotal');
// let newPrintTotal = document.createElement('p');
// newPrintTotal.textContent = `Total: ${objectStore1.totalCookiesSold} cookies`;
// printTotal.appendChild(newPrintTotal);


// let printTitle = document.getElementById('printTitle');
// let newPrintTitle = document.createElement('p');
// newPrintTitle.textContent = `${objectStore1.location}`;
// printTitle.appendChild(newPrintTitle);



// object store 2 - Tokyo

// let objectStore2 = {
//   location: 'Tokyo',
//   minCustomersPerHour: 3,
//   maxCustomersPerHour: 24,
//   avgCookiesPerCustomer: 1.2,
//   numberOfCustomers: [],
//   numberOfCookies: [],
//   totalCookiesSold: 0,
//   randomCustomersPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.numberOfCustomers.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour)
//     }
//   },
//   avgCookiesPerHour: function () {
//     for (let i = 0; i < this.numberOfCustomers.length; i++) {
//       this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgCookiesPerCustomer));
//     }
//   },
//   totalCookies: function () {
//     for (let i = 0; i < this.numberOfCookies.length; i++) {
//       this.totalCookiesSold += this.numberOfCookies[i];
//     }
//   },
//   calcDisplayData: function () {
//     for (let i = 0; i < hours.length; i++) {
//       display[i] = `${hours[i]}: ${this.numberOfCookies[i]} cookies`
//     }
//   }

// }

// objectStore2.randomCustomersPerHour();
// console.log(objectStore2.numberOfCustomers);

// objectStore2.avgCookiesPerHour();
// console.log(objectStore2.numberOfCookies);

// objectStore2.totalCookies();
// console.log(objectStore2.totalCookiesSold);

// objectStore2.calcDisplayData();
// console.log(display);





// let listEl2 = document.getElementById('firstSet2');
// for (let i in objectStore2.numberOfCookies) {
//   let newListEl2 = document.createElement('li');
//   newListEl2.textContent = ` ${hours[i]}: ${objectStore2.numberOfCookies[i]} cookies`;
//   console.log(objectStore2.numberOfCookies);
//   listEl2.appendChild(newListEl2);
// }

// let printTotal2 = document.getElementById('grandTotal2');
// let newPrintTotal2 = document.createElement('p');
// newPrintTotal2.textContent = `Total: ${objectStore2.totalCookiesSold} cookies`;
// printTotal2.appendChild(newPrintTotal2);


// let printTitle2 = document.getElementById('printTitle2');
// let newPrintTitle2 = document.createElement('p');
// newPrintTitle2.textContent = `${objectStore2.location}`;
// printTitle2.appendChild(newPrintTitle2);




// // object store 3 - Dubai

// let objectStore3 = {
//   location: 'Dubai',
//   minCustomersPerHour: 11,
//   maxCustomersPerHour: 38,
//   avgCookiesPerCustomer: 3.7,
//   numberOfCustomers: [],
//   numberOfCookies: [],
//   totalCookiesSold: 0,
//   randomCustomersPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.numberOfCustomers.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour)
//     }
//   },
//   avgCookiesPerHour: function () {
//     for (let i = 0; i < this.numberOfCustomers.length; i++) {
//       this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgCookiesPerCustomer));
//     }
//   },
//   totalCookies: function () {
//     for (let i = 0; i < this.numberOfCookies.length; i++) {
//       this.totalCookiesSold += this.numberOfCookies[i];
//     }
//   },
//   calcDisplayData: function () {
//     for (let i = 0; i < hours.length; i++) {
//       display[i] = `${hours[i]}: ${this.numberOfCookies[i]} cookies`
//     }
//   }

// }

// objectStore3.randomCustomersPerHour();
// console.log(objectStore3.numberOfCustomers);

// objectStore3.avgCookiesPerHour();
// console.log(objectStore3.numberOfCookies);

// objectStore3.totalCookies();
// console.log(objectStore3.totalCookiesSold);

// objectStore3.calcDisplayData();
// console.log(display);





// let listEl3 = document.getElementById('firstSet3');
// for (let i in objectStore3.numberOfCookies) {
//   let newListEl3 = document.createElement('li');
//   newListEl3.textContent = ` ${hours[i]}: ${objectStore3.numberOfCookies[i]} cookies`;
//   console.log(objectStore3.numberOfCookies);
//   listEl3.appendChild(newListEl3);
// }

// let printTotal3 = document.getElementById('grandTotal3');
// let newPrintTotal3 = document.createElement('p');
// newPrintTotal3.textContent = `Total: ${objectStore3.totalCookiesSold} cookies`;
// printTotal3.appendChild(newPrintTotal3);


// let printTitle3 = document.getElementById('printTitle3');
// let newPrintTitle3 = document.createElement('p');
// newPrintTitle3.textContent = `${objectStore3.location}`;
// printTitle3.appendChild(newPrintTitle3);



// // object store 4 - Paris

// let objectStore4 = {
//   location: 'Paris',
//   minCustomersPerHour: 20,
//   maxCustomersPerHour: 38,
//   avgCookiesPerCustomer: 2.3,
//   numberOfCustomers: [],
//   numberOfCookies: [],
//   totalCookiesSold: 0,
//   randomCustomersPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.numberOfCustomers.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour)
//     }
//   },
//   avgCookiesPerHour: function () {
//     for (let i = 0; i < this.numberOfCustomers.length; i++) {
//       this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgCookiesPerCustomer));
//     }
//   },
//   totalCookies: function () {
//     for (let i = 0; i < this.numberOfCookies.length; i++) {
//       this.totalCookiesSold += this.numberOfCookies[i];
//     }
//   },
//   calcDisplayData: function () {
//     for (let i = 0; i < hours.length; i++) {
//       display[i] = `${hours[i]}: ${this.numberOfCookies[i]} cookies`
//     }
//   }

// }

// objectStore4.randomCustomersPerHour();
// console.log(objectStore4.numberOfCustomers);

// objectStore4.avgCookiesPerHour();
// console.log(objectStore4.numberOfCookies);

// objectStore4.totalCookies();
// console.log(objectStore4.totalCookiesSold);

// objectStore4.calcDisplayData();
// console.log(display);





// let listEl4 = document.getElementById('firstSet4');
// for (let i in objectStore4.numberOfCookies) {
//   let newListEl4 = document.createElement('li');
//   newListEl4.textContent = ` ${hours[i]}: ${objectStore4.numberOfCookies[i]} cookies`;
//   console.log(objectStore4.numberOfCookies);
//   listEl4.appendChild(newListEl4);
// }

// let printTotal4 = document.getElementById('grandTotal4');
// let newPrintTotal4 = document.createElement('p');
// newPrintTotal4.textContent = `Total: ${objectStore4.totalCookiesSold} cookies`;
// printTotal4.appendChild(newPrintTotal4);


// let printTitle4 = document.getElementById('printTitle4');
// let newPrintTitle4 = document.createElement('p');
// newPrintTitle4.textContent = `${objectStore4.location}`;
// printTitle4.appendChild(newPrintTitle4);



// // object store 5 - Lima

// let objectStore5 = {
//   location: 'Lima',
//   minCustomersPerHour: 2,
//   maxCustomersPerHour: 16,
//   avgCookiesPerCustomer: 4.6,
//   numberOfCustomers: [],-
//   numberOfCookies: [],
//   totalCookiesSold: 0,
//   randomCustomersPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.numberOfCustomers.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour)
//     }
//   },
//   avgCookiesPerHour: function () {
//     for (let i = 0; i < this.numberOfCustomers.length; i++) {
//       this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgCookiesPerCustomer));
//     }
//   },
//   totalCookies: function () {
//     for (let i = 0; i < this.numberOfCookies.length; i++) {
//       this.totalCookiesSold += this.numberOfCookies[i];
//     }
//   },
//   calcDisplayData: function () {
//     for (let i = 0; i < hours.length; i++) {
//       display[i] = `${hours[i]}: ${this.numberOfCookies[i]} cookies`
//     }
//   }

// }

// objectStore5.randomCustomersPerHour();
// console.log(objectStore5.numberOfCustomers);

// objectStore5.avgCookiesPerHour();
// console.log(objectStore5.numberOfCookies);

// objectStore5.totalCookies();
// console.log(objectStore5.totalCookiesSold);

// objectStore5.calcDisplayData();
// console.log(display);





// let listEl5 = document.getElementById('firstSet5');
// for (let i in objectStore5.numberOfCookies) {
//   let newListEl5 = document.createElement('li');
//   newListEl5.textContent = ` ${hours[i]}: ${objectStore5.numberOfCookies[i]} cookies`;
//   console.log(objectStore5.numberOfCookies);
//   listEl5.appendChild(newListEl5);
// }

// let printTotal5 = document.getElementById('grandTotal5');
// let newPrintTotal5 = document.createElement('p');
// newPrintTotal5.textContent = `Total: ${objectStore5.totalCookiesSold} cookies`;
// printTotal5.appendChild(newPrintTotal5);


// let printTitle5 = document.getElementById('printTitle5');
// let newPrintTitle5 = document.createElement('p');
// newPrintTitle5.textContent = `${objectStore5.location}`;
// printTitle5.appendChild(newPrintTitle5);