class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  }
  let arr = new PowerArray(1, 2, 5, 10, 50);
  alert(arr.isEmpty()); // false
  let filteredArr = arr.filter(item => item >= 10);
  alert(filteredArr); // 10, 50
  alert(filteredArr.isEmpty()); // false

  class PowerArray1 extends Array {
    isEmpty() {
      return this.length === 0;
    }
    // built-in methods will use this as the constructor
    static get [Symbol.species]() {
      return Array;
    }
  }
  let arr1 = new PowerArray1(1, 2, 5, 10, 50);
  alert(arr.isEmpty()); // false
  // filter creates new array using arr.constructor[Symbol.species] as constructor
  let filteredArr1 = arr.filter(item => item >= 10);
  // filteredArr1 is not PowerArray, but Array
  //alert(filteredArr1.isEmpty()); // Error: filteredArr.isEmpty is not a function
  