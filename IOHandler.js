const Counter = require("./Counter");
const AddCommand = require("./AddCommand");
const SubCommand = require("./SubCommand");
const SetState = require("./SetState");

module.exports = class IOHandler {
  constructor(time) {
    this.readline = require("readline");
    this.counter = new Counter(time);

    this.stopping = false;
  }

  init() {
    this.readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    process.stdin.on("keypress", (str, key) => {
      const stopKey = key.ctrl && key.name === "c";

      if (stopKey) {
        process.exit();
      } else {
        switch (key.name) {
          case "up":
            // console.log("+60");
            this.counter.execute(new AddCommand(60));
            break;
          case "down":
            // console.log("-60");
            this.counter.execute(new SubCommand(60));
            break;
        }

        switch (str) {
          case " ":
            // console.log(this.stopping);
            if (this.stopping) {
              this.counter.setState(new SetState(0));
            } else {
              this.counter.setState(new SetState(-1));
            }

            this.stopping = !this.stopping;
        }
      }
    });

    this.counter.start();
  }
};
