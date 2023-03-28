// import logo from './logo.svg';
import './App.css';


function SpecialButton() {
  return (
    <button>Does Stuff (jk)</button>
  );
}

function fizzBuzzInt(n) {
  const fb = n % 15 === 0 ? ["fizzbuzz", "orange"] : (n % 3 === 0 ? ["fizz", "brown"] : (n % 5 === 0 ? ["buzz", "yellow"] : [String(n), "white"]))
  return {
    number: n,
    fizz_buzz: fb[0],
    color: fb[1],
    description: String(n) + " is very " + fb[0] + "y"
  }
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function NumberList() {
  const list_items = numbers
    .map(fizzBuzzInt)
    .map((fb) =>
    <li
      key={fb.number}
      style={{
        color: fb.color
      }}
    >
      {fb.description}
    </li>
  );
  return (
    <ul>
      {list_items}
    </ul>
  );
}

function Section() {
  return (
    <>
      <h2>This is the header</h2>
      <p>This is the body</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpecialButton />
        <NumberList />
        <Section />
      </header>
    </div>
  );
}

export default App;
