module.exports = class Counter {
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

  execute(command) {
    this.time = command.execute(this.time, command.value);
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
};
