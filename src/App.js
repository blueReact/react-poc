import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Title from './components/title'

function App() {

  const title = 'This is website title';
  const [name, setName] = useState('Mario');
  const [showEvents, setShowEvents] = useState(true);
  const [items, setItems] = useState([
    { title: "mario's birthday bash", id: "1" },
    { title: "bowsers live steam", id: "2" },
    { title: "race on moo mo farm", id: "3" }
  ]);
  const link = "https://www.google.com/"

  const subtitle = "this is the latest events in mariland";

  let handleClick = () => {
    // alert();    
    // console.log(name);
    setName('jj')
  }

  let deleteItem = (id) => {
    console.log(id);
    setItems((prevItems) => {
      return prevItems.filter((event) => {
        return id !== event.id;
      })
    })
  }

  return (
    <div className="App">
      {/* <h1>{title}</h1> */}
      <Title title ="this is injected in the child" subtitle = {subtitle}/>
      <h1>{name}</h1>
      <button onClick={handleClick}>click</button>

      <div>
        {
          3 / 2
        }
      </div>

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide </button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show </button>
        </div>
      )}

      {showEvents && items.map((item, index) => (
        // <div key={item.id}>
        // makes no wrapper element like div
        <React.Fragment key={item.id}>
          <h2>{index + 1} {item.title.toUpperCase()}</h2>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </React.Fragment>
      ))
      }

      <div>
        <p>Today's date is :</p>{new Date().toDateString()}
        <p>Random number :</p>{Math.random() * 100}
      </div>

      <a href={link} target="_blank">Click here to go to Google</a>

    </div>
  );
}

export default App;
