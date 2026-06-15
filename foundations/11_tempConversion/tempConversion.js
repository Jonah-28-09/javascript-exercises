const convertToCelsius = function(degf) {
  let cel = ((degf - 32) / 1.8) * 10;
  let celreal = (Math.round(cel)) / 10;
  return celreal
};

const convertToFahrenheit = function(degc) {
  let fah = (degc * 1.8 + 32) * 10
  let fahreal = (Math.round(fah)) / 10
  return fahreal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
