const colors =['white','red', 'blue', 'green', 'yellow', 'orange', 'black'];
const resultColors =['black', 'gray', 'red']
const skynetCode = [];
const playerGuess = [0,0,0,0,0];
const resultArray = [0,0,0,0,0]
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
    document.getElementById("skynethidden").style.display = "inline-block"
    document.getElementById("skynet").style.display = "none"
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
    document.getElementById(selection).style.backgroundColor = colors[colorId];    
    playerGuess[num-1] = colorId;   
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
    let resultPosition =''
    let resultfull =''
    for ( let i=0; i < 5; i++){
 
        for(let j=0; j < 5; j++){
            resultPosition = positionId()
            resultfull= "result" + resultPosition 
            if(playerGuess[i]===skynetCode[i]){
                resultArray[i]=0
            }else if(skynetCode.some(ele=>playerGuess[i]===ele)){
                resultArray[i]=1
            }else{
                resultArray[i]=2
            }
        }   
    }
    console.log(resultfull)
    
    for (let k = 0; k<5; k++){
        let position = "result" + turn +  idLetter[k]
        if(resultArray[k] == 0){
            
            console.log(position)
            document.getElementById(position).style.backgroundColor = 'black'
        }else if(resultArray[k] == 1){
            document.getElementById(position).style.backgroundColor= 'gray'
        }else{
            document.getElementById(position).style.backgroundColor= 'red'
        }   
    }       
    
    newTurn()
  
}

startButton.addEventListener('click', getSkynetCode, {once:true});
redButton.addEventListener('click', redButton);
blueButton.addEventListener('click', blueButton);
greenButton.addEventListener('click', greenButton);
yellowButton.addEventListener('click', yellowButton);
orangeButton.addEventListener('click', orangeButton);
resultId[0].addEventListener('click',checkResults );


