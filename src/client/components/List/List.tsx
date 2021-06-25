import React from 'react';

export interface ListProps {
  children: JSX.Element[];
}

export function List({ children }: ListProps) {
  return <div className="divide-y divide-gray-100">{children}</div>;
}
