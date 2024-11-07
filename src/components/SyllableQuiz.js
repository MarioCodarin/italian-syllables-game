import React, { useState, useEffect, useRef } from 'react';
import './SyllableQuiz.css';

// Import all audio files
const importAll = (r) => {
  let files = {};
  r.keys().forEach((key) => {
    files[key.replace('./', '')] = r(key);
  });
  return files;
};

const audioFiles = importAll(require.context('../assets/audio', false, /\.mp3$/));

// Comprehensive list of Italian syllables
const SYLLABLES = [
  'ba', 'be', 'bi', 'bo', 'bu',
  'ca', 'ce', 'ci', 'co', 'cu', 
  'che', 'chi',
  'da', 'de', 'di', 'do', 'du',
  'fa', 'fe', 'fi', 'fo', 'fu',
  'ga', 'ge', 'gi', 'go', 'gu', 
  'ghe', 'ghi',
  'la', 'le', 'li', 'lo', 'lu',
  'ma', 'me', 'mi', 'mo', 'mu',
  'na', 'ne', 'ni', 'no', 'nu',
  'pa', 'pe', 'pi', 'po', 'pu',
  'qu',
  'ra', 're', 'ri', 'ro', 'ru',
  'sa', 'se', 'si', 'so', 'su',
  'ta', 'te', 'ti', 'to', 'tu',
  'va', 've', 'vi', 'vo', 'vu',
  'za', 'ze', 'zi', 'zo', 'zu'
];

const SyllableQuiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const audioRef = useRef(null);

  const generateQuiz = () => {
    const quizSet = [];
    while (quizSet.length < 2) {
      const randomSyllable = SYLLABLES[Math.floor(Math.random() * SYLLABLES.length)];
      if (!quizSet.includes(randomSyllable)) {
        quizSet.push(randomSyllable);
      }
    }
    return quizSet;
  };

  useEffect(() => {
    setCurrentQuiz(generateQuiz());
  }, []);

  const playAudio = (syllable) => {
    if (audioRef.current) {
      const audioSrc = audioFiles[`${syllable}.mp3`];
      if (audioSrc) {
        audioRef.current.src = audioSrc;
        audioRef.current.play().catch(error => {
          console.error('Audio play error:', error);
          setFeedback({
            type: 'error',
            message: `Errore durante la riproduzione audio: ${syllable}`
          });
        });
      } else {
        console.error(`Audio file not found for syllable: ${syllable}`);
        setFeedback({
          type: 'error',
          message: `Audio non trovato per la sillaba: ${syllable}`
        });
      }
    }
  };

  const handleAnswer = (selectedSyllable) => {
    const correctSyllable = currentQuiz[0];
    
    if (selectedSyllable === correctSyllable) {
      setScore(prevScore => prevScore + 1);
      setFeedback({
        type: 'success',
        message: 'Bravo! Risposta corretta!'
      });
    } else {
      setFeedback({
        type: 'error',
        message: 'Ops! Riprova.'
      });
    }

    // Automatically load next quiz
    setTimeout(() => {
      setCurrentQuiz(generateQuiz());
      setFeedback(null);
    }, 1500);
  };

  return (
    <div className="syllable-quiz">
      <div className="score-tracker">Punteggio: {score}</div>
      
      {feedback && (
        <div className={`feedback ${feedback.type}`}>
          {feedback.message}
        </div>
      )}
      
      <div className="quiz-container">
        <div className="quiz-instructions">
          Ascolta la sillaba e scegli la risposta corretta
        </div>

        <button 
          className="audio-button" 
          onClick={() => playAudio(currentQuiz[0])}
        >
          🔊 Ascolta
        </button>
        
        <div className="syllable-options">
          {currentQuiz.map(syllable => (
            <button 
              key={syllable}
              className="syllable-button"
              onClick={() => handleAnswer(syllable)}
            >
              {syllable}
            </button>
          ))}
        </div>

        <audio ref={audioRef} />
      </div>
    </div>
  );
};

export default SyllableQuiz;
