import React from 'react';

import { CanvasArea } from './canvas';
import { useNavigate } from 'react-router-dom';

export function Play() {
  let navigate = useNavigate();
  const [firstPrompt, setFirstPrompt] = React.useState('???');
  const [secondPrompt, setSecondPrompt] = React.useState('???');
  const [thirdPrompt, setThirdPrompt] = React.useState('???');

  React.useEffect(() => {
  const fetchWords = async () => {
    try {
      const response = await fetch(
        "https://random-words-api.kushcreates.com/api?category=animals&words=1&language=en"
      );
      const data = await response.json();

      // Extract just the 'word' property
      const word = data.map(item => item.word);

      setFirstPrompt(word || "???");
    } catch (err) {
      console.error("Failed to fetch animal:", err);
      setFirstPrompt("???");
    }
    try {
      const response = await fetch(
        "https://random-words-api.kushcreates.com/api?category=sports&words=1&language=en"
      );
      const data = await response.json();

      // Extract just the 'word' property
      const word = data.map(item => item.word);

      setSecondPrompt(word || "???");
    } catch (err) {
      console.error("Failed to fetch sport:", err);
      setSecondPrompt("???");
    }
    try {
      const response = await fetch(
        "https://random-words-api.kushcreates.com/api?category=brainrot&words=1&language=en"
      );
      const data = await response.json();

      // Extract just the 'word' property
      const word = data.map(item => item.word);

      setThirdPrompt(word || "???");
    } catch (err) {
      console.error("Failed to fetch animal:", err);
      setThirdPrompt("???");
    }
  };

  fetchWords();
}, []);


  return (
    <main>
      <h2>Round 1</h2>
      <h3>The promps are:</h3>
      <div className="prompts_container">
        <span className="prompt" id="prompt1">{firstPrompt}</span>
        <span className="prompt" id="prompt2">{secondPrompt}</span>
        <span className="prompt" id="prompt3">{thirdPrompt}</span>
      </div>
      <CanvasArea></CanvasArea>
    </main>
  );
}