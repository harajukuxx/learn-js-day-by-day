function add1(a, b) {
  return a + b;
}

console.log(add1(99,2))

//arrow
const add2 = (a, b) => {
  return a + b;
}

console.log(add2(99,2))

const double = x => x * 2

const sayHi = () => console.log("Hello!");
const sayHiname = (name) => console.log("Hello!" + name);

sayHiname("Tina")

//โจทย์
// 1.1 ฟังก์ชันบวกเลข
function add(a, b) {
  return a + b;
}

const add = (a,b) => a+b

// 1.2 ฟังก์ชันตรวจสอบเลขคู่ (ให้คืนค่าเป็น true/false)
function isEven(num) {
  return num % 2 === 0;
}

const isEven = (num) => num % 2 === 0 ? "true":"false"
//เขียนแค่ const isEven = num => num % 2 === 0 ก็ได้ครับ (เว้นแต่ว่าคุณอยากให้มันคืนค่าเป็น "String")

// 1.3 ฟังก์ชันทักทายแบบไม่มี parameter
function sayGoodMorning() {
  return "Good Morning!";
}

const sayGoodMorning = () => console.log("Good Morning!")


//Level 2
/*
const students = [
  { name: 'Alice', score: 45 },
  { name: 'Bob', score: 72 },
  { name: 'Charlie', score: 51 },
  { name: 'David', score: 30 }
];
โจทย์: 1. ใช้ .filter() ร่วมกับ Arrow Function เพื่อเลือกเฉพาะคนที่ score มากกว่า 50 2. ใช้ .map() ร่วมกับ Arrow Function เพื่อสร้าง Array ใหม่ที่มีแต่ชื่อนักเรียน (String)
*/

const students = [
  { name: 'Alice', score: 45 },
  { name: 'Bob', score: 72 },
  { name: 'Charlie', score: 51 },
  { name: 'David', score: 30 }
];

const studentPass = students => students
  .filter(students => students > 50)
  .map(students => students.name)

  //คำตอบที่ถูกต้อง:
const studentPass2 = students => students
  .filter(s => s.score > 50)     // ต้องใช้ s.score
  .map(s => s.name);            // ดึงเฉพาะชื่อออกมา

