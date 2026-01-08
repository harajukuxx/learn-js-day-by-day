const students = ["Tina", "John", "Mina"];
students[1] = "Yelly"
console.log("🚀 ~ students:", students)
console.log("🚀 ~ students length:", students.length)

//push pop shift unshift
students.push("Oat")    //ต่อตัวสุดท้าย
console.log("🚀 ~ students push:", students)

const studentspop = students.pop()    //ลบตัวสุดท้าย
console.log("🚀 ~ studentspop:", studentspop)
console.log("🚀 ~ students:", students)

students.unshift("Ferry")   //เพิ่มตัวแรก
console.log("🚀 ~ students:", students)

students.shift()    //ลบตัวแรก
console.log("🚀 ~ students:", students)

/*
🛠️ โจทย์ทดสอบความเข้าใจ (ลองเขียนดูครับ)
ให้สร้าง Array ชื่อ todoList แล้วทำตามขั้นตอนดังนี้:
สร้าง Array เริ่มต้นที่มี 2 งาน คือ "Homework" และ "Exercise"
ใช้คำสั่งเพิ่มงาน "Buy Milk" เข้าไปที่ "หน้าสุด" ของ Array
ใช้คำสั่งเพิ่มงาน "Cook Dinner" เข้าไปที่ "ท้ายสุด" ของ Array
ใช้คำสั่งลบงาน "หน้าสุด" ออก
console.log ดูผลลัพธ์สุดท้ายของ todoList
*/

const todoList = ["Homework","Exercise"]
todoList.unshift("Buy Milk")
todoList.push("Cook Dinner")
todoList.shift()
console.log("🚀 ~ todoList:", todoList)