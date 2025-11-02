import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

const Icon = ({ name, className, style }: IconProps) => {
  return (
    <span className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  );
};

export default Icon;
