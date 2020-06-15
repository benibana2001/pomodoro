class StateCommand {
  constructor(execute, value) {
    this.execute= execute;
    this.value = value;
  }
}

module.exports = function SetState(value) {
  return new StateCommand(set, value);
};

function set(x) {
    return x
}
