class Question {
  constructor(id, name, price, warranty, battery, Image, rating) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.warranty = warranty;
    this.battery = battery;
    this.Image = Image;
    // this.rans = rans;
    this.rating = rating;
  }

  toggle() {
    this.isMarked = !this.isMarked;
  }

}
