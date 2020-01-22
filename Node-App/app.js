const EventEmmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

logger.on("event1", arg => {
  console.log("mesage is", arg);
});

logger.print("this is my message");
