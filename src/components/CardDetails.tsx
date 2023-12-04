import React from 'react';
import ICard from '../interfaces/ICard';
import './Card.css'
import StatusIndicator from './StatusIndicator';

export default function CardDetails ({ card } : { card: ICard }) {
  
  return (
    <>
    <div className='d-flex justify-content-center flex-column'>
      <div className='details-title px-4 py-3'>
        <div>{card.givenName} </div>
        <div className='d-flex align-items-center'><StatusIndicator status={card.status}/></div>
      </div>
      <hr/>
      <div className='details-element px-4'><p className='bold'>Original name: </p>{card.originalName}</div>
      {card.dateChecked !== null && (
        <div className='details-element px-4'>
          <p className='bold'>Last updated: </p>
          {card.dateChecked.toString()}
        </div>
      )} 
    </div>
    
    
    {/* Last update : {card.dateChecked} */}
    </>
    
  );
};

