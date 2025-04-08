import React from 'react';
import { NavLink } from 'react-router';

export default function Navbar(props) {
  return (
    <div className="navbar bg-base-100 shadow-sm relative">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl">Burger</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex items-center gap-4">
          <li><NavLink className={({ isActive }) => isActive ? 'text-red-500' : ''} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'text-red-500' : ''} to="/about">About</NavLink></li>
          <NavLink className="relative" to="/Cart">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 fill="none" viewBox="0 0 24 24" 
                 strokeWidth={1.5} stroke="currentColor" 
                 className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M2.25 3h1.386c.51 0 .955.343 
                   1.087.835l.383 1.437M7.5 14.25a3 3 
                   0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 
                   2.1-4.684 2.924-7.138a60.114 60.114 0 
                   0 0-16.536-1.84M7.5 14.25 5.106 
                   5.272M6 20.25a.75.75 0 1 1-1.5 
                   0 .75.75 0 0 1 1.5 0Zm12.75 
                   0a.75.75 0 1 1-1.5 0 .75.75 
                   0 0 1 1.5 0Z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-amber-300 text-xs px-2 py-0.5 rounded-full">
              {props.noOfItems}
            </span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
