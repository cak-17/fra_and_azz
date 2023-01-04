import React from 'react';
import iconLib from '../../../../utils/fontawesome/icons';

const Header = () => {
  return (
    <div className="mt-5">
      <h1 className="fw-bold py-4">Raw Food Calculator {iconLib.bone}</h1>
      <p>
        The amount of <b>calories</b> a dog needs will depend on:
        <ul>
          <li>age</li>
          <li>metabolism</li>
          <li>activity</li>
        </ul>
        This program will help you calculate an <b>estimate</b> on how much food
        an adult dog/puppy should eat in a day and how many calories they need
        to sustain optimal health.
      </p>
    </div>
  );
};

export default Header;
