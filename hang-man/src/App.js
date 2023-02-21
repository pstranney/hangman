// Import the required functions, files and components
import React, { useState } from "react";
import Hangman from "./components/Hangman";
import { Provider } from 'react-redux';
import store from './components/Store.js';
import "./App.css";

function App() {
  // Set up the state for the current word being guessed and the guessed letters
  const [currentWord, setCurrentWord] = useState("hangman");
  const [guesses, setGuesses] = useState([]);

  // Function to restart the game
  function restartGame() {
    // Set variables to default values
    setCurrentWord('');
    setGuesses([]);
  }

  return (
    // Wrapp the App with Provider from the react-redux library
    <Provider store={store}>
      <div align="center">
        <img src="" />
        {/* Pass the current word, guessed letters and setGuesses function to the Hangman component */}
        <Hangman word={currentWord} guesses={guesses} setGuesses={setGuesses} />
      </div>
    </Provider>
  );
}

export default App;