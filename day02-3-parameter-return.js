/*
ลองทำแบบทดสอบ (Challenge)
ลองเขียนฟังก์ชันชื่อ makeJuice โดยใช้ Arrow Function ที่มีเงื่อนไขดังนี้:
รับ Parameter 2 ตัวคือ fruit (ชื่อผลไม้) และ amount (จำนวนแก้ว)
ให้ amount มีค่าเริ่มต้น (Default) เป็น 1
ให้ Return ข้อความออกมาเป็น String เช่น: "สั่งน้ำส้มจำนวน 2 แก้ว" (ใช้ชื่อผลไม้และจำนวนจาก Parameter)
ลองเรียกใช้ฟังก์ชันแล้วเก็บผลลัพธ์ไว้ในตัวแปร order จากนั้น console.log(order) ออกมาดูครับ
ใบ้ให้: ใช้ Template Literals (Backticks `) จะเขียนง่ายขึ้นมากครับ
*/

const makeJuice = (fruit,amount) => {
    console.log(`สั่ง${fruit} ${amount} จำนวนแก้ว`)
}

makeJuice("น้ำส้ม",2)

//แบบสั้นที่สุด (Implicit Return):
const makeJuice1 = (fruit, amount = 1) => `สั่งน้ำ${fruit} จำนวน ${amount} แก้ว`;

/*
ลองโจทย์ใหม่อีกครั้ง (ท้าทายกว่าเดิม!)

ลองเขียนฟังก์ชันชื่อ calculateDiscount (คำนวณส่วนลด) โดยใช้ Arrow Function แบบลดรูปบรรทัดเดียว:
รับ Parameter 2 ตัวคือ price (ราคาสินค้า) และ discountPercent
ให้ discountPercent มีค่าเริ่มต้น (Default) เป็น 10 (คือลด 10%)
ให้ฟังก์ชัน Return ราคาที่ลดแล้วออกมา (ตัวเลข)
สูตร: ราคาที่ลดแล้ว = price - (price * (discountPercent / 100))
*/

const calculateDiscount1 = (price,discountPercent=10) => `ราคาที่ลดแล้ว ${price - (price * (discountPercent / 100))}`

//แต่โจทย์ต้องการเป็น return ตัวเลข
const calculateDiscount2 = (price,discountPercent=10) => price - (price * (discountPercent / 100))
const finalprice = calculateDiscount2(1000,20)


/*
ท้าทายสุดท้าย: โจทย์ checkGrade
ลองใช้ความรู้เรื่อง Implicit Return ผสมกับ Ternary Operator (? :) เขียนฟังก์ชันตรวจเกรดดูครับ

โจทย์:
ฟังก์ชันชื่อ checkGrade รับ score เป็น parameter
ถ้า score >= 50 คืนค่า "Passed"
ถ้าไม่ใช่ คืนค่า "Failed" เขียนให้จบในบรรทัดเดียว
*/

const checkGrade = (score) => score >= 50 ? "Passed":"Failed"
checkGrade(99)