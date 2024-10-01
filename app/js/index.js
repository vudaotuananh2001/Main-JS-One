console.log("hello word")

function demoJsHello() {
    document.getElementById("demo").innerHTML = "Hello Word";
}

function demoJsStyle() {
    const oop = document.getElementById("demo_style");
    oop.style.fontSize = "20px";
    oop.style.color = "red";
    oop.style.border = "1px solid yellow";
    oop.style.backgroundColor = "white";
}

var x = 5;
const v = 10;
let y = 7;
var z = x + y;
console.log(z);

let namex = "tuấn anh";
let last_name = "vu dao";

console.log(last_name + ' ' + namex);

x++;
console.log(x);
x--;
console.log(x);
const date = new Date(Date.now());

console.log(date.getHours());
console.log(date.getFullYear());
console.log(date.getMonth() + 1);

function sum(x, y) {
    const sumNumber = x + y;
    return alert(" Tổng 2 số là " + sumNumber);
}

// khai báo đối tượng 1
const person = {
    firstName: "Tuấn Anh",
    lastName: "Vũ Đào",
    age: 23,
    sex: true,

    // Sửa lại phương thức
    getName: function () {
        return alert(this.firstName);
    }
};


// khai báo đối tượng 2
const person2 = {};
person2.firtName = "Tuấn Anh đây";
person2.last_name = "Vũ Đào";
person2.age = 22;
person2.sex = false;

function getNamx() {
    console.log(person2.last_name + ' ' + person2.firtName);
    return alert(person2.last_name + ' ' + person2.firtName);
}

function getAgePerson2() {
    let getAge = person2.age;
    if (typeof getAge === "undefined") {
        return alert("Không tồn tại tuổi")
    }
    return alert(person2.age)
}

// khai báo đối tượng 3
const person3 = new Object();
person3.firtName = "Tuấn Anh đây rồi";
person3.last_name = "Vũ Đào";
person3.age = 6;
person3.sex = true;

function getInfor() {
    // Cập nhật nội dung
    document.getElementById("getInfor").innerHTML =
        "Full name: " + person3.last_name + ' ' + person3.firtName +
        " tuổi: " + person3.age + " Giới tính: " + (person3.sex ? "Nam" : "Nữ");
}

function _Presion(name, age, car) {
    this.Name = name;
    this.Age = age;
    this.Car = car;
}

const MyInfor = new _Presion("Tôi là Tép đây", 11, "Vinfast")

function getMyInfor() {
    return document.getElementById("getMyInfor").innerHTML =
        "Tên đầy đủ :" + MyInfor.Name + ' --- Tuổi: ' + MyInfor.Age + '----- Chiếc xe yêu thích:' + MyInfor.Car
}

function handleGetYear() {
    return alert("Year is : " + date.getFullYear());
}

// string : làm việc với chuỗi
// concat();
function handleDemoConCat() {
    let v = "Tuấn Anh";
    let t = "Vũ Đào"
    let v_t = t.concat(" ", v);
    alert(v_t);
}

let text = "Máy tính để bàn bàn bàn";
console.log('sử dụng repeat(): ' + text.repeat(2));
console.log(' sử dung replace():' + text.replace("bàn", "tủ lạnh"));

// search string
console.log('sử dụng indexOf ' + text.indexOf('bàn'));
console.log('sử dụng indexOf ' + text.lastIndexOf('bàn'));

try {
    let stringA = "10";
    let numberOne = parseInt(stringA);
    console.log("chuyển qua số kiểu dữ liệu:" + typeof numberOne);

} catch (ex) {
    console.warn("NaN", +ex)
}

// Array
const arr = [1, 2, 3]; // khai báo 1 mảng
const arrChild = ["Nguyễn Văn A", "Nguyễn Văn B", "Nguyên Văn D"];
const arrChild2 = ["Nguyễn Văn E", "Nguyễn Văn F", "Nguyên Văn G"];
const arrInter = arr.toString();
console.log(arrInter);
console.log(arr);
arrChild.push("Add persion");
arrChild.unshift("Thêm mới data")
for (let i = 0; i < arrChild.length; i++) {
    console.log(arrChild[i]);
}

console.log(arrChild.join(" - "));
const myArr = arrChild.concat(arrChild2);
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

const arrNumber = [1, 2, 3, 1, 5, 10, 6, 9, 11];
console.log('Max:' + Math.max(...arrNumber));
console.log('Min:' + Math.min(...arrNumber));
console.log(arrNumber.sort());
console.log(arrNumber.filter(handleNumber));

function handleNumber(number) {
    return number > 7;
}

const dataTime = new Date();
const daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
const dayOfWeek = daysOfWeek[dataTime.getDay()];
console.log(`Hôm nay là: ${dayOfWeek}, ngày ${dataTime.getDate()}/${dataTime.getMonth() + 1}/${dataTime.getFullYear()}`);

// Use Strict
"use strict";
myFunction();

function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
}

const testArrowFuntion = () => {
    return alert("Test Arrow Funtion")
}

var numbers1 = [45, 4, 9, 16, 25, 4];
var sum = numbers1.reduce(myFunction);
var booleanx = numbers1.every(demoEvery);
var index = numbers1.indexOf(4);
var lastIndex = numbers1.lastIndexOf(4);

function myFunction(total, value) {
    return total + value;
}
function demoEvery(value) {
    return value = 16;
}
console.log("reduce sum:  " + sum);
console.log("Evvery :" + booleanx);
console.log('Vị trí số 4 (indexOf):  ' + index);
console.log('Vị trí số 4 (lastIndexOf):  ' + lastIndex);

const jsonString = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // 'Alice'
console.log(obj.age);  // 25

const car = {
    nameCar: "Toyota",
    description: "Nặng 100000kg",
    details: "chở 10 người"
}

const carChild = Object.create(car);
carChild.nameCar = "Vinfast";
carChild.description = "230.000.000 VND";

console.log(car);
console.log(carChild);
const keys = Object.keys(car);
console.log(keys);

// for of
console.log('Dùng for ofd');
for (let value of arr) {
    console.log(value);
}

class Student {
    constructor(name, age, status) {
        this.name = name,
            this.age = age,
            this.status = status
    }

    displayData() {
        return console.log("Student name : " + this.name + ", age : " + this.age + ", stauts :" + this.status);
        ;
    }
}

const studen1 = new Student("adadada", 11, true);
studen1.displayData();
const studen2 = new Student("Trần Trung Kiên", 11, true);
studen2.displayData();

// find
console.log();
let result = numbers1.find(number => number > 8);
console.log("sử dụng find:  " + result);

// Object
const target = { a: 1 };
const source = { b: 2, c: 3 };

const result2 = Object.assign(target, source); // gộp sau về trước
console.log(result2); // { a: 1, b: 2, c: 3 }
console.log(target); // { a: 1, b: 2, c: 3 } (đối tượng target đã bị thay đổi)

const obj2 = { a: 1, b: 2, c: 3 };
const keys2 = Object.keys(obj2);
console.log(keys2); // ['a', 'b', 'c']

const data = Object.values(result2);
console.log(data);

// funtion
const kkk = { name: 'Tuanx' };
const hhh = { name: "anhhh" };

function getInfor(inforx) {
    console.log(`${inforx} ,I'm ${this.name}`);
}

getInfor.call(kkk, "Ronaldo");

const vvv = {
    fullNamex: function () {
        return console.log(this.namex + ' ' + this.lastNamex);
    }
}
const _555 = {
    namex: 'Chuột máy tính',
    lastNamex: 'không dây'
}

vvv.fullNamex.call(_555);

const personr = {
    fullName: function (city, country, xxxxx) {
        return console.log(this.firstName + " " + this.lastName + "," + city + "," + country + "," + this.xxxxx);
    }
}

const person1r = {
    firstName: "John",
    lastName: "Doe",
    xxxxx: "không có gì ở đây"
}

personr.fullName.apply(person1r, ["Oslo", "Norway"]);

let cv = 10;
function cv_xx() {
    cv += 10;
}

cv_xx();
cv_xx();
cv_xx();
console.log(cv);


