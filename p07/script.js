// Grab DOM elements from HTML
const word = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-Letters');
const popup = document.getElementById('popup-container');
const message = document.getElementById('win-lose');
const restartButton = document.getElementById('restart');
const notification = document.getElementById('slider-container');

const hangmanParts = document.querySelectorAll('.hangman-part');

// An array of word to select from
const wordPool = ['javascript','computer','hangman','facebook'];

// Selecting a word at random from the pool 
let selectedWord = wordPool[Math.floor(Math.random() * wordPool.length)];

// Array to classify the input of the user 
const correctLetters = [];
const incorrectLetters = [];

// Function to display the word on the screen
function displaySelectedWord() {
    word.innerHTML = `
        ${selectedWord
            .split('')
            .map(
                letter => `
                    <span class="letter">
                        ${correctLetters.includes(letter) ? letter : '' }
                    </span>
                `
            )
            .join('')
        }
    `;

    const wordText = word.innerText.replace(/\n/g, '');   

    if ( wordText === selectedWord ) {
        message.innerText = 'You Won!';
        popup.style.display = 'flex';
    }
};

// Function to display the sliding notification
function showNotification() { 
    notification.classList.add('show');

    setTimeout( () => {notification.classList.remove('show');}, 3000);
}

// Function to update incorrect letters
function updateWrongLetters() {
    // Function to update Incorrect Letters
    wrongLetters.innerHTML = `
        ${incorrectLetters.Length > 0 ? `<p>Wrong</p>` : ''}
        ${incorrectLetters.map( letter => `<span>${letter}</span>`)}    
    `;
    // Display Hangman part on ncorrect Letters Input
    hangmanParts.forEach( () => {
        const errors = incorrectLetters.length;

        if ( index < errors ) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    //Show popup if lost
    if(incorrectLetters.length === hangmanParts.length)
        message.innerText = 'You Lost!';
        popup.style.display = 'flex';
}

// Event Handler
// 1. Event Handler for Keyboard Button Press
window.addEventListener('keydown', e => {
    if ( e.keycode >= 65 && e.keycode <= 90 ) {
        const letter = e.key;

        if ( selectedWord.includes(letter) ) {
            if(!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displaySelectedWord();
            } else {
                showNotification();
            }
        } else {
            if(!incorrectLetters.includes(letter)) {
                incorrectLetters.push(letter);
                updateWrongLetters();
            } else {
                showNotification();
            }
        }

    }
})

// 2.Event Listner for Restart Button
restartButton.addEventListener('click', () => {
    //Empty Array
    correctLetters.splice(0);
    incorrectLetters.splice(0);

    // Get the new selected word from the pool
    selectedWord = wordPool[Math.floor(Math.random() * wordPool.length)];

    displaySelectedWord();

    // Clear the wrong letters DIV
    updateWrongLetters();

    // Hide the popup
    popup.style.display = 'none';     

})

displaySelectedWord();