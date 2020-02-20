import React from 'react';
import PropTypes from 'prop-types';
import Close from './Close';

function MenuSection(props) {
  const { title } = props;
  const { items } = props;

  const list = items.map((item) => (
    <li>
      <span className="item">{item.name}</span>
      <span className="price">{item.price}</span>
    </li>
  ));

  return (
    <div className="menu-section">
      <h2>{title}</h2>
      <div className="menu-grid">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

function Menu(props) {
  const { handleClose } = props;

  const sandwiches = [
    { name: 'Mac and Cheese Grilled Cheese', price: 12 },
    { name: 'Tator Tot Cheeseburger w/ Sour Cream', price: 10 },
    { name: 'Potato, Egg, & Chorizo Burrito', price: 9 },
    { name: 'Fried Pork Chop Sandwich', price: 9 },
    { name: 'Mango-Salsa & Turkey Bagel', price: 8 },
    { name: 'Peach, Prosciutto, & Avocado Sandwich', price: 7 },
  ];

  const pasta = [
    { name: 'Chicken Carbonara', price: 13 },
    { name: 'Baked Ziti', price: 11 },
    { name: 'Parmesean Broccoli Fettucine', price: 11 },
    { name: 'Pumpkin-Chorizo Bow Ties', price: 9 },
    { name: 'Southern Barbecue Spaghetti', price: 8 },
  ];

  const sides = [
    { name: 'Pickled Beets', price: 4 },
    { name: 'Blue Cheese Sweet Potato Fries', price: 4 },
    { name: 'Garlic-Chive Baked Fries', price: 3 },
    { name: 'Garlic Mashed Potatoes', price: 2 },
  ];

  return (
    <div className="menu">
      <Close handleClose={handleClose} />
      <div id="menu-container">
        <MenuSection title="Sandwiches" items={sandwiches} />
        <MenuSection title="Pasta" items={pasta} />
        <MenuSection title="Sides" items={sides} />
      </div>
    </div>
  );
}

MenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

Menu.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Menu;
