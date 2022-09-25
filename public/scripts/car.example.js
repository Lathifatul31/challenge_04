class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card car-card">
      <img src="${this.image}" alt="${this.manufacture}" id="car-picture">
			<p id="car-type">${this.model} ${this.type}</p>
			<p id="car-price"><b>Rp ${this.rentPerDay}</b></p>
			<p id="car-description">${this.description} </p>
			<div class="icon-wrapper"><img src="images/fi_users.png" alt="" class="car-icon"><span>${this.capacity} Orang</div>
			<div class="icon-wrapper"><img src="images/car-setting.png" alt="" class="car-icon"><span>${this.transmission}</span></div>
			<div class="icon-wrapper"><img src="images/fi_calendar.png" alt="" class="car-icon"><span>Tahun ${this.year}</span></div>
			<div class="btn-wrapper"><button class="btn btn-success" id="choose-car">Pilih Mobil</button></div>
      </div>
    `;
  }
}