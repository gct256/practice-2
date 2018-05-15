import * as React from 'react';

type Props = {
  value: string;
  onInput: (text: string) => void;
};

export function TextInput(props: Props) {
  const { value, onInput } = props;
  return (
    <input
      className="input"
      type="text"
      value={value}
      onInput={(ev) => {
        onInput(ev.currentTarget.value);
      }}
    />
  );
}
