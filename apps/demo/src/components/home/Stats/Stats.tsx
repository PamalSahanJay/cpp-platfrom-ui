import React from 'react';
import styles from './stats.css';

interface IStateProps {
    title: string,
    number: number,
    comment?: string
}

export function Stats({title, number, comment}: IStateProps) {
  return (
     <div className={styles.stats}>
        <div className={styles.title}>{title}</div>
        <div className={styles.number}>{number}</div>
        <div>{comment}</div>
     </div>
  );
}
