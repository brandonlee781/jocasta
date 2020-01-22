import React from 'react';

export const MobileDisplay: React.FC<{ width?: number }> = ({ children, width }) => {
  const style = { height: '630px', width: width ? `${width}px` : '360px'};
  
  return (<div style={style}>{children}</div>);
}
