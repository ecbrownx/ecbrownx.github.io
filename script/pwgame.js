const colors =['white','red', 'blue', 'green', 'yellow', 'orange', 'black'];
const resultColors =['black', 'gray', 'red']
const skynetCode = [];
const playerGuess = [0,0,0,0,0];
let resultArray = [0,0,0,0,0];
//const winnerCheck = value => value == 0;
let turn = 0;
let colorId = 0;

const idLetter = ['A', 'B', 'C', 'D', 'E'];
const startButton = document.getElementById('start');
const positionNum = document.getElementById('positionselect');
const redButton = document.getElementById('redbutton');
const blueButton = document.getElementById('bluebutton');
const greenButton = document.getElementById('greenbutton');
const yellowButton = document.getElementById('yellowbutton');
const orangeButton = document.getElementById('orangebutton');
const turnNumber = document.getElementById('turnnumber');
const resultNumber = document.getElementsByClassName('result')
const resultId = document.getElementsByClassName('submitbtn')




const newTurn =() =>{
    turn++;
    turnNumber.innerHTML = turn;
}

const getSkynetCode = () => {
    //document.getElementById("skynethidden").style.display = "inline-block"
  // document.getElementById("skynet").style.display = "none"
    newTurn();
    for(let i =0; i < 5; i++){
        let j = Math.floor(Math.random() * 5) + 1;
            skynetCode.push(j);      
            document.getElementsByClassName("circle")[i].style.backgroundColor=colors[j];
    }
}

const checkTurnZero= () => {
    if (turn == 0){
        alert('Please Press Start Button To Begin');
    }
}


const positionSelect = ()=>{
    let input = positionNum.value;
    let num = Number(input);
    return input
}

const positionId = ()=>{   
    let num = positionSelect();
    let positionId = turn + idLetter[num-1];   
    /*document.getElementsByClassName("circleP")[positionId].style.backgroundColor=colors[num]*/;
    return positionId
}


redButton.onclick = ()=>{
    let num = positionSelect();
    let selection = positionId();
    colorId = 1;
    
  
    playerGuess[num-1] = colorId;  
    document.getElementById(selection).style.backgroundColor = colors[colorId];   
}

blueButton.onclick = ()=>{
    let num = positionSelect();
    let selection = positionId();
    colorId = 2;
    playerGuess[num-1] = colorId;
    document.getElementById(selection).style.backgroundColor = colors[colorId]; 
}

greenButton.onclick = ()=>{
    let num = positionSelect();
    let selection = positionId();
    colorId = 3;
    playerGuess[num-1] = colorId;
    document.getElementById(selection).style.backgroundColor = colors[colorId];   
}

yellowButton.onclick = ()=>{
    let num = positionSelect();
    let selection = positionId();
    colorId = 4;
    playerGuess[num-1] = colorId;
    document.getElementById(selection).style.backgroundColor = colors[colorId];
    
    
}

orangeButton.onclick = ()=>{
    let num = positionSelect();
    let selection = positionId();
    let colorId = 5;
    playerGuess[num-1] = colorId;
    document.getElementById(selection).style.backgroundColor = colors[colorId];
    
}

const checkResults =()=>{
    let position1= "correct" + turn
    let position2 = "wrong" + turn
    const correctColors = []
    let multiColors = false
    const filteredArrayOne = playerGuess.filter((value) => skynetCode.includes(value))
    const filteredArrayTwo = filteredArrayOne.filter((value, index) => filteredArrayOne.indexOf(value) === index)
    
    
    for (let i = 0; i < skynetCode.length; i++){
        
        if(playerGuess[i] == skynetCode[i]){
            correctColors.push(playerGuess[i]) 
            console.log(correctColors)     
        }
      
    
    }
   
    
    
    
        for (let i = 0; i <= filteredArrayOne.length; i++){
            const getFilterLength =playerGuess.filter((value) => value == i)
            if(getFilterLength.length >= 2 && getFilterLength <=4){
                multiColors = true
                console.log(getFilterLength)
                
                
            }
        console.log(getFilterLength)
        }
    

  
    
    
    
    console.log(playerGuess)
    console.log(skynetCode)
    console.log(correctColors)
    console.log(filteredArrayOne)
    console.log(filteredArrayTwo)
    console.log(multiColors)
    document.getElementById(position1).innerHTML = correctColors.length
    if (correctColors.length === 5 || filteredArrayOne.every(value => value === filteredArrayOne[0])){
        document.getElementById(position2).innerHTML = 0
    }
    else if (multiColors === true){
        document.getElementById(position2).innerHTML = filteredArrayTwo.length - correctColors.length + 1
    }else{
    document.getElementById(position2).innerHTML = filteredArrayOne.length - correctColors.length
    }

 
    if(correctColors.length == skynetCode.length){
        document.getElementById("skynethidden").style.display = "none"
        document.getElementById("skynet").style.display = "flex"
        alert("You won in " + turn +" turns")
        resultId[0].removeEventListener('click',checkResults );
    }else if (turn < 6){
        newTurn()
    }
    else{
        document.getElementById("skynethidden").style.display = "none"
        document.getElementById("skynet").style.display = "flex"
        alert("Skynet has won!")
        resultId[0].removeEventListener('click',checkResults );
    }

}
const resetGame = () =>{
    location.reload()
}

startButton.addEventListener('click', getSkynetCode, {once:true});
redButton.addEventListener('click', redButton);
blueButton.addEventListener('click', blueButton);
greenButton.addEventListener('click', greenButton);
yellowButton.addEventListener('click', yellowButton);
orangeButton.addEventListener('click', orangeButton);
resultId[0].addEventListener('click',checkResults );
document.getElementById('reset').addEventListener('click', resetGame)


