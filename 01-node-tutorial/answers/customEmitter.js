const EventEmitter = require('events');

const emitter = new EventEmitter();

// First try - Triggering events with a timer
setInterval(() => {
  emitter.emit("timer", "Hi there");
}, 2000);

emitter.on("timer", (msg) => console.log(`Timer event received: ${msg}`));

// Second try - Waiting for an event with async function
const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on("happens", (msg) => resolve(msg));
  });
}

const doWait = async () => {
  const msg = await waitForEvent();
  console.log("There is an event here:", msg);
}

doWait();
emitter.emit("happens", "Whatsup World!!");