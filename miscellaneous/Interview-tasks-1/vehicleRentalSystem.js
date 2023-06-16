class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  rentVehicle() {
    this.startDate = new Date();
    return `Rented a vehicle ${this.type}->${this.make} ${this.model}`;
  }

  returnVehicle() {
    this.endDate = new Date();
    return `Returned a vehicle ${this.type}->${this.make} ${this.model}`;
  }

  //If a person rents a vehicle and returns it the same day. Person will be charged standard one day fee
  calculateRentalFee() {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds => total miliseconds
    const diffInMs = Math.abs(this.endDate - this.startDate);
    const differenceInDays = diffInMs <= 0 ? 1 : Math.ceil(diffInMs / oneDay);

    const feePerDay =
      this.type === "truck"
        ? 100
        : this.type === "car"
        ? 50
        : this.type === "motorcycle"
        ? 150
        : null;

    return `Your fee for renting ${this.type} ${this.make} ${this.model} is ${(
      feePerDay * differenceInDays
    ).toFixed(2)}$`;
  }
}

class Truck extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.type = "truck";
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.type = "car";
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.type = "motorcycle";
  }
}

const truck1 = new Truck("Ford", "F-150", "2022");
console.log(truck1);
console.log(truck1.rentVehicle());
console.log(truck1.returnVehicle());
console.log(truck1.calculateRentalFee());

const car1 = new Car("Toyota", "Camry", "2022");
console.log(car1);
console.log(car1.rentVehicle());
console.log(car1.returnVehicle());
console.log(car1.calculateRentalFee());

const motorcycle1 = new Motorcycle("Harley Davidson", "Sportster", "2022");
console.log(motorcycle1);
console.log(motorcycle1.rentVehicle());
console.log(motorcycle1.returnVehicle());
console.log(motorcycle1.calculateRentalFee());
