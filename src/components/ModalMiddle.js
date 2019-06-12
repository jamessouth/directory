import React from 'react';

export default function ModalMiddle(props) {
  return (
    <div className="top-part">
      <p className="name">{props.name || ''}</p>
      <p className="user">{props.username || ''}</p>
      <p className="email">{props.email || ''}</p>
      <p className="city">{props.city || ''}</p>
    </div>
  );
}
