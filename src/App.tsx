import React from 'react';
import './App.css';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import cardData from './assets/data/cardData.json'
import ICard from './interfaces/ICard';
import Board from './pages/Board';
import { initializeCard } from './services/cardManipulation';



function App() {
  const [cards, setCards] = React.useState(cardData);
  React.useEffect(() => {
    setCards((prevCards : ICard[]) => prevCards.map((card: ICard) => initializeCard(card)));
  }, []);
  const moveCard = (id: number) => {
    // Implement logic to update the order of cards when dropped
    // For simplicity, let's just log the card id for now
    console.log(`Card ${id} dropped`);
  };

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Board cards={cards} moveCard={moveCard}/>
      </DndProvider>  
    </div>
  );
}

export default App;

