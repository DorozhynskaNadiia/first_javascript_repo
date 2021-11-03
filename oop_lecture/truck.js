import Vehicle from "./vehicle.js";

class Truck extends Vehicle {
  constructor(carModel, carYear, maxSpeed) {
    super(carModel, carYear, maxSpeed);
    this.type = "truck";
  }

  transportContainer() {
    console.log(`I am starting transporting heavy container`);
  }
}

let renaultTruck = new Truck("renault", 2019, 120);
renaultTruck.transportContainer();

new Truck("mercedes", 2018, 160);
