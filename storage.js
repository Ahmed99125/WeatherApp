class Storage {
  constructor() {
    this.city;
    this.DefaultCity = 'London';
  }

  getLocationData() {
    if (localStorage.getItem('city') == null) {
      this.city = this.DefaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    return this.city;

  }

  setLocationData(city) {
    localStorage.setItem('city', city);
  }
}