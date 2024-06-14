import logo from './logo.svg';
import './App.css';

function App() {
  let fruit = prompt("Как яблоки по анлглийски", '');

  let bag = {
    [fruit + 'lol']: 'Точно!',
  };
  if (fruit = bag.applelol) {
    alert( bag.applelol )
  } else {
    alert( 'Дурак?' )//sam takoi
  }
}
// function App() {
//   let fruit = prompt("Как яблоки по анлглийски", '');

//   let bag = {
//     0: 'Точно!',
//     1: 'Точно2!',
//   };
//   if (fruit = 0) {
//     alert( bag[0] )
//   } else {
//     alert( bag["1"] )//sam takoi
//   }
// }
export default App;