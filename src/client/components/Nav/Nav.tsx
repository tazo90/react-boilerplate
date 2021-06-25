import React from 'react';
import { Button } from 'antd';

export interface NavProps {
  children: JSX.Element[];
  toggleSideBar: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Nav({ children, toggleSideBar }: NavProps) {
  return (
    <nav className="flex items-center justify-between flex-wrap rounded-xl bg-gray-600 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Recipes</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">{children}</div>
        <div>
          <Button
            type="primary"
            onClick={toggleSideBar}
            className="inline-block text-sm px-4 py-2 leading-none border-none rounded text-gray-500 bg-gray-50 hover:bg-gray-500 mt-4 lg:mt-0"
          >
            Open
          </Button>
        </div>
      </div>
    </nav>
  );
}
