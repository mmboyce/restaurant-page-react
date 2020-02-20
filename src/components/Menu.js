import React from 'react';
import PropTypes from 'prop-types';
import Close from './Close';
import './styles/Menu.css';

function MenuSection(props) {
  const { title } = props;
  const { items } = props;

  const list = [];
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];

    list.push(<li className="item">{item.name}</li>);
    list.push(<li className="price">{item.price}</li>);
  }

  return (
    <div className="menu-section">
      <h2>{title}</h2>
      <ul className="menu-grid">
        {list}
      </ul>
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
