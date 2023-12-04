import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import ICard from '../interfaces/ICard';
import './Card.css'
import StatusIndicator from './StatusIndicator';

export default function Card (props : ICard) {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: props,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }); 
    
  return (
    <>
    <div className='card'
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {props.givenName}
      <StatusIndicator status={props.status}></StatusIndicator>
    </div>
    </>
    
  );
};

