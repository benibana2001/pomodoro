const Command = require("./Command");

module.exports = function AddCommand(value) {
  return new Command(add, value);
};

function add(x, y) {
  return x + y;
}
