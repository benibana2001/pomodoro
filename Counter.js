module.exports = class Counter {
  constructor(time) {
    this.time = time;
    this.state = 0;
    this.logger = logger();
  }

  count() {
    const countdown = () => {
      this.time -= 1;
      this.logger.add(this.time);
      this.logger.show();

      if (this.time <= 0) {
        this.logger.add("break");
        this.end();
      }
    };

    setTimeout(() => {
      switch (this.state) {
        case 0:
        case 1:
          countdown();
          break;
        case -1:
          break;
        default:
          break;
      }

      this.count();
    }, 1000);
  }

  end() {
    console.log("end");

    this.state = 1;
    this.time = 300;
  }

  execute(command) {
    this.time = command.execute(this.time, command.value);
  }

  setState(stateCommand) {
    this.state = stateCommand.execute(stateCommand.value);
  }

  start() {
    this.count();
  }
};

const logger = function () {
  let log = "";

  return {
    add: (msg) => {
      log = msg;
    },
    show: () => {
      console.clear();
      console.log(log);
      log = "";
    },
  };
};
