var questionOperations = {
  products: [],
  add(question) {
    this.products.push(question);

  },
  delete() {
    return this.products = this.products.filter(questionObject => questionObject.isMarked == false);
  },
  countMark() {
    return this.products.filter(qobj => qobj.isMarked).length;
  },
  toggleMark(id) {
    this.search(id).toggle();
  },
  search(id) {
    return this.products.find(questionObject => questionObject.id == id);
  },
  searchall(property, value) {
    return this.products.filter(questionObject => questionObject[property] == value);
  },
  update() { },
  sort() { }
};
