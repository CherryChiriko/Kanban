import React from 'react';
import './Card.css'

export default function StatusIndicator (props : any) {
  const statusColor = () => {
    switch(props.status){
      case 'unsorted' : return "grey";
      case 'active'   : return "green"; 
      case 'inactive' : return "orange";
      default : return "white";
    }
  }
       
  return (
    <div className='status'
      style={{ backgroundColor: statusColor()}}>
    </div>   
    )
};

