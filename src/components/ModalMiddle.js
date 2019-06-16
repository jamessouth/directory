import React from 'react';
import {
  middle,
  names,
  users,
  emails,
  citys
} from '../styles/ModalMiddle.module.css';

export default function ModalMiddle({
  name,
  user,
  email,
  city
}) {
  return (
    <div className={middle}>
      <p className={names}>{name}</p>
      <p className={users}>{user}</p>
      <p className={emails}>{email}</p>
      <p className={citys}>{city}</p>
    </div>
  );
}
