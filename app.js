// Get all the variables.

const stopWatchDOM = document.querySelector('.container');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

 /* let x = 0; */

let aValue = 0;
let bValue = 0;
let cValue = 0;
let dValue = 0;
let eValue = 0;
let fValue = 0;

let active = false;
/* let count = 0; */

// SETTING UP FUNCTIONS

/* -----function to display the stopwatch---- */
function displayClock(){
  stopWatchDOM.innerHTML = `
    <div class="stopWatch">
      <span id="a">${aValue}</span>
      <span id="b">${bValue}:</span>
      <span id="c">${cValue}</span>
      <span id="d">${dValue}:</span>
      <span id="e">${eValue}</span>
      <span id="f">${fValue}</span>
    </div>
  `;
};

/* --setting up function to control stopwatch values */
function stopWatchController (){
  if ((fValue < 10) && (active == true)){
    
    displayClock();
    fValue = fValue + 1;
    
    /* ---set eValue--- */
    if((fValue == 10) && (eValue < 6) && (active == true)){
      fValue = 0;
      eValue += 1;   
    }
    /* ---set dValue--- */
    if((eValue == 6) && (dValue < 10) && (active == true)){
      fValue = 0;
      eValue = 0;
      dValue += 1;
    }
    /* ---set cValue--- */
    if((dValue == 10) && (cValue < 6) && (active == true)){
      fValue = 0;
      eValue = 0;
      dValue = 0;
      cValue += 1;   
    }
    /* ---set bValue--- */
    if((cValue == 6) && (bValue < 10) && (active == true)){
      fValue = 0;
      eValue = 0;
      dValue = 0;
      cValue = 0;
      bValue += 1;

      /* --CHECK IF IT'S 24hrs ALREADY */
      if((aValue == 2) && (bValue == 4) && (active == true)){
        resetClock();
        stopWatchController();
      }
    }
    /* ---set aValue--- */
    if((bValue == 10) && (aValue < 2) && (active == true)){
      fValue = 0;
      eValue = 0;
      dValue = 0;
      cValue = 0;
      bValue = 0;
      aValue += 1;
    }

    /* console.log (fValue); */
    
    setTimeout("stopWatchController()", 1000);
  }
}

/* ----- function to reset the stopwatch ------*/
function resetClock() {
  active = false;
  aValue = 0;
  bValue = 0;
  cValue = 0;
  dValue = 0;
  eValue = 0;
  fValue = 0;
  displayClock();
};

/* -----Setting up what the buttons will do */

/* ---START BUTTON--- */
startBtn.addEventListener('click', () => {
  if(active == false){
    active = true;
    stopWatchController();
    /* console.log(active); */
  }
});

/* ---STOP BUTTON--- */
stopBtn.addEventListener('click', ()=> active = false);

/* ---RESET BUTTON--- */
resetBtn.addEventListener('click', ()=>{
  resetClock();
});


document.addEventListener('DOMContentLoaded', ()=>{
  displayClock();

})