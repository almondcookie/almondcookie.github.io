arrayImages=["images/tractor.jpg","images/tractor.jpg","images/candles.jpg","images/candles.jpg","images/gate.jpg","images/gate.jpg","images/group.jpg","images/group.jpg","images/leaves.jpg","images/leaves.jpg","images/plant.jpg","images/plant.jpg","images/shoes.jpg","images/shoes.jpg","images/think.jpg","images/think.jpg"]
firstSquarePicked=[99,99]
squaresMatched=[]
howManyMatched=0

function reset(evt){

    evt.preventDefault()
 
    // Clear Gameboard
    allSquares=document.querySelectorAll(".sq")
    for (i=0;i<allSquares.length;i++){
        allSquares[i].children[0].outerHTML = '<img src="images/colorful.jpeg" alt="Memory" style="width:120px;height:120px;">'
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
    if (howManyMatched == (arrayImages.length)/2){
        document.querySelector("h2").innerText= "YOU WON"
    }     
}

function displayNumber(evt){
    evt.preventDefault()
    const currentIndex = evt.path[1].id
    const currentImage = arrayImages[currentIndex]
    const previousIndex = firstSquarePicked[0]
    const previousImage = firstSquarePicked[1]
    evt.target.outerHTML = '<img src='+arrayImages[currentIndex]+' alt="Memory" style="width:120px;height:120px;">'

    // Check if the square has already found a match
    if (!squaresMatched.includes(currentIndex)){
        // starting with comparisons again
        if (firstSquarePicked[0] == 99){
            firstSquarePicked[0] = currentIndex
            firstSquarePicked[1]= currentImage
        // CHeck if no match   
        } else if (previousImage !== currentImage){
                //Give the user some time to view the images before cleared
                setTimeout(function(){
                    // Clear previous image from gameboard
                    document.querySelector('#' + CSS.escape(previousIndex)+" img").outerHTML = '<img src="images/colorful.jpeg" alt="Memory" style="width:120px;height:120px;">'

                    // Clear current text from gameboard
                    document.querySelector('#' + CSS.escape(currentIndex)+" img").outerHTML = '<img src="images/colorful.jpeg" alt="Memory" style="width:120px;height:120px;">'
                },600)

                firstSquarePicked[0]=99
                firstSquarePicked[1]=99
            // check for match
        } else if(previousImage == currentImage){
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
