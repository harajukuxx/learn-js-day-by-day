const calculateTotal = (price, quantity = 1) => {
  // 1. Validation: กันคนส่งค่าที่ไม่ใช่ตัวเลขมา
  if (typeof price !== 'number' || price <= 0) {
    return "ราคาไม่ถูกต้อง";
  }

  const total = price * quantity;
  const vat = total * 0.07;
  return total + vat;
};

console.log(calculateTotal(100, 2)); // 214
console.log(calculateTotal(100));    // 107 (ใช้ค่า default quantity = 1)



const numbers = [45,99,44,10,999,2]
const countEvenOdd = (numbers) => {
    return numbers.reduce((acc, num) => {
        num % 2 === 0 ? acc.evenCount++ : acc.oddCount++;
        return acc;
    }, { evenCount: 0, oddCount: 0 }); // กำหนดค่าเริ่มต้นเป็น Object
};

// 1. เรียกใช้ฟังก์ชันและเก็บผลลัพธ์ไว้ในตัวแปร result
const result = countEvenOdd(numbers);

// 2. เรียกดูค่าจากตัวแปร result
console.log("🚀 ~ evenCount:", result.evenCount); // Output: 3
console.log("🚀 ~ oddCount:", result.oddCount);   // Output: 3
