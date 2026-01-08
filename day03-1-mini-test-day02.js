//โจทย์ฝึกเขียน JavaScript (Functions)
//ข้อที่ 1: การทักทาย (Function Declaration) จงสร้างฟังก์ชันชื่อ welcomeUser 
//โดยใช้รูปแบบ Function Declaration ที่รับพารามิเตอร์ 1 ตัว คือ name 
//และให้คืนค่า (return) เป็นข้อความว่า "สวัสดีคุณ [name], ยินดีต้อนรับสู่บทเรียน JavaScript!"

function welcomeUser(name) {
    return `สวัสดีคุณ ${name}, ยินดีต้อนรับสู้บทเรียน Javascript`
}
console.log(welcomeUser("Tina"))

//ข้อที่ 2: คำนวณพื้นที่รูปสี่เหลี่ยม (Arrow Function) จงสร้าง Arrow Function ชื่อ calculateArea 
//ที่รับพารามิเตอร์ 2 ตัวคือ width และ height เพื่อคำนวณหาพื้นที่สี่เหลี่ยม (กว้าง x สูง) และคืนค่าผลลัพธ์ออกมา

const calculateArea = (width,height) =>  width * height
console.log(calculateArea(9,8))

/*ข้อที่ 3: ตรวจสอบเลขคู่ (Parameters / Return) จงเขียนฟังก์ชันชื่อ isEven ที่รับตัวเลข 1 ตัวเป็นพารามิเตอร์
ถ้าเลขนั้นเป็นเลขคู่ ให้คืนค่าเป็น true
ถ้าเป็นเลขคี่ ให้คืนค่าเป็น false (คำใบ้: ใช้เครื่องหมาย % ในการหาเศษ)
*/

const isEvennum = (num) => num % 2 === 0 
console.log(isEvennum(9))

//ข้อที่ 4: แปลงอุณหภูมิ (Practice Function) จงเขียนฟังก์ชันชื่อ celsiusToFahrenheit 
// ที่รับอุณหภูมิในหน่วยเซลเซียส (celsius) เข้ามา และคืนค่าเป็นหน่วยฟาเรนไฮต์ สูตรการคำนวณ: (celsius * 9/5) + 32

const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32
console.log(`อุณหภูมิในหน่วยเซลเซียส ${celsiusToFahrenheit.celsius} แปลงเป็นหน่วยฟาเรนไฮต์ ${celsiusToFahrenheit(100)}`)

/*ข้อที่ 5: สรุปราคาสินค้า (Integration) จงสร้างฟังก์ชันชื่อ getTotalPrice 
ที่รับพารามิเตอร์ 2 ตัวคือ price (ราคาสินค้า) และ quantity (จำนวน)
ให้ฟังก์ชันคำนวณราคารวม (ราคาสินค้า x จำนวน) แต่ถ้าราคารวม มากกว่า 1,000 บาท ให้ลดราคา 10%
คืนค่าราคาสุทธิที่ต้องจ่าย*/

const getTotalPrice = (price,quantity) => {
    if(price*quantity >= 1000){
        price*quantity*0.9 
    }else{
        price*quantity
    }  
}