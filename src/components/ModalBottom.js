import React from 'react';
import {
  bottom,
  addy
} from '../styles/ModalBottom.module.css';

export default function ModalBottom({
  cell,
  street,
  city,
  state,
  postcode,
  month,
  day,
  year
}) {
  return (
    <div className={bottom}>
      <p>{cell}</p>
      <p className={addy}>{`${street}, ${city}, ${state}, USA ${postcode}`}</p>
      <p>{`Birthday: ${month}/${day}/${year}`}</p>
    </div>
  );
}
