let row1 = document.querySelectorAll(".row1-block-1");
console.log(row1);
let row2 = document.querySelectorAll(".row2-block-2");
console.log(row2);
let row3 = document.querySelectorAll(".row3-block-3");

let word = "hello";
let current = 0;
// console.log(current);
console.log(row1[4]);
let current2 = 5;

let current3 = 0;
document.addEventListener("keydown", (e) => {
  if (current <= 4 && current < row1.length && e.key !== "Backspace") {
    row1[current].innerHTML = e.key;
    let wordArray = word.split("");
    console.log(word.split(""));
    // if (word.charAt(0) === row1[current].innerHTML) {
    //   console.log("yo");
    //   row1[0].style.background = "green";
    // }
    if (wordArray[current] === row1[current].innerHTML) {
      console.log("yea");
      row1[current].style.background = "green";
    }

    current += 1;
  } else if (e.key === "Backspace" && current > 0) {
    console.log(current);

    current -= 1;
    row1[current].innerText = "";
    row1[current].style.background = "none";

    // if (row1[0].innerHTML === "") {
    //   row1[0].style.background = "none";
    // }
  }

  //   } else if (current > 5 && current2 < row2.length) {
  //     console.log(current);
  //     row2[current2].innerHTML = e.key;
  //     current2 += 1;
  //   } else if (current > 10 && current3 < row3.length) {
  //     console.log(current);
  //     row3[current3].innerHTML = e.key;
  //     current3 += 1;
  //   }

  console.log(e.key);
  // console.log(current2, "two");
  // current2 += 1;
  console.log(current);

  console.log("hey");
  console.log(e.key);
});
// if (current2 > 5) {
//   document.addEventListener("keydown", (e) => {

// }

// second part

// let row1 = document.querySelectorAll(".row1-block-1");
// console.log(row1);
// let row2 = document.querySelectorAll(".row2-block-2");
// console.log(row2);
// let row3 = document.querySelectorAll(".row3-block-3");

// let word = "hello";
// let current = 0;
// // console.log(current);
// console.log(row1[4]);
// let current2 = 5;

// let current3 = 0;
// document.addEventListener("keydown", (e) => {
//   if (current <= 4 && current < row1.length && e.key !== "Backspace") {
//     row1[current].innerHTML = e.key;

//     if (word.charAt(0) === row1[current].innerHTML) {
//       console.log("yo");
//       row1[0].style.background = "green";
//     }

//     current += 1;
//   } else if (e.key === "Backspace" && current > 0) {
//     console.log(current);

//     current -= 1;
//     row1[current].innerText = "";
//     if (row1[0].innerHTML === "") {
//       row1[0].style.background = "none";
//     }
//   }

//   //   } else if (current > 5 && current2 < row2.length) {
//   //     console.log(current);
//   //     row2[current2].innerHTML = e.key;
//   //     current2 += 1;
//   //   } else if (current > 10 && current3 < row3.length) {
//   //     console.log(current);
//   //     row3[current3].innerHTML = e.key;
//   //     current3 += 1;
//   //   }

//   console.log(e.key);
//   // console.log(current2, "two");
//   // current2 += 1;
//   console.log(current);

//   console.log("hey");
//   console.log(e.key);
// });
// if (current2 > 5) {
//   document.addEventListener("keydown", (e) => {

// }
