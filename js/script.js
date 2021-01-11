console.log("In javascript")
arrayNumbers=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7]
firstSquarePicked=[99,99]
squaresMatched=[]


// Got sleep function from https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


function displayNumber(evt){
    evt.preventDefault()
    //console.log(evt)
    //console.log(evt.target.id)
    const currentIndex = evt.target.id
    const currentNumber = arrayNumbers[currentIndex]
    const previousIndex = firstSquarePicked[0]
    const previousNumber = firstSquarePicked[1]
    evt.target.innerText= currentNumber
    // Check for a match.
    // Check if a previous cell has been checked
    // If not, put location and value of the cell
    // Then next time around, can compare firstSquarePicked to the current value

    // Check if the square has already found a match
    if (!squaresMatched.includes(currentIndex)){
        // starting with comparisons again
        if (firstSquarePicked[0] == 99){
            firstSquarePicked[0] = evt.target.id  //Store which square
            firstSquarePicked[1] = currentNumber //Store the number
        // CHeck if no match   
        } else if (previousNumber !== currentNumber){
                // const previousNumber = document.querySelector('#' + CSS.escape(previousIndex)).innerText
                // console.log("previousNumber: " + previousNumber)            
                console.log(`no match. ${currentNumber} Not Equal ${previousNumber}. Previous location: ${previousIndex}`)
                //sleep(2000)
                // Clear previous text from gameboard
                document.querySelector('#' + CSS.escape(previousIndex)).innerText = ""
                // Clear current text from gameboard
                evt.target.innerText = ""
                firstSquarePicked[0]=99
                firstSquarePicked[1]=99
            // check for match
        } else if(previousNumber == currentNumber){
            console.log("Match current and previous " + currentNumber + " " + previousNumber)
            squaresMatched[currentIndex]=currentIndex
            squaresMatched[previousIndex]=previousIndex
            firstSquarePicked[0]=99
            firstSquarePicked[1]=99

        }
    }
}

function reset(evt){
    evt.preventDefault()
    allSquares=document.querySelectorAll(".sq")
    console.log("allsq " + allSquares.length + " squaresMatched " + squaresMatched.length)
    // Clear Gameboard
    for (i=0;i<allSquares.length;i++){
        allSquares[i].innerText=""
    }

    //Clear array that keeps track of matches squares
    for (i=0;i<squaresMatched.length;i++){
        squaresMatched[i] = ""
    }

    firstSquarePicked[0]=99
    firstSquarePicked[1]=99
      
}

let sq=document.querySelector(`#${CSS.escape("0")}`);
sq.addEventListener("click", displayNumber)
// .addEventListener("click", displayNumber())
//console.log(sq)

let sq1 = document.querySelector(`#${CSS.escape("1")}`);
sq1.addEventListener("click",displayNumber)

let sq2 = document.querySelector(`#${CSS.escape("2")}`);
sq2.addEventListener("click",displayNumber)

let sq3 = document.querySelector(`#${CSS.escape("3")}`);
sq3.addEventListener("click",displayNumber)

let sq4 = document.querySelector(`#${CSS.escape("4")}`);
sq4.addEventListener("click",displayNumber)

let sq5 = document.querySelector(`#${CSS.escape("5")}`);
sq5.addEventListener("click",displayNumber)

let sq6 = document.querySelector(`#${CSS.escape("6")}`);
sq6.addEventListener("click",displayNumber)

let sq7 = document.querySelector(`#${CSS.escape("7")}`);
sq7.addEventListener("click",displayNumber)

let sq8 = document.querySelector(`#${CSS.escape("8")}`);
sq8.addEventListener("click",displayNumber)

let sq9 = document.querySelector(`#${CSS.escape("9")}`);
sq9.addEventListener("click",displayNumber)

let sq10 = document.querySelector(`#${CSS.escape("10")}`);
sq10.addEventListener("click",displayNumber)

let sq11 = document.querySelector(`#${CSS.escape("11")}`);
sq11.addEventListener("click",displayNumber)

let sq12 = document.querySelector(`#${CSS.escape("12")}`);
sq12.addEventListener("click",displayNumber)

let sq13 = document.querySelector(`#${CSS.escape("13")}`);
sq13.addEventListener("click",displayNumber)

let sq14 = document.querySelector(`#${CSS.escape("14")}`);
sq14.addEventListener("click",displayNumber)

let sq15 = document.querySelector(`#${CSS.escape("15")}`);
sq15.addEventListener("click",displayNumber)

button=document.querySelector("button")
button.addEventListener("click",reset)