import logo from './logo.svg';
import './App.css';

function App() {
  let fruit = prompt("Как яблоки по анлглийски", '');

  let bag = {
    [fruit]: 'Точно!',
  };
  if (fruit = bag.apple) {
    alert( bag.apple )
  } else {
    alert( 'Дурак?' )
  }
}

export default App;
