import React, { ReactElement } from 'react';
import { KeyValue } from '../../utils/keyboard';
import { CharStatus } from '../../utils/statuses';

interface KeyProps {
  value: string;
  width: string;
  onClick: (value: KeyValue) => void;
  status: CharStatus | null;
}

const Key = ({ value, width, onClick, status }: KeyProps): ReactElement => {
  if (status === 'correct') {
    return (
      <button
        className="correctKey"
        type="button"
        onClick={() => onClick(value as KeyValue)}
      >
        {value}
      </button>
    );
  }
  if (status === 'present') {
    return (
      <button
        className="presentKey"
        type="button"
        onClick={() => onClick(value as KeyValue)}
      >
        {value}
      </button>
    );
  }
  if (status === 'absent') {
    return (
      <button
        className="absentKey"
        type="button"
        onClick={() => onClick(value as KeyValue)}
      >
        {value}
      </button>
    );
  }
  return (
    <button
      className="standardKey"
      type="button"
      onClick={() => onClick(value as KeyValue)}
      style={width ? { width: `${width}px` } : undefined}
    >
      {value}
    </button>
  );
};
export default Key;
