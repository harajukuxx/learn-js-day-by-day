let age = 10
if(age >= 18){
    console.log("อายุ 18 ปีขึ้นไป เข้าได้")
}else{
    console.log("เด็กเกิ้นนนน")
}

//ternary
age += 15
const statusage = (age >= 18) ? "ผู้ใหญ่" : "เด็ก"   // ? true : false
console.log("🚀 ~ statusage:", statusage)

//switch
const day = "Monday"
switch (day) {
    case "Monday":
        console.log("วันนี้ วันจันทร์")
        break;
    case "Tuesday":
        console.log("วันนี้ วันอังคาร")
        break;
    default:
        console.log("วันอื่นๆ")
        break;
}

//loop
const car = ["BMW","Toyota","Audi","Honda"]
for (let index = 0; index < car.length; index++) {
    console.log(`รถคันที่ ${index+1} ยี่ห้อ ${car[index]}`)
}

car.forEach((car,i) => {
    console.log(`รถคันที่ ${i+1} ยี่ห้อ ${car}`)
});
