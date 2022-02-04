import React from 'react';
import './Card.css';

type CardProps = {
  id: number,
  title: string,
  description: string,
  date: string,
};

function Card(props: CardProps) {
  const { id, title, description, date } = props;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card--footer">
        <span className="card__date">{date}</span>
        <a className="card__link" href={`/${id}`}>View project</a>
      </div>
    </div>
  );
}

export default Card;
