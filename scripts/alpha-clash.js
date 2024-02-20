// function play(){
//     //step 1: Hide the Home screen.to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     //show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }

const audio = new Audio();

let isGameOn = false;

const artboard = document.getElementById('art-board');
const modalBox = document.getElementById('modal-box');

function handleKeyboardButtonPress(event){

    if(isGameOn == false) return;
    const playerPressed = event.key;

    //stop the game is pressed 'Esc'
    if(playerPressed === 'Escaped'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check matched or not
    if(playerPressed === expectedAlphabet){
        console.log("You get a point");
        audio.src = '../audio/success.mp3';
        audio.play();
        const currentScore = getTextElementvalueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);


        //update score:
        //1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // //2.increase the score by 1
        const newScore = currentScore + 1;
        
        // //3.show the update score
        // currentScoreElement.innerText = newScore;


        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        audio.src = '../audio/wrong.mp3'
        audio.play();

        console.log("You missed you lost a life");

        

        const currentLife = getTextElementvalueById('current-life');
        const updatedLife = currentLife - 1;


        const lifePercentend = (updatedLife / 5) * 100;

        artboard.style.background = `linear-gradient(#FFFFFFB3 ${lifePercentend}%,red)`


        setTextElementValueById('current-life',updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        // //step 1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifetext = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifetext);

        // //step-2:
        // const newLife = currentLife - 1;

        // //step-3:
        // currentLifeElement.innerText = newLife;
    }
}
// capture keybord key press
document.addEventListener('keyup',handleKeyboardButtonPress);

function continueGame(){
    //step -1:generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log("Your Random Alphabet",alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set backgraund color
    setBackgroundColorById(alphabet)
}

function play(){
    //Hide everting show only the playground
    hiddenElementById('home-screen');
    showElementById('play-ground');
    isGameOn = true;
    //reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score' , 0);



    continueGame();
}

function gameOver(){
    hiddenElementById('play-ground');
    showElementById('final-score');
    //update final score
    // 1 get the final score

    const lastScore = getTextElementvalueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    // clear the last highlight alphabet
    const currentAlphabet = getElementById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
    isGameOn = false;

    artboard.style.background = `linear-gradient(#FFFFFFB3 100%,red)`

}


function modalOpen(event){
    if(event.clientY < 20){
        modalBox.style.display = "flex";
    }
}

function closeModel(){
    modalBox.style.display = "none"
}


document.body.onmousemove = modalOpen;