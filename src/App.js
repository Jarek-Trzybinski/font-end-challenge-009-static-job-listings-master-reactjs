import React, { useState} from 'react';
import './App.css';
import data from './data.json';

function App() {
  console.log('data', data);

  const [cards, setCards] = useState(data);

  console.log('cards', cards);
  return (
    <div className="App">
      <header></header>
      <main>
      {cards.map(card => (
        <div className="Card" key={card.id}>
          <img
            src={require(`${card.logo}`)}
          />
          <div className="CardTop">
            <span className="CompanyName">{card.company} </span>
            
            {card.new && <span className="New">NEW!</span> }
            {card.featured && <span className="Featured">FEATURES!</span> }
          </div>
          <div className="Position">
            {card.position}
          </div>
          <div className="JobInfo">
            <span>{card.postedAt}</span>
            <span className="dot">&middot;</span>
            <span>{card.contract}</span>
            <span className="dot">&middot;</span>
            <span>{card.location}</span>
          </div>
          <div className="JobKnowledge">
            <span>{card.role}</span>
            <span>{card.level}</span>
            {card.languages.map(language => <span> {language} </span>)}
          </div>

        </div>
      ))}
      </main>      


    </div>
  );
}

export default App;
