/*
### โจทย์ข้อที่ 1: `if...else` (ระบบเช็คราคาสินค้า)

**สถานการณ์:** ร้านค้ามีโปรโมชั่น ถ้าซื้อของยอดรวมตั้งแต่ 500 บาทขึ้นไป จะได้ส่วนลด 10% แต่ถ้าซื้อไม่ถึงจะได้ส่วนลดแค่ 5%

* จงประกาศตัวแปร `totalPrice` เพื่อรับราคาสินค้า
* สร้างตัวแปร `discount` เพื่อเก็บค่าส่วนลดที่คำนวณได้
* ใช้ `if...else` ในการเช็คเงื่อนไข
* พิมพ์ผลลัพธ์ออกทางหน้าจอ (ราคาก่อนลด, จำนวนส่วนลดที่ได้รับ, และราคาสุทธิ)
*/

let productprice = 600
let discount , totalPrice = 0
if (productprice >= 500){
    discount = 0.1
}else{
    discount = 0.05
}
//const discount = (productPrice >= 500) ? 0.10 : 0.05;

totalPrice = productprice * (1-discount)

console.log(`ราคาก่อนลด คือ ${productPrice}`)
console.log(`จำนวนส่วนลดที่ได้รับ ${productPrice * discount}`)
console.log(`และราคาสุทธิ คือ ${totalPrice}`)
