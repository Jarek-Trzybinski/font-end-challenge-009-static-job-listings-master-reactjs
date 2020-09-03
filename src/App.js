import React, { useState} from 'react';
import './App.css';
import data from './data.json';

function App() {
  console.log('data', data);

  const [cards, setCards] = useState(data);

  console.log('cards', cards);
  return (
    <div className="App">
      
      {cards.map(card => (
        <div className="card" key={card.id}>
          <img src={card.logo} />
          <div>
            {card.company}
            {card.new && 'NEW!' }
            {card.featured && 'FEATURED'}
          </div>
          <div>
            {card.position}
          </div>
          <div>
            {card.postedAt} {card.contract} {card.location}
          </div>
          <div>
            {card.role}
            {card.level}
            {card.languages.map(language => language)}
          </div>

        </div>
      ))}

    </div>
  );
}

export default App;
