import React from 'react';

export default function ModalBottom(props) {
  return (
    <div className="bottom-part">
      <p className="phone">{props.cell || ''}</p>
      <p className="addy">{`${props.street}, ${props.city}, ${props.state}, USA ${props.postcode}` || ''}</p>
      <p className="bday">{`Birthday: ${props.month}/${props.day}/${props.year}` || ''}</p>
    </div>
  );
}
