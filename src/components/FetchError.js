import React from 'react';

const style = {
  textAlign: 'center',
  marginTop: '5em'
}

export default function FetchError({ message }) {
  return (
    <p style={style}>There was an error: {message}.  Please try again.</p>
  );
}
