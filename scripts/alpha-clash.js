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

function continueGame(){
    //step -1:generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log("Your Random Alphabet",alphabet);

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