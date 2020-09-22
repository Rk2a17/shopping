window.addEventListener("load", init);
function init() {
  bindEvents();
  updateCount();
}
//function to delete the marked...
function deleteMarked() {
  var arr = questionOperations.delete();
  printTable(arr);
}

//funcion to print in a table....
function printTable(arr) {
  document.querySelector('#products').innerHTML = '';
  arr.forEach(printQuestion);
  updateCount();
}

//fuction for load.....

function load() {
  if (localStorage) {
    if (localStorage.products) {
      questionOperations.products = JSON.parse(localStorage.products);
      printTable(questionOperations.products);
    }
    else {
      alert("nothing to load");
    }
  }
  else {
    alert("your Browser is Outdated....")
  }
}


//function for save in local storage....
function save() {
  if (localStorage) {
    let arr = questionOperations.products;
    let json = JSON.stringify(arr);
    console.log(arr);
    console.log(json);
    localStorage.products = json;
    alert("Record Saved");
  }
  else {
    alert("Ur Browser is Outdated...");
  }
}



//this function is used to bind the events....
function bindEvents() {
  document.querySelector('#load').addEventListener('click', load);
  document.querySelector('#save').addEventListener('click', save);
  document.querySelector("#add").addEventListener("click", addQuestion);
  document.querySelector('#delete').addEventListener('click', deleteMarked);
  document.querySelector('#searchByValue').addEventListener('keyup', searchQuestions);
  document.querySelector("#searchByProperty").addEventListener('change', searchQuestions);
}



//this will help in printing or displaying....
function printQuestion(questionObject) {
  var tbody = document.querySelector("#products");
  var tr = tbody.insertRow();
  var index = 0;
  for (let key in questionObject) {
    if (key == 'isMarked') {
      continue;
    }
    if (key == 'Image') {
      console.log("inside Image")
      let img = document.createElement("img");
      img.src = questionObject.Image;
      img.className = "imgPixels";
      let td = tr.insertCell(index);
      td.appendChild(img);
      index++;
      continue;
    }
    let td = tr.insertCell(index);
    td.innerText = questionObject[key];
    index++;
  }
  let td = tr.insertCell(index);
  let id = questionObject.id;
  td.appendChild(createIcon('https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-128.png', id));
  td.appendChild(createIcon('https://image.flaticon.com/icons/png/128/61/61456.png', id));
}


//this function is used to update the count....
function updateCount() {
  document.querySelector("#total").innerText = questionOperations.products.length;
  document.querySelector("#mark").innerText = questionOperations.countMark();
  document.querySelector("#unmark").innerText = questionOperations.products.length - questionOperations.countMark();
}
//funtion to toggle i.e. select and not select....
function toggleMark() {
  console.log('you click on', this);
  let id = this.getAttribute('qid');
  console.log('ID is', id);
  questionOperations.toggleMark(id);
  let tr = this.parentNode.parentNode;
  tr.classList.toggle('alert-danger');
  updateCount();
}


//function to add icon trash and edit
function createIcon(path, id) {
  var img = document.createElement('img');
  img.src = path;
  img.setAttribute('qid', id);
  img.className = 'size';
  img.addEventListener('click', toggleMark);
  return img;
}


//function to search Question...
function searchQuestions() {
  var property = document.querySelector("#searchByProperty").value;
  var value = document.querySelector("#searchByValue").value;
  if (property && value) {
    let searchedQuestions = questionOperations.search(property, value);
    if (value) {
      printQuestion(searchedQuestions);
    }
    else {
      printQuestion(questionOperations.products);
    }
  }
}


// this function is to add the products...
function addQuestion() {
  var questionObject = new Question();
  for (let key in questionObject) {
    if (key == 'isMarked') {
      continue;
    }
    questionObject[key] = document.querySelector("#" + key).value;
  }
  questionOperations.add(questionObject);
  printQuestion(questionObject);
  updateCount();
  console.log("Add call", questionObject);
}

function searchQuestions() {
  var value = document.querySelector("#searchByValue").value;
  var property = document.querySelector("#searchByProperty").value;
  var searchedQuestions = questionOperations.searchall(property, value);
  printTable(searchedQuestions);
}



