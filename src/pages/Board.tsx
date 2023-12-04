import React from 'react';
import "../App.css"
import CardDetails from '../components/CardDetails';
import CardList from '../components/CardList';
import ICard from '../interfaces/ICard';

export default function Board({ cards, moveCard } : {cards: ICard[]; moveCard: (id: number) => void;}) {
  return (
    <>
    <h1>看板</h1>
    <div className="board">
         <div className="board-list">
            <CardList cards={cards} moveCard={moveCard} />
         </div>
         <div className="board-details">
            <CardDetails card={cards[0]} />
         </div>
    </div>
    </>
  );
}


