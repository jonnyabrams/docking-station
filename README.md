# Docking Station (JavaScript)

When I finished the Makers Academy boot camp in May 2022 I decided to consolidate what I'd learned about TDD by going back over some of the Ruby exercises they'd set us along the way, this time doing them in JavaScript.

The first of these was the 'Boris Bikes' (I prefer 'docking station') challenge, which works as follows in the Node REPL:

```
➜  src git:(main) ✗ node
Welcome to Node.js v17.8.0.
Type ".help" for more information.
> .load script.js
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


undefined
> station
DockingStation {
  bikes: [
    Bike { isWorking: true },
    Bike { isWorking: false },
    Bike { isWorking: true },
    Bike { isWorking: false },
    Bike { isWorking: true }
  ],
  capacity: 5,
  van: Van { trunk: [], garage: Garage { storage: [] } }
}
> station.releaseBike()
Bike { isWorking: true }
> station
DockingStation {
  bikes: [
    Bike { isWorking: true },
    <1 empty item>,
    Bike { isWorking: true },
    <1 empty item>
  ],
  capacity: 5,
  van: Van { trunk: [ [Bike], [Bike] ], garage: Garage { storage: [] } }
}
> station.van.driveToGarage()
undefined
> station.van
Van { trunk: [], garage: Garage { storage: [ [Bike], [Bike] ] } }
> station.van.garage.fixBikes()
undefined
> station.van.garage.storage
[ Bike { isWorking: true }, Bike { isWorking: true } ]
> station.van.collectFromGarage()
undefined
> station.van
Van {
  trunk: [ Bike { isWorking: true }, Bike { isWorking: true } ],
  garage: Garage { storage: [] }
}
> station.returnFixedBikes()
undefined
> station
DockingStation {
  bikes: [
    Bike { isWorking: true },
    <1 empty item>,
    Bike { isWorking: true },
    <1 empty item>,
    Bike { isWorking: true },
    Bike { isWorking: true }
  ],
  capacity: 5,
  van: Van { trunk: [], garage: Garage { storage: [] } }
}
```

In this example, I took the following steps:

* Open the Node REPL
* Run a script that creates a new docking station and five bikes
* Report two of them as broken then dock them all
* Ask the station to release a bike, which prompts the broken ones to be loaded in the van
* Drive the van to the garage where they're unloaded and fixed
* Collect the fixed bikes from the garage and return them to the docking station

Edit: I forgot to demonstrate the capacity of my docking stations, which is 5 by default but can be overridden:

```
➜  src git:(main) ✗ node
Welcome to Node.js v17.8.0.
Type ".help" for more information.
> .load script.js
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


undefined
> bike6 = new Bike
Bike { isWorking: true }
> station.dock(bike6)
Uncaught Error: Docking station full
    at DockingStation.dock (/Users/jonnyabrams/Projects/docking-station/src/dockingStation.js:12:30)
> station2 = new DockingStation(20)
DockingStation {
  bikes: [],
  capacity: 20,
  van: Van { trunk: [], garage: Garage { storage: [] } }
}
> 
```