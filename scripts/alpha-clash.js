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

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check matched or not
    if(playerPressed === expectedAlphabet){
        console.log("You get a point");

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
        console.log("You missed you lost a life");



        const currentLife = getTextElementvalueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);



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
    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}