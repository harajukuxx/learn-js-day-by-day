/*
setInterval(() => {
  console.log("Tick...");
}, 1000);
*/

let count = 0;

// เก็บค่าไว้ในตัวแปร timer
const timer = setInterval(() => {
  count++;
  console.log("วินาทีที่:", count);

  if (count === 5) {
    clearInterval(timer); // สั่งหยุดเมื่อถึง 5 วินาที
    console.log("หยุดแล้ว!");
  }
}, 1000);
