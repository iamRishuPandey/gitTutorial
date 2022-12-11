//call apply bind



let name = {

    firstname: "rishu",
  
    lastname: "pandey",
  
     
  
  }
  
  
  
  let printFulName = function (hometown,state) {
  
      console.log(this.firstname + " "+ this.lastname + "from" + hometown + " "+ state);
  
    }
  
  printFulName.call(name,"ghazipur","up");
  
  
  
  let name2 = {
  
    firstname : "rohit",
  
    lastname : "pandey",
  
  }
  
  
  
   printFulName.call(name2,"thane","mh");
  
   printFulName.apply(name2,["thane","mh"]);
  
   let printMyName = printFulName.bind(name2, "Mumbai", "Maharastra");
  
  printMyName();
  
  
  
  
  
  //4)>
  
  
  
  let student = {
  
    age: '20',
  
  }
  
  
  
  let printAge = function() {
  
    console.log(this.age)
  
  }
  
  let printMyAge = printAge.bind(student);
  
  printMyAge();
  
  
  
//  1) currying
  
  // let multiply = function (x,y) {
  
  //   console.log(x*y);
  
  // }
  
  
  
  let multiply = function (x) {
  
    return function(y){
  
      console.log(x*y);
  
    }
  
  }
  
  
  
  let multiplyByTwo = multiply(2);
  
  multiplyByTwo(3);
  
  
  
  let multiplyByThree = multiply(3);
  
  multiplyByThree(10);
  
  