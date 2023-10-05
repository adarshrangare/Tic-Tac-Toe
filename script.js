console.log("Script Started");

let grid = document.querySelectorAll("input");

grid = Array.from(grid);

// console.log(grid);
let clickCount = 0;
let firstTurn = true;

const winCombination = [
  [0,1,2],
  [0, 21, 31],
  [11, 22, 33],
  [21, 22, 23],
  [31, 32, 33],
  [21, 22, 23],
  [31, 32, 33],
  [11, 21, 31]
];

// const gameBoard = [['','',''],['','',''],['','','']];

let gameBoard = ['0','1','2',
                   '3','4','5',
                   '6','7','8'];



grid.map((gridEle) => {

  gridEle.addEventListener("click", (e) => {

    // console.log(e);

    console.log(e.target);


    if (firstTurn) {
      e.target.value = 'X';
      firstTurn = false;
      gameBoard[Number(e.target.id)] = 'X';
    } else {
      e.target.value = 'O';
      firstTurn = true;
      gameBoard[Number(e.target.id)] = 'O';
    }
    clickCount++;

    e.target.setAttribute("disabled", "");
    // console.log(clickCount);
    
    console.log(gameBoard);

    setTimeout(checkWinner,0);

    // if(clickCount>=9){

    // }

  });
})

// console.log(gameBoard);

// Check Winner

// function draw(){


// }

var Winner = '';

function checkWinner(){

      if(gameBoard[0] == gameBoard[1] && gameBoard[1]==gameBoard[2]){

          Winner = gameBoard[0];
          endGame();
          return true ;         
      }
      if(gameBoard[0] == gameBoard[3] && gameBoard[3]==gameBoard[6]){

          Winner = gameBoard[0];
          endGame();
          return true ;
      }
      if(gameBoard[0] == gameBoard[4] && gameBoard[4]==gameBoard[8]){

        Winner = gameBoard[0];
          endGame();
          return true;
    }

      if(gameBoard[1] == gameBoard[4] && gameBoard[4]==gameBoard[7]){

          Winner = gameBoard[1];
          endGame();
          return true;
      }

      if(gameBoard[2] == gameBoard[5] && gameBoard[5]==gameBoard[8]){

          Winner = gameBoard[2];
          endGame();
          return true;
      }
      if(gameBoard[2] == gameBoard[4] && gameBoard[4]==gameBoard[6]){

          Winner = gameBoard[2];
          endGame();
          return true;
      }

      if(gameBoard[3] == gameBoard[4] && gameBoard[4]==gameBoard[5]){

          Winner = gameBoard[3];
          endGame();
          return true;
      }

      if(gameBoard[6] == gameBoard[7] && gameBoard[7]==gameBoard[8]){

          Winner = gameBoard[6];
          endGame();
          return true;
      }

      return false;

}
  
const rH = document.createElement("h1");
const re = document.getElementById("result");
function endGame(){

  // window.alert(`${Winner} is won the Game`);

  

  // console.log(result);

  // re.classList.add("show");
  re.classList.toggle("show");

  // result.style.display = "block";

  document.getElementById("cut").classList.add("show");

  

  rH.innerHTML = `${Winner} has won the round`;

  
  re.appendChild(rH);


  // return;
}


document.getElementById("cut").addEventListener("click",()=>{

  // re.classList.remove("hide");
    re.classList.toggle("show");
  document.getElementById("cut").classList.add("hide");

  reset();
  re.remove(rH);

  for(let i=0;i<9;i++){
    gameBoard[i] = i;
  }

});



// RESET BUTTON

const resetbtn = document.querySelector("#reset");
// console.log(resetbtn);

function reset(){
  
    console.log("Reset");
    grid.map((gridEle) => {
      gridEle.removeAttribute("disabled");
      gridEle.value = "";
    })
  
    for(let i=0;i<9;i++){
      gameBoard[i] = i;
    }
}

resetbtn.addEventListener("click", reset);