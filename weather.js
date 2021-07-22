class Weather {
  constructor(city) {
    this.api_key = '6a669109db1c4ff09ed153612211406';
    this.city = city;
  }

  async getWeather() {
     const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.api_key}&q=${this.city}&aqi=no
     `);

     const resData = await res.json();
     return resData;
  }

  changeLocation(city) {
    this.city = city;
  }
}