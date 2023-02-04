// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.load = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// grabs each little square in the dom
let squares = document.querySelectorAll(".square");

let next1 = -1;
let next2 = -1;
let next3 = -1;
let next4 = -1;
let next5 = -1;
let next6 = -1;

// let word1 = "ARRAY";

const randomWordArray = ["ARRAY", "VALUE", "INPUT", "PIXEL", "STYLE", "ASYNC"];

let emptyArray = [[], [], [], [], [], []];
console.log(emptyArray);
// this is same as function generateRandomWord()
const generateRandomWord = () => {
  return randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
};
let word1 = generateRandomWord();
console.log(word1);

const firstWord = (e) => {
  next1++;
  if (next1 >= 0 && next1 <= 4) {
    squares[next1].innerHTML = e.key.toUpperCase(); // Writing letter on square
    console.log(emptyArray);
    emptyArray[0].push(squares[next1].innerHTML); // Pushing separate letters into array
    console.log(emptyArray[0].length);
    let winWord = word1.split(""); // Splitting word that is going to be checked against array

    if (winWord[next1] === squares[next1].innerHTML) {
      // Checking letter by letter if they match
      console.log(winWord[next1], "first");

      if (next1 <= 4 && emptyArray[0].join("") === word1) {
        //After all letters are checked, join array and check with winning word

        for (let i = 0; i <= next1; i++) {
          squares[i].style.background = "green";
        }
        // document.removeEventListener("keydown", pressedLetter);
        // next1++;
        alert("yoyo");
      }
    } else if (winWord[next1] !== squares[next1].innerHTML) {
      // console.log(winWord[next1]);
      // console.log(next1);
      if (next1 >= 4) {
        for (let i = 0; i <= next1; i++) {
          squares[i].style.background = "red";
        }
        alert("yo");
        // next1++;
        // document.removeEventListener("keydown", pressedLetter);
      }
    }
  }
  if (next1 === 4) {
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] === squares[i].innerHTML) {
        squares[i].style.background = "green";
      } else if (word1.split("").includes(squares[i].innerHTML)) {
        squares[i].style.background = "yellow";
      } else {
        squares[i].style.background = "red";
      }
    }
  }
  console.log(next1);
};
const secondWord = (e) => {
  // second word
  if (next1 >= 5 && next1 <= 9) {
    next2++;
    squares[next1].innerHTML = e.key.toUpperCase(); // Writing letter on square
    //   console.log(emptyArray);
    emptyArray[1].push(squares[next1].innerHTML); // Pushing separate letters into array
    //   console.log(next1);
    let winWord = word1.split(""); // Splitting word that is going to be checked against array
    //   console.log(emptyArray[1].length);

    if (winWord[next2] === squares[next1].innerHTML) {
      // Checking letter by letter if they match
      // console.log(next2);
      if (next1 <= 9 && emptyArray[1].join("") === word1) {
        //After all letters are checked, join array and check with winning word

        for (let i = 5; i <= 9; i++) {
          // console.log(next1[i]);
          squares[i].style.background = "green";
        }
        document.removeEventListener("keydown", pressedLetter);

        alert("yoyo");
      }
    } else if (winWord[next2] !== squares[next2].innerHTML) {
      // console.log(winWord[next2], "hey");
      // console.log(squares[next1].innerHTML, "hey2");
      // console.log(winWord[1]);
      // console.log(next1);
      // console.log(next2);
      if (next1 >= 9) {
        for (let i = 5; i <= 9; i++) {
          squares[i].style.background = "red";
          // console.log(squares[i]);
        }
        alert("yo");
      }
    }
  }
  if (next1 === 9) {
    let j = 0;
    //   console.log(next1, "imhere");
    //   console.log(next2);
    // we need to track 5-9 on our squares rather than 0-4
    for (let i = 5; i < 10; i++) {
      // console.log("hey");
      // console.log(word1[next2]);
      // we need word2 to be 0-4
      // squres to be 5-9
      // cant use i cause it goes to 5,next2 is 4
      // console.log(word2[j]);
      if (word1[j] === squares[i].innerHTML) {
        squares[i].style.background = "green";
        //   console.log(j);
      } else if (word1.split("").includes(squares[i].innerHTML)) {
        squares[i].style.background = "yellow";
      } else {
        squares[i].style.background = "red";
      }
      j++;
    }
  }
};
const thirdWord = (e) => {
  // third word
  if (next1 >= 10 && next1 <= 14) {
    next3++;
    squares[next1].innerHTML = e.key.toUpperCase(); // Writing letter on square
    console.log(emptyArray);
    emptyArray[2].push(squares[next1].innerHTML); // Pushing separate letters into array
    console.log(next1);
    let winWord = word1.split(""); // Splitting word that is going to be checked against array
    console.log(emptyArray[1].length);

    if (winWord[next3] === squares[next1].innerHTML) {
      // Checking letter by letter if they match
      console.log(next2);
      if (next1 <= 14 && emptyArray[2].join("") === word1) {
        //After all letters are checked, join array and check with winning word

        for (let i = 10; i <= 14; i++) {
          console.log(next1[i]);
          squares[i].style.background = "green";
        }
        // document.removeEventListener("keydown", pressedLetter);

        alert("yoyo");
      }
    } else if (winWord[next3] !== squares[next3].innerHTML) {
      console.log(winWord[next2], "hey");
      console.log(squares[next1].innerHTML, "hey2");
      console.log(winWord[1]);
      console.log(next1);
      console.log(next2);
      if (next1 >= 14) {
        for (let i = 10; i <= 14; i++) {
          squares[i].style.background = "red";
          console.log(squares[i]);
        }
        alert("yo");
      }
    }
  }
  if (next1 === 14) {
    console.log(next1);
    let j = 0;
    console.log(next1, "imhere");
    console.log(next2);
    // we need to track 5-9 on our squares rather than 0-4
    for (let i = 10; i < 15; i++) {
      console.log("hey");
      console.log(j);
      // we need word2 to be 0-4
      // squres to be 5-9
      // cant use i cause it goes to 5,next2 is 4
      console.log(word1[j]);
      console.log(squares[i].innerHTML);

      if (word1[j] === squares[i].innerHTML) {
        squares[i].style.background = "green";

        console.log(j);
      } else if (word1.split("").includes(squares[i].innerHTML)) {
        squares[i].style.background = "yellow";
      } else {
        squares[i].style.background = "red";
      }
      j++;
    }
  }
};

const fourthWord = (e) => {
  // fourth word
  if (next1 >= 15 && next1 <= 19) {
    next4++;
    squares[next1].innerHTML = e.key.toUpperCase();

    emptyArray[3].push(squares[next1].innerHTML);

    let winWord1 = word1.split("");

    if (winWord1[next4] === squares[next1].innerHTML) {
      if (next4 <= 19 && emptyArray[3].join("") === word1) {
        for (let i = 15; i <= 19; i++) {
          console.log(next1[i]);
          squares[i].style.background = "green";
        }
        document.removeEventListener("keydown", pressedLetter);

        alert("yoyo");
      }
    } else if (winWord1[next4] !== squares[next4].innerHTML) {
      console.log(squares[next1].innerHTML, "hey2");
      console.log(next1);
      console.log(next2);
      if (next1 >= 19) {
        for (let i = 15; i <= 19; i++) {
          squares[i].style.background = "red";
          console.log(squares[i]);
        }
        alert("yo");
      }
    }
  }
  if (next1 === 19) {
    console.log(next1);
    let j = 0;
    console.log(next1, "imhere");
    console.log(next2);
    // we need to track 5-9 on our squares rather than 0-4
    for (let i = 15; i < 20; i++) {
      console.log("hey");
      console.log(j);
      // we need word2 to be 0-4
      // squres to be 5-9
      // cant use i cause it goes to 5,next2 is 4
      // console.log(word3[j]);
      console.log(squares[i].innerHTML);
      console.log(word1[i]);
      if (word1[j] === squares[i].innerHTML) {
        squares[i].style.background = "green";

        console.log(j);
      } else if (word1.split("").includes(squares[i].innerHTML)) {
        squares[i].style.background = "yellow";
      } else {
        squares[i].style.background = "red";
      }
      j++;
    }
  }
};

const fifthWord = (e) => {
  // fifth word
  if (next1 >= 20 && next1 <= 24) {
    next5++;
    squares[next1].innerHTML = e.key.toUpperCase();

    emptyArray[4].push(squares[next1].innerHTML);

    let winWord1 = word1.split("");

    if (winWord1[next5] === squares[next1].innerHTML) {
      if (next5 <= 24 && emptyArray[4].join("") === word1) {
        for (let i = 20; i <= 24; i++) {
          console.log(next1[i]);
          squares[i].style.background = "green";
        }
        document.removeEventListener("keydown", pressedLetter);

        alert("yoyo");
      }
    } else if (winWord1[next5] !== squares[next5].innerHTML) {
      console.log(squares[next1].innerHTML, "hey2");
      console.log(next1);
      console.log(next2);
      if (next1 >= 24) {
        for (let i = 20; i <= 24; i++) {
          squares[i].style.background = "red";
          console.log(squares[i]);
        }
        alert("yo");
      }
    }
  }
  if (next1 === 24) {
    console.log(next1);
    let j = 0;
    console.log(next1, "imhere");
    console.log(next2);
    // we need to track 5-9 on our squares rather than 0-4
    for (let i = 20; i < 25; i++) {
      console.log("hey");
      console.log(j);
      // we need word2 to be 0-4
      // squres to be 5-9
      // cant use i cause it goes to 5,next2 is 4
      // console.log(word3[j]);
      console.log(squares[i].innerHTML);

      if (word1[j] === squares[i].innerHTML) {
        squares[i].style.background = "green";

        console.log(j);
      } else if (word1.split("").includes(squares[i].innerHTML)) {
        squares[i].style.background = "yellow";
      } else {
        squares[i].style.background = "red";
      }
      j++;
    }
  }
};

const lastWord = (e) => {
  // last word
  if (next1 >= 25 && next1 <= 29) {
    next6++;
    squares[next1].innerHTML = e.key.toUpperCase();

    emptyArray[5].push(squares[next1].innerHTML);

    let winWord1 = word1.split("");

    if (winWord1[next6] === squares[next1].innerHTML) {
      if (next5 <= 24 && emptyArray[5].join("") === word1) {
        for (let i = 25; i <= 29; i++) {
          console.log(next1[i]);
          squares[i].style.background = "green";
        }

        alert("yoyo");
      }
    } else if (winWord1[next6] !== squares[next6].innerHTML) {
      console.log(squares[next1].innerHTML, "hey2");
      console.log(next1);
      console.log(next2);
      if (next1 >= 29) {
        for (let i = 25; i <= 29; i++) {
          squares[i].style.background = "red";
          console.log(squares[i]);
        }
        alert("yo");
      }
    }
  }
  if (next1 === 29) {
    console.log(next1);
    let j = 0;
    console.log(next1, "imhere");
    console.log(next2);
    // we need to track 5-9 on our squares rather than 0-4
    for (let i = 25; i < 30; i++) {
      console.log("hey");
      console.log(j);
      // we need word2 to be 0-4
      // squres to be 5-9
      // cant use i cause it goes to 5,next2 is 4
      // console.log(word3[j]);
      console.log(squares[i].innerHTML);

      if (word1[j] === squares[i].innerHTML) {
        squares[i].style.background = "green";

        console.log(j);
      } else if (word1.split("").includes(squares[i].innerHTML)) {
        squares[i].style.background = "yellow";
      } else {
        squares[i].style.background = "red";
      }
      j++;
    }
  }
};

document.addEventListener("keydown", function pressedLetter(e) {
  if ((e.keyCode >= 65 && e.keyCode <= 90) || e.key === "Backspace") {
    if (e.key === "Backspace") {
      squares[next1].innerHTML = "";
      squares[next1].style.background = "none";
      next1--;

      emptyArray.forEach((arrayofLetters, index, array) => {
        arrayofLetters.pop();
      });

      console.log(emptyArray);
    } else {
      firstWord(e);
      secondWord(e);
      thirdWord(e);
      fourthWord(e);
      fifthWord(e);
      lastWord(e);
    }
  }
});
