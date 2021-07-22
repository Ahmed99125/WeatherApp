class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  showRes(res) {
    //location
    this.location.innerText = res.location.name;
    
    //desc
    this.desc.innerText = res.current.condition.text;

    //temp
    this.temp.innerText = `${res.current.temp_f} F (${res.current.temp_c} C)`;
    
    //icon
    this.icon.src = res.current.condition.icon;

    //humidity
    this.humidity.innerText = `Relative Humidity: ${res.current.humidity}%`;

    //feelsLike
    this.feelsLike.innerText = `Feels Like: ${res.current.feelslike_f} F (${res.current.feelslike_c} C)`

    //wind
    this.wind.innerText = `Wind: From the ${res.current.wind_dir} at ${res.current.wind_mph} Gusting to ${res.current.gust_mph}`
  }
}