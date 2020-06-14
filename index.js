class IOHandler {
  constructor() {
    this.readline = require("readline");
  }

  init() {
    this.readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    process.stdin.on("keypress", (str, key) => {
      const stopKey = key.ctrl && key.name === "c";
      if (stopKey) {
        process.exit();
      } else {
          if(key === ' '){
              this.stop()
          }
        console.log(`You pressed the "${str}" key`);
        console.log();
        console.log(key);
        console.log();
      }
    });
  }

  stop() {
    console.log("stop");
  }

  start() {
    console.log("start");
  }

  restart() {
    console.log("restart");
  }
}

class Counter {
  constructor(time) {
    this.time = time;
    this.state = 0;
  }

  count() {
    setTimeout(() => {
      this.time -= 1;
      console.log(this.time);
      this.count();
    }, 1000);
  }

  stop() {
    this.state = 1;
  }

  restart() {
    this.state = 0;
    this.start();
  }

  end() {
    this.state = -1;
  }

  start() {
    switch (this.state) {
      case 0:
        this.count();
        break;
      case 1:
        break;
      case -1:
        break;
      default:
        break;
    }
  }
}

// const counter = new Counter(2500);
const iohandler = new IOHandler();

// counter.start();
iohandler.init();
process.stdin.setRawMode(true);
process.stdin.resume();
