import Vehicle from "./vehicle.js";

class Car extends Vehicle {
  constructor(carModel, carYear, maxSpeed) {
    super(carModel, carYear, maxSpeed);
    this.type = "car";
  }

  transportPeople() {
    console.log(`I am starting transporting passengers`);
  }

  displayInfo() {
    console.log(`Name: ${this.model};
    Type: ${this.type};`);
  }
}

let fiatCar = new Car("fiat", 2020, 140);

fiatCar.transportPeople();
fiatCar.displayInfo();

console.log(Vehicle.driveOnMaxSpeed(140));
