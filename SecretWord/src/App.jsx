import './App.css'
import { StartScreen } from './components/StartScreen'
import { useCallback, useEffect, useState } from 'react'
import { wordsList } from './data/words'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: "start"},
  { id: 2, name: "game"},
  { id: 3, name: "end"}
]

// o app é o que vai controlar todo o projeto
function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const[pickedWord, setPickedWord] = useState ("");
  const[pickedCategory, setPickedCategory] = useState("");
  const[letters, setLetters] = useState([]);

  const[guessedLetters, setGuessedLetters] = useState([]);
  const[wrongLetters, setWrongLetters] = useState([]);
  const[score, setScore] = useState(0);
  const[guesses, setGuesses] = useState(5)

  const pickedWordAndCategory = () => {
    //pegando categoria do data
    const categories = Object.keys(words);
    const categorys = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pegando palvra da categoria
    const word = words[categorys][Math.floor(Math.random() * words[categorys].length)];
    
    return{word, categorys};
  }

  // função para começar o jogo
  const startGame = () => {
    const { word, categorys } = pickedWordAndCategory();

    //tranformando variavel em um array
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setPickedWord(word);
    setPickedCategory(categorys);
    setLetters(wordLetters);
    setGuessedLetters([]);
    setWrongLetters([]);
    setGuesses(5);
    setScore(0);

    setGameStage(stages[1].name); 
  }

  // processamento da letra
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      const updatedGuessedLetters = [...guessedLetters, normalizedLetter];
      setGuessedLetters(updatedGuessedLetters);
      setScore(score + 10);

      const wordIsComplete = letters.every((wordLetter) =>
        updatedGuessedLetters.includes(wordLetter)
      );

      if (wordIsComplete) {
        setGameStage(stages[2].name);
      }
      return;
    }

    const updatedWrongLetters = [...wrongLetters, normalizedLetter];
    setWrongLetters(updatedWrongLetters);
    setGuesses(guesses - 1);

    if (guesses <= 1) {
      setGameStage(stages[2].name);
    }
  }

  // re-começar o jogo
  const retry = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
    setGuesses(5);
    setScore(0);
    setGameStage(stages[0].name);
  }


  return (
    <div>
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && (
        <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory} 
          letters={letters} 
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
      />)}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  )
}

export default App
