import React from 'react';

import { CanvasArea } from './canvas';
import { CountdownTimer } from './timer';
import { useNavigate } from 'react-router-dom';

export function Play() {
  let navigate = useNavigate();
  const [firstPrompt, setFirstPrompt] = React.useState('???');
  const [secondPrompt, setSecondPrompt] = React.useState('???');
  const [thirdPrompt, setThirdPrompt] = React.useState('???');

  React.useEffect(() => {
        setFirstPrompt('Pirate');
        setSecondPrompt('Door');
        // third is missing for doodlers
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