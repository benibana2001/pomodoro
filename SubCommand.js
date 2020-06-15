const Command = require('./Command')

module.exports = function SubCommand (value) {
  return new Command(sub, value);
};

function sub(x, y) {
  return x - y;
}