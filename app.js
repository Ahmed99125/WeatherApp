const data = new Storage;
const locationData = data.getLocationData();
const weather = new Weather(locationData);
const ui = new UI;


document.addEventListener('DOMContentLoaded', getWeather());

document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;

  data.setLocationData(city);

  weather.changeLocation(city);

  getWeather();

  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
  .then(res => {
    ui.showRes(res);
  })
  .catch(err => console.log(err));
}