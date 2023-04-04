// import logo from './logo.svg';
import './App.css';
import { supabase } from './supabaseClient';
import { useEffect, useState } from 'react';

function DatabaseBooksTable() {
  
  const [books, setBooks] = useState([]);
  const [supaErr, setSupaErr] = useState(null)

  // calling a plain async function caused react to spam re-rendering for some
  // reason, leading to chrome errors. this was the solution I found online.
  useEffect(() => {
    const getBooksAsync = async () => {
      let { data: books, error } = await supabase
      .from('books')
      .select('*')
      // Update the state
      setBooks(books);
      setSupaErr(error);
    }

    getBooksAsync().catch(() => {setSupaErr(1)})
  }, []);
  
  if (supaErr) {
    return (
      <p>Error. Make sure Supabase is online.</p>
    )
  } else if (books.length == 0) {
    return (
      <p>Loading...</p>
    )
  }
  else {
    return (
      <table className="DatabaseBooksTable-table">
      <tr className="rowhead">
        <td className="colhead">ID</td>
        <td className="coltail">Created At</td>
        <td className="coltail">Title</td>
        <td className="coltail">Author</td>
        <td className="coltail">ISBN</td>
        <td className="coltail">Description</td>
      </tr>
      {
        books.map(b => (
          <tr className="rowtail">
            <td className="colhead">{b.id}</td>
            <td className="coltail">{b.created_at}</td>
            <td className="coltail">{b.title}</td>
            <td className="coltail">{b.author}</td>
            <td className="coltail">{b.isbn}</td>
            <td className="coltail">{b.description}</td>
          </tr>
        ))
      }
      </table>
    )
  }
}

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
        <DatabaseBooksTable />
        <SpecialButton />
        <NumberList />
        <Section />
      </header>
    </div>
  );
}

export default App;
