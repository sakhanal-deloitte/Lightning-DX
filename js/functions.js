console.log('\x1Bc');

// var myObject = {
//     val: 0,
//     increment: function (inc) {
//         this.val += typeof inc === "number" ? inc : 1;
//         // console.log(this);
//         console.log(this.val);
//     },
//     decrement: function (dec) {
//         var decBy = typeof dec === "number" ? dec : 1;
//         this.val = this.val - decBy;
//         // console.log(this.val);
//     },
//     double: function () {
//         var helper = function () {
//             // this.val = 2 * this.val;
//             console.log(this.val);
//         };
//         //Invoked as a function. 
//         helper(); 
//     }
// }

// //Method Invocation
// //myObject.increment(2);
// // myObject.decrement(1);
// myObject.double();

//Constructor invocation pattern
// var Car = function(initialState){
//     this.isRunning = initialState;
// };
// Car.prototype.start = function(){
//     this.isRunning  = true;
// };
// Car.prototype.stop= function(){
//     console.log(this);
//   this.isRunning = false;
// }
// Car.prototype.showStatus = function() {
//     console.log(this.isRunning);
// }

// var tesla = new Car(true);
// tesla.stop();
// tesla.showStatus();
// console.log(Car(true));
// console.log(Car);
// console.log(Car.prototype);

//Apply & invoke pattersn

var marvinInfo = {name: 'Marvin', age: 42, size: '2xM'};
var say = function(greeting){
    console.log(this);
    console.log(greeting + ', ' + this.name);
};

// say('hello');
//console.log(typeof say);
// say.call(marvinInfo, 'Hello');
var myArray =  ['Hello from Apply'];
say.apply(marvinInfo,myArray);