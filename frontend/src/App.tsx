import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export default function App(): JSX.Element {
  const [string, setString] = useState('');
  const [stringReverse, setStringReverse] = useState('');
  const [stringReverseError, setStringReverseError] = useState('');

  const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setString(value);
    socket.emit('call/string/reverse', value);
  };

  socket.on('success/string/reverse', (payload: string): void => {
    setStringReverse(payload);
  });

  socket.on('failure/string/reverse', (payload: string): void => {
    setStringReverseError(payload);
  });

  return (
    <>
      <div>
        <textarea onChange={handleOnChange} value={string} rows={10} cols={100} />
      </div>
      <div>
        <textarea disabled value={stringReverse} rows={10} cols={100} />
      </div>
      <div style={{ color: 'red' }}>{stringReverseError}</div>
    </>
  );
}
