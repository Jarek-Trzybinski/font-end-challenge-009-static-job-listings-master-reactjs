import React, { useState} from 'react';
import './App.css';
import data from './data.json';
import iconRemove from './images/icon-remove.svg';

function App() {

  const addFilter = (filter) => {
    !filters.includes(filter) && setFilters([...filters, filter]);
  }

  const removeFilter = (filter) => {
    const newFilters = filters.filter(el => (el !== filter));
    console.log(newFilters);
    setFilters(newFilters);
  }

  const clearFiters = () => {
    setFilters([]);
  }

  const [filters, setFilters] = useState([]);
  const [cards, setCards] = useState(data);

  let filteredCards;

  const filterFunc = ({role, level, languages}) => {
    let filterOptions = [role, level, ...languages];

    return filters.every(filter => filterOptions.includes(filter));
  }

  if (filters.length > 0) {
    filteredCards = cards.filter(filterFunc);
  } else {
    filteredCards = cards;
  }

  return (
    <div className="App">
      <header></header>
      <main>
        {filters.length >0 &&
        
        <div className="FilterCard">
        <div className="FilterTags">
          {filters.length > 0 && (filters.map(filter => (<div className="FilterTag" onClick={() => removeFilter(filter)}><div className="name">{filter}</div><div class="FilterButton"></div></div>)) )}
        </div>
          {filters.length > 0 && (<div className="ClearButton" onClick={() => clearFiters()}>Clear</div>)}
  
        </div>
        
        }

      {filteredCards
      .map(card => (
        
         <div className={`Card ${card.featured && 'CardHasFeatured'}`} key={card.id}>
          <div className="CardInfos">
            <img
              src={require(`${card.logo}`)}
            />
            <div className="CardWrapper">
              <div className="CardTop">
                <span className="CompanyName">{card.company} </span>
                
                {card.new && <span className="New">NEW!</span> }
                {card.featured && <span className="Featured">FEATURES!</span> }
              </div>
              <div className="Position" onClick={() => addFilter(card.role)}>
                {card.position}
              </div>
              <div className="JobInfo">
                <span>{card.postedAt}</span>
                <span className="dot">&middot;</span>
                <span>{card.contract}</span>
                <span className="dot">&middot;</span>
                <span>{card.location}</span>
              </div>
              </div>
          </div>

          <div className="JobKnowledge">
            <span onClick={() => addFilter(card.role)}>{card.role}</span>
            <span onClick={() => addFilter(card.level)}>{card.level}</span>
            {card.languages.map(language => <span onClick={()=> addFilter(language)}> {language} </span>)}
          </div>
        </div>
      ))}
      </main>
    </div>
  );
}

export default App;
