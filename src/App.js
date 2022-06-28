import './App.css';
import logoVictor from './images/logo-victor.png';
import Button from './components/button';
import Counter from './components/counter';

function App() {

  const manageClick = () => {
    console.log("click");
  }

  const restartCounter = () => {
    console.log("Restart");
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
        <Counter numClicks='5' />
        <Button
          text = 'Click'
          isClickButton = {true}
          manageClick = {manageClick}
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
