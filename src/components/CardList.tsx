import React from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import Card from './Card';
import ICard from '../interfaces/ICard';

interface CardListProps {
  cards: ICard[];
  moveCard: (id: number) => void;
}

export default function CardList ({ cards, moveCard } : CardListProps)  {
  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item: { id: number }, monitor: DropTargetMonitor) => {
      moveCard(item.id);
    },
  });

  return (
    <div ref={drop}>
      {cards.map((card : ICard) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

