// Import the required functions and image files
import React, { useEffect } from "react";
import State1 from '../images/state1.GIF';
import State2 from '../images/state2.GIF';
import State3 from '../images/state3.GIF';
import State4 from '../images/state4.GIF';
import State5 from '../images/state5.GIF';
import State6 from '../images/state6.GIF';
import State7 from '../images/state7.GIF';
import State8 from '../images/state8.GIF';
import State9 from '../images/state9.GIF';
import State10 from '../images/state10.GIF';
import State11 from '../images/state11.GIF';
import { useSelector, useDispatch } from 'react-redux';

const Hangman = () => {
  // Get the state from store
  const word = useSelector(state => state.word);
  const guesses = useSelector(state => state.guesses);
  const image = useSelector(state => state.image);
  const incorrectGuesses = useSelector(state => state.incorrectGuesses);

  const dispatch = useDispatch();

  // UseEffect to check if the game is over
  useEffect(() => {
    //if user has used all of their gueses then display an alert and restart the game
    if (incorrectGuesses > 11) {
      alert(`You have no more guesses left, it was nice knowing you! (PS, the word was ${word})`);
      handleRestart();
    }
    //if the user has guess all of the letters then display an alert and reset
    if (word.split("").every((letter) => guesses.includes(letter))) {
      alert("Congratulations! You've won!");
      handleRestart();
    }
  }, [incorrectGuesses, guesses, word]);

  //function to handle each guess
  const handleGuess = (letter) => {
    //if letter is in the word the dispatch an action to update the store with the guessed letter
    if (word.includes(letter)) {
      dispatch({ type: "GUESS_LETTER", payload: { letter } });
    }
    //otherwise dispatch an action to update the store using the INCORRECT_GUESS type
    else {
      dispatch({ type: "INCORRECT_GUESS" });
    }
  };
  //function to restart the game
  const handleRestart = () => {
    dispatch({ type: 'RESTART_GAME' });
  };

  //take the word and split it into an array of letters, if the guessed letters are in the word then display the letter, otherwise display _
  const guessedWord = word
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join(" ");

  //change the image shown using a switch statement which looks at the number of incorrect guesses made
  let hangmanImage;
  switch (incorrectGuesses) {
    case 1:
      hangmanImage = State1;
      break;
    case 2:
      hangmanImage = State2;
      break;
    case 3:
      hangmanImage = State3;
      break;
    case 4:
      hangmanImage = State4;
      break;
    case 5:
      hangmanImage = State5;
      break;
    case 6:
      hangmanImage = State6;
      break;
    case 7:
      hangmanImage = State7;
      break;
    case 8:
      hangmanImage = State8;
      break;
    case 9:
      hangmanImage = State9;
      break;
    case 10:
      hangmanImage = State10;
      break;
    case 11:
      hangmanImage = State11;
      break;
    default:
      hangmanImage = State1;
      break;
  }
  
  return (
    <div className="container">
  <h1>Hangman</h1>
  <h2>The game of life...or death</h2>
  <img src={hangmanImage} alt="Hangman" />
  <p className="guessed">{guessedWord}</p>
  <p>Incorrect Guesses: {incorrectGuesses}</p>
  <div className="button-container">
      <button onClick={() => handleGuess("a")}>A</button>
      <button onClick={() => handleGuess("b")}>B</button>
      <button onClick={() => handleGuess("c")}>C</button>
      <button onClick={() => handleGuess("d")}>D</button>
      <button onClick={() => handleGuess("e")}>E</button>
      <button onClick={() => handleGuess("f")}>F</button>
      <button onClick={() => handleGuess("g")}>G</button>
      <button onClick={() => handleGuess("h")}>H</button>
      <button onClick={() => handleGuess("i")}>I</button>
      <button onClick={() => handleGuess("j")}>J</button>
      <button onClick={() => handleGuess("k")}>K</button>
      <button onClick={() => handleGuess("l")}>L</button>
      <button onClick={() => handleGuess("m")}>M</button>
      <button onClick={() => handleGuess("n")}>N</button>
      <button onClick={() => handleGuess("o")}>O</button>
      <button onClick={() => handleGuess("p")}>P</button>
      <button onClick={() => handleGuess("q")}>Q</button>
      <button onClick={() => handleGuess("r")}>R</button>
      <button onClick={() => handleGuess("s")}>S</button>
      <button onClick={() => handleGuess("t")}>T</button>
      <button onClick={() => handleGuess("u")}>U</button>
      <button onClick={() => handleGuess("v")}>V</button>
      <button onClick={() => handleGuess("w")}>W</button>
      <button onClick={() => handleGuess("x")}>X</button>
      <button onClick={() => handleGuess("y")}>Y</button>
      <button onClick={() => handleGuess("z")}>Z</button>
      </div>
  <button className="reset-button" onClick={handleRestart}>Restart</button>
<br/><br/>
  <details>
  <summary>The Rules of Hangman</summary>
  <ul>
        <li>When the game is started a word is selected at random.</li>
        <li>You must guess the letters one at a time to try and guess the word.</li>
        <li>If the guessed letter is in the word, the letter will appear in its correct place.</li>
        <li>If the guessed letter is not in the word you get a strike and a part of the stick figure is drawn.</li>
        <li>If you can guess all of the letters before the hangman is fully drawn then you win.</li>
        <li>If the hangman is fully drawn before the word is guessed then you lose, the player who thought of the word wins.</li>
      </ul>
</details>
</div>
  );
};

export default Hangman;
