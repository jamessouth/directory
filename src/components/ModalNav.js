import React from 'react';

export default function ModalNav(props) {
  return (
    <>
      <button aria-label="previous" onClick={props.handleModalPrev} className="prev">&lt;</button>
      <button aria-label="next" onClick={props.handleModalNext} className="next">&gt;</button>
    </>
  );
}
