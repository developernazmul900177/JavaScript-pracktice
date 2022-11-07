// console.log("Hello world");
// var a = "Naeem";
// console.log(a);



// for (var i = 1; i <= 6; i++) {
//     console.log(i);
// }

// var factorial = 1;
// for (i = 1; i <= 10; i++) {
//     factorial = factorial * i;
//     console.log(i, factorial);

// }



// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }



// var factorial = 1;
// var i = 1;
// while (i <= 10) {
//     factorial = factorial * i;
//     console.log(i, factorial);
//     i++;
// }


// var a = 56;
// var b = 60;
// console.log("Before swap :  a = ", a, "and b = ", b);

// var change = a;
// a = b;
// b = change;
// console.log("After swap : a = ", a, "and b = ", b);


// var a = 750
// var b = 660;
// var c = 600;
// if (a > b) {
//     if (a > c) {
//         console.log("a is biggest");
//     }
//     else {
//         console.log("c is biggest")
//     }
// }
// else {
//     if (b > c) {
//         console.log("b is biggest");
//     }
//     else {
//         console.log("c is biggest");
//     }
// }


// var nums = [5, 43, 464, 4, 65, 94];
// for (var i = 0; i <= nums.length; i++) {
//     var num = nums[i];
//     if (num % 2 == 0) {
//         console.log(num, " :This is a Even Number");
//     }
//     else {
//         console.log(num, " : This is an Odd Number");
//     }
// }

// var firstName = "Nazmul";
// var lastName = "Naeem";
// fullName = "My name is " + firstName + " " + lastName;
// fullName2 = `My name is : ${firstName} ${lastName} `
// console.log(fullName);
// console.log(fullName2);


// const multiline = "Hey guys\n"
//     + "This is Naeem\n"
//     + "I'm from Bangladesh";
// console.log(multiline);
// const newmultiLine = `
//             Hey boys
//             This is Naeem
//             I am from Rangpur`;
// console.log(newmultiLine);



// let list1 = [1, 2, 3, 4, 5];
// let list2 = [6, 7, 8, 9, 10];
// let list3 = [11, 12, 13, 14, 15];
// console.log(list1.concat(list2).concat(list3));
// let list4 = [...list1, 5, ...list2, 66, ...list3];
// console.log(list4);

// let a = 45;
// let b = 33;
// let c = 99;
// let d = Math.max(a, b, c);
// console.log(d);

// let f = [1, 2, 3, 4, 5];
// let e = Math.max(...f);
// console.log(e);

// class Student {
//     constructor() {
//         this.id = 1;
//         this.name = "Nazmul";
//     }
// }
// let student1 = new Student();
// let student2 = new Student();
// console.log(student1, student2);


// class Student {
//     constructor(sId, sName) {
//         this.id = sId;
//         this.name = sName;
//         this.school = "Thakurgaon Polytechnic Institute"
//     }
// }
// let student1 = new Student(1, "Nazmul");
// let student2 = new Student(2, "Naeem");
// console.log(student1, "\n", student2);


// class Parent {
//     constructor() {
//         this.fatherName = "Someone";
//     }
// }
// class Child extends Parent {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }
// const baby = new Child("Nazmul");
// const baby2 = new Child("Naeem");
// console.log(baby);
// console.log(baby2);


// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < a.length; i++) {
//     let element = a[i];
//     let square = element * element;
//     console.log(square);
// }


const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = [];
for (let i = 0; i < a.length; i++) {
    let element = a[i];
    let square = element * element;
    b.push(square);
}
console.log(b);
