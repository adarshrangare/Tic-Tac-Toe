console.log("Script Started");

let grid = document.querySelectorAll("input");

grid = Array.from(grid);

console.log(grid);
let clickCount = 0;
let firstTurn = true;

const winCombination = [
  [11, 12, 13],
  [11, 21, 31],
  [11, 22, 33],
  [21, 22, 23],
  [31, 32, 33],
  [21, 22, 23],
  [31, 32, 33],
  [11, 21, 31]
];

grid.map((gridEle) => {

  gridEle.addEventListener("click", (e) => {

    // console.log(e);

    console.log(e.target);


    if (firstTurn) {
      e.target.value = 'X';
      firstTurn = false;

    } else {
      e.target.value = 'O';
      firstTurn = true;
    }
    clickCount++;

    e.target.setAttribute("disabled", "");
    console.log(clickCount);
    

  });
})



// Check Winner

  




// RESET BUTTON

const resetbtn = document.querySelector("#reset");
console.log(resetbtn);

resetbtn.addEventListener("click", (e) => {
  console.log("clicked");
  grid.map((gridEle) => {
    gridEle.removeAttribute("disabled");
    gridEle.value = ""
  })

});