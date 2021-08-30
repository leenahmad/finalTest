'use strict';
let final = [];

let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);




function Names(name , age ,phone, frinedName){
    this.Name = name;
    this.Age = age;
    this.phone = phone;
    this.frinedName = frinedName;


    final.push(this);
  }

  function saveToLocalStorage(){
    let data = JSON.stringify(final);
    localStorage.setItem('final' , data);
  }
  function readFromLocalStorage(){
    let stringObj = localStorage.getItem('final');
    let normalObj = JSON.parse(stringObj);
  
    // if(normalObj){
  
    //   final = normalObj;
  
      
    // }
  }
  readFromLocalStorage();



  Names.prototype.render = function(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
  
  
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = this.Name;

    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = this.Age;

    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = this.phone;

    let tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent = this.frinedName;
  

  };

  
  function createTableHeader(){
       let trEl = document.createElement('tr');
       tableEl.appendChild(trEl);
  
       let thEl1 = document.createElement('th');
       trEl.appendChild(thEl1);
       thEl1.textContent = ' ';

    }

    // console.log(createTableHeader);

    function createTableFooter(){
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
      
        let tdEl1 = document.createElement('td');
        trEl.appendChild(tdEl1);
        tdEl1.textContent = 'name';

        let tdEl2 = document.createElement('td');
        trEl.appendChild(tdEl2);
        tdEl2.textContent = 'Age';
    
        let tdEl3 = document.createElement('td');
        trEl.appendChild(tdEl3);
        tdEl3.textContent = 'phone';
    
        let tdEl4 = document.createElement('td');
        trEl.appendChild(tdEl4);
        tdEl4.textContent = 'frinedName';
      
      
      }

      createTableHeader();
    

      
let myform = document.getElementById('myform');
myform.addEventListener('submit' , addName);

function addName(event){
  event.preventDefault();
  let Name = event.target.Name.value;
  let age = event.target.Age.value;
  let phone = event.target.phone.value;
  let frinedName = event.target.frinedName.value;
  let newName = new Names(Name,age,phone,frinedName);

  
  newName.render();

  saveToLocalStorage();


}
// myform.removeEventListener('submit' , addName);

console.log(addName);

 createTableFooter();

  //myform.removeEventListener('submit' , addName);

let fadi = new Names('fadi' , 23 , 2022358 , 'hala');
fadi.render();

let thabet = new Names('thabet', 30 , 427552 , 'razan');
thabet.render();

let razan = new Names('razan' , 70, 355522448, 'samera');
razan.render();

let ahmad = new Names('ahmad' , 20, 3855555, 'leen');
ahmad.render();




