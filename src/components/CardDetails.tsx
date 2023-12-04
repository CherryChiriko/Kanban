import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import ICard from '../interfaces/ICard';
import './Card.css'

export default function CardDetails (props : ICard) {    
  return (
    <>
    <div className='card'>
      {props.givenName}
      {props.id} - {props.originalName}

    </div>
    </>
    
  );
};

