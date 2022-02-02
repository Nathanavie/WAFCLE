import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';
import Keyboard from './components/Keyboard/Keyboard';
import InfoModal from './components/Modals/InfoModal';
import HintModal from './components/Modals/HintModal';
import StatsModal from './components/Modals/StatsModal';
import CommonAlert from './components/Alerts/Alert';
import { isWordInWordList, isWinningWord, solution } from './utils/wordUtils';
import {
  saveGameStateToLocalStorage,
  loadGameStateFromLocalStorage,
} from './utils/localStorage';
import { loadStats, addStatsForCompletedGame } from './utils/stats';

const App = (): ReactElement => {
  const [isGameWon, setIsGameWon] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isNotEnoughLetters, setIsNotEnoughLetters] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isWordNotFoundAlertOpen, setIsWordNotFoundAlertOpen] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);
  const [currentGuess, setCurrentGuess] = useState('');
  const [successAlert, setSuccessAlert] = useState('');
  const [guesses, setGuesses] = useState<string[]>(() => {
    const loaded = loadGameStateFromLocalStorage();
    if (loaded?.solution !== solution) {
      return [];
    }
    const gameWasWon = loaded.guesses.includes(solution);
    if (gameWasWon) {
      setIsGameWon(true);
    }
    if (loaded.guesses.length === 6 && !gameWasWon) {
      setIsGameLost(true);
    }
    return loaded.guesses;
  });
  const [stats, setStats] = useState(() => loadStats());

  useEffect(() => {
    saveGameStateToLocalStorage({ guesses, solution });
  }, [guesses]);

  useEffect(() => {
    if (isGameWon) {
      setSuccessAlert('Up the tics!');
      setTimeout(() => {
        setSuccessAlert('');
        setIsStatsModalOpen(true);
      }, 2000);
    }
    if (isGameLost) {
      setTimeout(() => {
        setIsStatsModalOpen(true);
      }, 2000);
    }
  }, [isGameWon, isGameLost]);

  const onChar = (value: string) => {
    if (
      currentGuess.length < solution.length &&
      guesses.length < 6 &&
      !isGameWon
    ) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const onEnter = () => {
    if (isGameWon || isGameLost) {
      return;
    }
    if (!(currentGuess.length === solution.length)) {
      setIsNotEnoughLetters(true);
      setTimeout(() => {
        setIsNotEnoughLetters(false);
      }, 2000);
      return;
    }

    if (!isWordInWordList(currentGuess)) {
      setIsWordNotFoundAlertOpen(true);
      setTimeout(() => {
        setIsWordNotFoundAlertOpen(false);
      }, 2000);
      return;
    }

    const winningWord = isWinningWord(currentGuess);

    if (
      currentGuess.length === solution.length &&
      guesses.length < 6 &&
      !isGameWon
    ) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess('');

      if (winningWord) {
        if (stats) {
          setStats(addStatsForCompletedGame(stats, guesses.length));
        }
        setIsGameWon(true);
      }

      if (guesses.length === 5) {
        if (stats) {
          setStats(addStatsForCompletedGame(stats, guesses.length + 1));
        }
        setIsGameLost(true);
      }
    }
  };

  return (
    <>
      <article className="appWrapper">
        <section className="appContainer">
          <Header
            openInfoModal={(state: boolean) => setIsInfoModalOpen(state)}
            openStatsModal={(state: boolean) => setIsStatsModalOpen(state)}
            openHintModal={(state: boolean) => setIsHintModalOpen(state)}
          />
          <Grid
            guesses={guesses}
            currentGuess={currentGuess}
            solutionLength={solution.length}
          />
          <Keyboard
            onChar={onChar}
            onDelete={onDelete}
            onEnter={onEnter}
            guesses={guesses}
          />
        </section>
      </article>
      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
      <HintModal
        isOpen={isHintModalOpen}
        handleClose={() => setIsHintModalOpen(false)}
      />
      <StatsModal
        isOpen={isStatsModalOpen}
        handleClose={() => setIsStatsModalOpen(false)}
        guesses={guesses}
        gameStats={stats}
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        handleShare={() => {
          setSuccessAlert('Game copied to clipboard');
          return setTimeout(() => setSuccessAlert(''), 2000);
        }}
      />
      <CommonAlert message="Not enough letters" isOpen={isNotEnoughLetters} />
      <CommonAlert
        message="Word not in word list"
        isOpen={isWordNotFoundAlertOpen}
      />
      <CommonAlert
        message={`The word was ${solution}`}
        isOpen={isGameLost}
        variant="error"
      />
      <CommonAlert
        message={successAlert}
        isOpen={successAlert !== ''}
        variant="success"
      />
    </>
  );
};
export default App;
