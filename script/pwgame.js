const colors =['white','red', 'blue', 'green', 'yellow', 'orange', 'black']
const skynetCode = []
const playerGuess = []
const startButton = document.getElementById('start')


const getSkynetCode = () => {
    for(let i =0; i < 5; i++){
        let j = Math.floor(Math.random() * 5) + 1
        skynetCode.push(j);
        console.log(j)
        console.log(skynetCode)
        
        console.log(colors[j])
        document.getElementsByClassName("circle")[i].style.backgroundColor=colors[j]
    }
}


startButton.addEventListener('click', getSkynetCode, {once:true})



