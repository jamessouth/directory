import React from 'react';

export default function FetchError({ message }) {
  return (
    <p style={{ textAlign: 'center', marginTop: '5em' }}>There was an error: {message}.  Please try again.</p>
  );
}
