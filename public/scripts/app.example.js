class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("search-button");
    this.carContainerElement = document.getElementById("car-container-element");
    this.tanggal = document.getElementById('tanggal');
    this.waktu = document.getElementById('waktu');
    this.jumlahPenumpang = document.getElementById('jumlah-penumpang');
    
    
  }
  
  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = async () => {
    await this.load()
    this.clear()
    Car.list.forEach((car) => { 
      const node = document.createElement('div');
      node.className = 'col-md-6 col-sm-12 col-lg-3';
      node.innerHTML = car.render();
      this.carContainerElement.append(node);
    });
  };

  async load() {
    const tanggal = this.tanggal.value;
    const waktu = this.waktu.value;
    const penumpang = this.jumlahPenumpang.value;
    console.log('jumlah penumpang ', penumpang)
    console.log('waktu ', waktu)
    console.log('tanggal', tanggal)


    const carAvailable = new Date(`${tanggal} ${waktu}`) //creating new dateTime object
    console.log(carAvailable)
    const epochTime = carAvailable.getTime() //parse dateTime object into milliseconds
    console.log('epoch', epochTime)
    
    const cars = await Binar.listCars((item) =>{
      const filterCapacity = item.capacity >= penumpang;
      const filterDateTime = item.availableAt.getTime() < epochTime
      return filterCapacity && filterDateTime
    });
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}


