module.exports = class Counter {
  constructor(time) {
    this.time = time;
    this.state = 0;
  }

  count() {
    const countdown = () => {
      this.time -= 1;
      console.log(this.time);
    };

    setTimeout(() => {
      switch (this.state) {
        case 0:
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
