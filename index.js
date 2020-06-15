const IOHandler = require("./IOHandler");

class Main {
  constructor(time) {
    this.iohandler = new IOHandler(time);
  }

  init() {
    this.iohandler.init();
  }
}

const main = new Main(2500);

main.init();
