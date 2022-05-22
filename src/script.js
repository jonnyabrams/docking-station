const Bike = require('./bike');
const DockingStation = require('./dockingStation');

station = new DockingStation;
bike1 = new Bike;
bike2 = new Bike;
bike3 = new Bike;
bike4 = new Bike;
bike5 = new Bike;
bike2.reportBroken();
bike4.reportBroken();
station.dock(bike1);
station.dock(bike2);
station.dock(bike3);
station.dock(bike4);
station.dock(bike5);

