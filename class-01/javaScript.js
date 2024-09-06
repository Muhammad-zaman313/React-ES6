// chapter React ES6 
// topic ES6 Introduced Class.

// What is ES6?
// ES6 stands for ECMAScript 6.

// ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.



// Example-01.

// Classes
// ES6 introduced classes.

// A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

class car {
    constructor(name) {
        this.brand = name;
    }
}
const mycar = new car ("Mehran");

document.write(
    mycar.brand
);



// Notice the case of the class name. We have begun the name, "Car", with an uppercase character. This is a standard naming convention for classes.




// Example-02



// Class Inheritance
// To create a class inheritance, use the extends keyword.

// A class created with a class inheritance inherits all the methods from another class:

// Example
// Create a class named "Model" which will inherit the methods from the "Car" class:

class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
      return this.present() + ', it is a ' + this.model
    }
  }
  
  const mycar1= new Model("Ford", "Mustang");

  document.write(mycar1.show());