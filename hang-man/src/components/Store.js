//import the required functions and components
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import words from './Words';

//set the initial state
const initialState = {
  word: 'hangman',
  guesses: [],
  image: 'State1',
  incorrectGuesses: 0,
};

  //this runs on the first load, randomly selects a word from the returned words array
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex].toLowerCase();
  initialState.word = randomWord;


// This function takes in the previous state and an action, and returns the new state based on the action type.
const gameReducer = (state = initialState, action) => {

  // Depending on the action type, the reducer will modify the state in different ways.
  switch (action.type) {

    // If the action type is 'GUESS_LETTER', it returns the new state with the guessed letter added to the list of guesses.
    case 'GUESS_LETTER':
      return {
        ...state,
        guesses: [...state.guesses, action.payload.letter],
      };

    // If the action type is 'INCORRECT_GUESS', it returns the new state with the number of incorrect guesses incremented and the image updated.
    case 'INCORRECT_GUESS':
      const newIncorrectGuesses = state.incorrectGuesses + 1;
      const newImage = `State${newIncorrectGuesses}`;
      return {
        ...state,
        incorrectGuesses: newIncorrectGuesses,
        image: newImage,
      };

    // If the action type is 'RESTART_GAME', it returns the new state with a new random word and the other properties reset to their initial values.
    case 'RESTART_GAME':
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex].toLowerCase();
      return {
        ...initialState,
        word: randomWord,
      };

    // If the action type doesn't match any of the cases, it returns the original state without any changes.
    default:
      return state;
  }
};

const store = createStore(gameReducer, applyMiddleware(thunk));

export default store;