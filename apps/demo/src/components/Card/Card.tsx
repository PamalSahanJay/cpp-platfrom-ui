import React from 'react';
import styles from './card.css';
// import * as styles from './card.css';

interface ICardProps {
    title: string;
    subtitle: string;
    icon?: React.ReactNode;
}

export function Card({ title, subtitle, icon }: ICardProps) {
  return (
      <div className={styles.card}>
          <div className={styles.iconPlace}>{icon}</div>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
      </div>
  );
}
