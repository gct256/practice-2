import * as React from 'react';

type Props = {
  label?: string;

  disabled?: boolean;

  onClick?: () => void;
};

export function Button(props: Props) {
  const { label, disabled, onClick } = props;
  return (
    <button
      type="button"
      className="button"
      disabled={!!disabled}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {`${label}`}
    </button>
  );
}
