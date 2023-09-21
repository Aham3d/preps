import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>add three card elements</h1>
        <Card h2="first card's h2" h3="first card's h3"/>;
        <Card h2="second card's h2" h3="second card's h3"/>;
        <Card h2="third card's h2" h3="third card's h3"/>;
    </div>
  );
}

export default App;
// reivsion