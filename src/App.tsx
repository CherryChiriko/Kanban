import React from 'react';
import './App.css';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {nanoid} from 'nanoid';

import CardList from './components/CardList';
import cardData from './assets/data/cardData.json'

function initializeData(){
  setCards(prevCards => {
    prevCards
    return 
    {
      id : nanoid;

    }
    }
    
  )
  // data.id = nanoid;
  // if (!data.givenName ) { data.givenName = data.originalName }
  // console.log(data)
  // return data
}

function App() {
  // const fCardData = initializeData(cardData);
  const [cards, setCards] = React.useState(cardData);
  initializeData();
  const moveCard = (id: number) => {
    // Implement logic to update the order of cards when dropped
    // For simplicity, let's just log the card id for now
    console.log(`Card ${id} dropped`);
  };

  return (
    <div>
      <h1>看板</h1>
      <DndProvider backend={HTML5Backend}>
        <CardList cards={cards} moveCard={moveCard} />
      </DndProvider>  
    </div>
  );
}

export default App;

