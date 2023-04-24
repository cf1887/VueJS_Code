/** Normale Schreibweise */
// const square = function (a) {
//   return a * a;
// };

/** Arrow-Schreibweise */
// const square = (a) => {
//   return a * a;
// };

/** Schmale-Arrow-Schreibweise */
// const square = (a) => a * a;

// console.log(square(5));

// Auto-Objekt
const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  // // Non-Arrow-Function (this === dieses Objekt)
  // fullname: function () {
  //   console.log(this);
  //   return `${this.manufacturer} ${this.model}`;
  // },
  // Arrow-Funktion (this === undefined)
  // Grund: In einer Arrow-Funktion bindet sich das this nicht an das (außen) aufrufende Objekt 
  fullnameWithArrow: () => {
    console.log(this);
    return `${this.manufacturer} ${this.model}`;
  }
}

// console.log(car.fullname());
console.log(car.fullnameWithArrow());