import React, { useState } from 'react';
import './mainCheckout.css';

// Define a functional component called Quantity
const Quantity = () => {
  // Define a state variable called number and a function to update it called setNumber,
  // and initialize it with a value of 0
  const [number, setNumber] = useState(0);

  // Define a function called handleInputChange that takes an event parameter
  // and updates the number state variable with the parsed integer value of the input element
  const handleInputChange = event => {
    const newNumber = parseInt(event.target.value);
    setNumber(newNumber);
  };

  // Define a function called handleKeyPress that takes an event parameter
  // and prevents the default behavior if the key pressed is '-'
  const handleKeyPress = event => {
    if (event.key === '-') {
      event.preventDefault();
    }
  };

  /**
   * Update the number state variable based on the button's className.
   * If the className is 'increase', increment the number by 1.
   * If the className is 'decrease' and the number is greater than 0, decrement the number by 1.
   *
   * @param {object} button - The button element that was clicked.
   */
  function onClick(button) {
    // Check if the button className is 'increase'
    if (button.className === 'increase') {
      // Increment the number by 1
      setNumber(number + 1);
    }
    // Check if the button className is 'decrease' and the number is greater than 0
    else if (button.className === 'decrease' && number > 0) {
      // Decrement the number by 1
      setNumber(number - 1);
    }
  }

  // Render the component's JSX
  return (
    <>
      {/* Render an input element of type 'number' */}
      <input
        type='number'
        // Set the value of the input element to the number state variable if it's not zero,
        // otherwise set it to an empty string
        value={number === 0 ? '' : number}
        min={0}
        // Attach the handleInputChange function as the onChange event handler
        onChange={handleInputChange}
        // Attach the handleKeyPress function as the onKeyPress event handler
        onKeyPress={handleKeyPress}
      />
      {/* Render a button element with className 'increase' */}
      <button
        type='button'
        className='increase'
        // Attach an anonymous function as the onClick event handler that calls the onClick function with the event target
        onClick={() => onClick(event.target)}
      >
        +
      </button>
      {/* Render a button element with className 'decrease' */}
      <button
        type='button'
        className='decrease'
        // Attach an anonymous function as the onClick event handler that calls the onClick function with the event target
        onClick={() => onClick(event.target)}
      >
        -
      </button>
    </>
  );
};
/**
 * Renders the main checkout component.
 * @returns {JSX.Element} The main checkout component.
 */
function MainCheckout() {
  return (
    <>
      <main>
        <section className='header'>
          <h1>welcome to the website</h1>
        </section>

        <section className='image-card'>
          <section className='imagePreview'>
            <section className='img1'>img1</section>
            <section className='img2'>img2</section>
          </section>

          <section className='image'>center img</section>
        </section>

        <section className='description'></section>

        <section className='priceTable'>
          <section className='upcontent'></section>

          <section className='middlecontent'>
            <Quantity />
          </section>

          <section className='fottercontent'></section>
        </section>

        <section className='footer'></section>
      </main>
    </>
  );
}

export default MainCheckout;
