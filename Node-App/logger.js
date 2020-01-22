const EventEmmiter = require("events");
// const emmitter = new EventEmmiter();

//It is very rare that we work with "emmitter" object directly as it does
//not listen in another file when created here. Hence we create a class
class Logger extends EventEmmiter {
  print(mssg) {
    console.log(mssg);

    this.emit("event1", { id: 1, name: "namama" });
    this.emit("event1", { messgae: "heyyey" });
  }
}

// This when exporting single function
// module.exports = log;

// This when exporting object

module.exports = Logger;
