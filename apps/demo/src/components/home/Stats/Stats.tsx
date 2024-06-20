import React from 'react';
import './stats.css';

interface IStateProps {
    title: string,
    number: number,
    comment?: string
}

export function Stats({title, number, comment}: IStateProps) {
  return (
     <div className="stats">
        <div className="title">{title}</div>
        <div className="number">{number}</div>
        <div>{comment}</div>
     </div>
  );
}
