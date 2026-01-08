//การค้นหา: indexOf และ includes
//includes(value): ใช้เช็คว่า "มีไหม?" (ตอบเป็น true หรือ false)
//indexOf(value): ใช้เช็คว่า "อยู่ที่ไหน?" (ตอบเป็น Index ถ้าไม่เจอจะตอบ -1)

const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.includes("Apple")) //true
console.log(fruits.includes("Kiwi")) //false
console.log(fruits.indexOf("Apple")) //0
console.log(fruits.indexOf("Kiwi")) //-1

/*
slice array.slice(จุดเริ่มต้น, จุดสิ้นสุดแต่นับไม่ถึง)
คัดลอก ไป array ใหม่ array เก่า ยังเหมือนเดิม
*/

const original = ["A", "B", "C", "D", "E"];
const original2 = original.slice(0,4)
console.log("🚀 ~ original:", original)
console.log("🚀 ~ original2:", original2)

/*
splice array.splice(ตำแหน่งที่เริ่ม, จำนวนที่ต้องการลบ, ของที่จะแทรก...)
เปลี่ยนแปลง Array ต้นฉบับ
*/

const original3 = ["A", "B", "C", "D", "E"];
original3.splice(0,2,"Y","Z")
console.log("🚀 ~ original3:", original3)

/*
ลองเขียนโค้ดนี้ครับ:
gadgets = ["iPhone", "iPad", "MacBook", "Watch", "AirPods"]
เช็ค "Apple TV" ด้วย includes
หา Index ของ "MacBook"
slice เอาแค่ "iPhone" และ "iPad" แยกออกมา
splice เปลี่ยน "Watch" เป็น "iMac"
*/

const gadgets = ["iPhone", "iPad", "MacBook", "Watch", "AirPods"]
console.log(gadgets.includes("Apple TV"))
console.log(gadgets.indexOf("MacBook"))
const gadgets2 = gadgets.slice(0,2)
gadgets.splice(3,1,"iMac")
console.log(gadgets)