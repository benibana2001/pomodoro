module.exports = class Command {
  constructor(execute, value) {
    this.execute = execute;
    this.value = value;
  }
}
