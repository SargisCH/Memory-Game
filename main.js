function createBoxes(){
    let boxArr = [];
    let emptyBoxes = [];
    let el;
    let emptyEl;
    let boxSymbols = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J" ]
    let randomChoice;
    let rightMarginEmpty = 0;
    let topMarginEmpty = 0;
    let rightMarginLetter = 0;
    let topMarginLetter = 0;
    let arrayCheck = [];
    let arrayCheckRotate = [];
    for(let i = 1; i < 21; ++i ){
        emptyEl = document.createElement("div");
        emptyEl.className = "empty_boxes"; 
        emptyEl.style.left = rightMarginEmpty + 'px';
        emptyEl.style.top = topMarginEmpty + 'px';
        $("#container").append(emptyEl);
        emptyBoxes.push(emptyEl);
        if(rightMarginEmpty === 240 ){
            rightMarginEmpty = 0;
            topMarginEmpty += 60;
        }else{
            rightMarginEmpty += 60;
        }
    }
    for(let i = 1; i < 21; ++i ){
        el = document.createElement("div");
        el.className = "letter_boxes";
        el.style.left = rightMarginLetter + 'px';
        el.style.top = topMarginLetter + 'px';
        $("#container").append(el);
        boxArr.push(el);
        if(rightMarginLetter === 240 ){
            rightMarginLetter = 0;
            topMarginLetter += 60;
        }else{
            rightMarginLetter += 60;
        }
    }
    for (let i in emptyBoxes ){
        emptyBoxes[i].addEventListener("click", function(){
            let index = emptyBoxes.indexOf(emptyBoxes[i]);
            if(arrayCheck.length < 2){
                arrayCheck.push(boxArr[index].innerHTML);
                emptyBoxes[index].style.transform = "rotatey(180deg)";
                boxArr[index].style.transform = "rotatey(360deg)"; 
            }       
            console.log(arrayCheck)
                arrayCheckRotate.push(emptyBoxes[index],boxArr[index]);
            
                
            if(arrayCheck.length == 2 && arrayCheck[0] == arrayCheck[1]){
                console.log(true);
                    arrayCheck = [];
                arrayCheckRotate = [];
            }else if(arrayCheck.length == 2 && arrayCheck[0] !== arrayCheck[1]){
                    arrayCheck = [];
                for( let j = 0; j < arrayCheckRotate.length; ++j ){
                    if(j % 2 !== 0){
                        setTimeout(function(){
                            arrayCheckRotate[j].style.transform = "rotatey(180deg)";  
                        },1000)   
                    }else{
                        setTimeout(function(){
                            arrayCheckRotate[j].style.transform = "rotatey(360deg)";  
                        },1000)
                            
                    }
                }          
                console.log(arrayCheckRotate);
                // setTimeout(function(){
                //     arrayCheckRotate = [] 
                // },1100) 
            }
        })
    }
     for(let i in boxArr){
        randomChoice = Math.floor(Math.random() * boxSymbols.length)
        boxArr[i].innerHTML = boxSymbols[randomChoice]; 
        boxSymbols.splice(randomChoice,1)
     }
}
createBoxes();