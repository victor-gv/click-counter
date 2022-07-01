import './App.css';
import logoVictor from './images/logo-victor.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const addCount = () => {
    setNumClicks(numClicks + 1);
  }

  const restartCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className="container-logo">
        <img 
          src={logoVictor} 
          alt="Logo victor" 
          className="logo" />
      </div>

      <div className="main-container">
        <Counter numClicks={numClicks} />
        <Button
          text = 'Click'
          isClickButton = {true}
          manageClick = {addCount}
        />

        <Button
          text = 'Restart'
          isClickButton = {false}
          manageClick = {restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
