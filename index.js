/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

Vehicle.prototype.toString = function () {
  return this.brand + " " + this.model + " " + this.year;
};

Vehicle.prototype.valueOf = function () {
  return this.mileage;
};

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

function Car(brand, model, year, mileage, fuelType, speed) {
  Vehicle.apply(this, [brand, model, year, mileage]);
  this.fuelType = fuelType;
  this.speed = speed;
}

Car.prototype.toString = function () {
  return (
    this.brand + " " + this.model + " " + this.year + " - " + this.fuelType
  );
};

Car.prototype.accelerate = function (amount) {
  this.speed += amount;
  console.log(
    "Автомобіль " +
      this.brand +
      " " +
      this.model +
      " прискорився до швидкості " +
      this.speed +
      " км/год"
  );
};

Car.prototype.brake = function (amount) {
  this.speed -= amount;
  console.log(
    "Автомобіль " +
      this.brand +
      " " +
      this.model +
      " зменшив до швидкості " +
      this.speed +
      " км/год"
  );
};

/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */

let car = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);

console.log(car.toString());
console.log(car.valueOf());

car.accelerate(50);

car.brake(20);

/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  Vehicle.call(this, brand, model, year, mileage);
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
}

Truck.prototype.specific = function (load) {
  if (load > this.towingCapacity) {
    console.log("Навантаження занадто важке для буксирування");
  } else {
    console.log("Тягнення навантаження...");
  }
};

/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */

let myTruck = new Truck(
  "Toyota",
  "Tundra",
  2019,
  20000,
  "Red",
  "V8",
  10000,
  "Gasoline",
  "Automatic",
  4,
  5600
);

myTruck.specific(8000);

myTruck.specific(12000);

Car.prototype.drive = function (kilometers) {
  this.kilometers += kilometers;
  console.log(
    "Подорожуємо " +
      kilometers +
      " кілометрів у " +
      this.brand +
      " " +
      this.model
  );
};

let driveCar = Car.prototype.drive.bind(car);
driveCar(100);

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  if (!(this instanceof ElectricCar)) {
    console.error("Конструктор має бути викликаний з 'new'");
  }

  Car.call(this, brand, model, year, mileage);
  this.batteryCapacity = batteryCapacity;
}

ElectricCar.prototype.toString = function () {
  return (
    this.brand +
    " " +
    this.model +
    " " +
    this.year +
    " - Батарея: " +
    this.batteryCapacity +
    " kWh"
  );
};

/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */

let tesla = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);

console.log(tesla.toString());
