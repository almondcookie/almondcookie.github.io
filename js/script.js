console.log("In javascript")
arrayNumbers=["images/bamboo.jpg","images/bamboo.jpg","images/candles.jpg","images/candles.jpg","images/gate.jpg","images/gate.jpg","images/group.jpg","images/group.jpg","images/leaves.jpg","images/leaves.jpg","images/plant.jpg","images/plant.jpg","images/shoes.jpg","images/shoes.jpg","images/think.jpg","images/think.jpg"]
firstSquarePicked=[99,99]
squaresMatched=[]
howManyMatched=0


// Got sleep function from https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  function reset(evt){
    // If this function is called w/o an event handler, 
    // skip anything related to event handler
    if (evt){
        evt.preventDefault()
    }
    // Clear Gameboard
    allSquares=document.querySelectorAll(".sq")
    for (i=0;i<allSquares.length;i++){
        // allSquares[i].innerText=""
        allSquares[i].outerHTML = '<img src="game/images/colorful.jpg" alt="Memory" style="width:120px;height:120px;">'
    }
    //Clear array that keeps track of matches squares
    for (i=0;i<squaresMatched.length;i++){
        squaresMatched[i] = ""
    }
    //Clear "You won" if displayed
    document.querySelector("h2").innerText = ""
    howManyMatched=0
    firstSquarePicked[0]=99
    firstSquarePicked[1]=99      
}

function checkIfWon(){
    if (howManyMatched == (arrayNumbers.length)/2){
        //reset()
        document.querySelector("h2").innerText= "YOU WON"
    }     
}

function displayNumber(evt){
    evt.preventDefault()
    // const currentIndex = evt.target.id
    const currentIndex = evt.path[1].id
    const currentNumber = arrayNumbers[currentIndex]
    const previousIndex = firstSquarePicked[0]
    const previousNumber = firstSquarePicked[1]
    // console.log(evt)
    // console.log(evt.path.1)
    // console.log(evt.Array[1])
    //console.log(evt.path.Array[1])
    // console.log(document.getElementById(evt.path[1]))

    //wks
    // console.log(evt.path[1].id)
    // let theDiv = evt.path[1]
    // console.log(theDiv)
    // let theIndex = theDiv.id
    // console.log(theIndex)

    // let theStr = theDiv.substring(20,1)
    // console.log(theStr)
    // let theIndex = document.querySelector(theDiv)
    //evt.target.currentSrc = "file:///Users/Betsy/coding/work/deere-6/project1/game/images/bamboo.jpg"
    //evt.target.outerHTML = '<img src="game/images/think.jpg" alt="Memory" style="width:120px;height:120px;">'
    //console.log(arrayNumbers[0])
    evt.target.outerHTML = '<img src='+arrayNumbers[currentIndex]+' alt="Memory" style="width:120px;height:120px;">'
    // evt.target.innerText= currentNumber
    // document.querySelector(evt.target.img).style.display='none'

    // Check if the square has already found a match
    if (!squaresMatched.includes(currentIndex)){
        // starting with comparisons again
        if (firstSquarePicked[0] == 99){
            // firstSquarePicked[0] = evt.target.id  //Store which square
            firstSquarePicked[0] = currentIndex
            // firstSquarePicked[1] = currentNumber //Store the number
            firstSquarePicked[1]= currentNumber
        // CHeck if no match   
        } else if (previousNumber !== currentNumber){
                // Clear previous text from gameboard
                // document.querySelector('#' + CSS.escape(previousIndex)).innerHTML = ""
                document.querySelector('#' + CSS.escape(previousIndex)).outerHTML = '<img src="game/images/colorful.jpg" alt="Memory" style="width:120px;height:120px;">'

                // Clear current text from gameboard
                // evt.target.innerText = ""
                // console.log(evt.target)
                // evt.target.outerHTML = '<img src="game/images/colorful.jpg" alt="Memory" style="width:120px;height:120px;">'
                evt.target = '<img src="game/images/colorful.jpg" alt="Memory" style="width:120px;height:120px;">'

                // allSquares[i].innerText=""

                firstSquarePicked[0]=99
                firstSquarePicked[1]=99
            // check for match
        } else if(previousNumber == currentNumber){
            //console.log("Match current and previous " + currentNumber + " " + previousNumber)
            squaresMatched[currentIndex]=currentIndex
            squaresMatched[previousIndex]=previousIndex
            firstSquarePicked[0]=99
            firstSquarePicked[1]=99
            howManyMatched+=1
            checkIfWon()      
        }

    }        
}



let sq0=document.querySelector(`#${CSS.escape("0")}`);
// console.log(`sq0: ${sq0}`)
sq0.addEventListener("click", displayNumber)

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
