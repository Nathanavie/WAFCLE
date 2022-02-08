import React, { ReactElement, useEffect } from 'react';
import Key from './Key';
import { getStatuses } from '../../utils/statuses';
import { KeyValue } from '../../utils/keyboard';
import keyList from './keyList';
import { solution } from '../../utils/wordUtils';

interface KeyboardProps {
  onChar: (value: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  guesses: string[];
}

const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
}: KeyboardProps): ReactElement => {
  const charStatuses = getStatuses(guesses);

  const onClick = (value: KeyValue) => {
    if (value === 'Enter') {
      onEnter();
    } else if (value === 'Del') {
      onDelete();
    } else {
      onChar(value);
    }
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter();
      } else if (e.code === 'Backspace') {
        onDelete();
      } else {
        const key = e.key.toUpperCase();
        if (
          (key.length === 1 && key >= 'A' && key <= 'Z') ||
          (key.length === 1 && key === '-')
        ) {
          onChar(key);
        }
      }
    };
    window.addEventListener('keyup', listener);
    return () => {
      window.removeEventListener('keyup', listener);
    };
  }, [onEnter, onDelete, onChar]);

  const keyboardLayout = keyList.map((row, i) => (
    <section className="keyboardRow" key={i}>
      {row.map(({ key, width }) => {
        if (!solution.includes('-') && key === '-') {
          return null;
        }
        return (
          <Key
            key={key}
            value={key}
            width={width}
            onClick={onClick}
            status={charStatuses[key]}
          />
        );
      })}
    </section>
  ));

  return <section className="keyboardContainer">{keyboardLayout}</section>;
};
export default Keyboard;
