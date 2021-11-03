/*
1.Replicate code from slide 11, create instances of car and truck. Try to call
different methods for both, investigate output using console.log().
2.Add static method to one class, try to call it and investigate output.
3.Call method of father’s class.
4.Override method of father’s class.
5.Move classes to separate files and import them into the app using import/export.
*/

export default class Vehicle {
  constructor(carModel, carYear, maxSpeed) {
    this.model = carModel;
    this.year = carYear;
    this.maxSpeed = maxSpeed;
  }

  displayInfo() {
    console.log(`Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`);
  }

  static driveOnMaxSpeed(maxSpeed) {
    return "I'm driving on speed " + maxSpeed;
  }
}
