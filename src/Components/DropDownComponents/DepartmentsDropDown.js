import React, { useRef, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './departmentsDropDown.scss';

function DepartmentsDropDown () {
  const departments = [
    "All Departments",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fresh",
    "Amazon Pharmacy",
    "Amazon Warehouse",
    "Appliances",
    "Apps & Games",
    "Arts, Crafts & Sewing",
    "Audible Books & Originals",
    "Automotive Parts & Accessories",
    "Baby",
    "Beauty & Personal Care",
    "Books",
    "CDs & Vinyl",
    "Cell Phones & Accessories",
    "Clothing, Shoes & Jewelry",
    "Women",
    "Men",
    "Girls",
    "Boys",
    "Baby",
    "Collectibles & Fine Art",
    "Computers",
    "Credit and Payment Cards",
    "Digital Educational Resources",
    "Digital Music",
    "Electronics",
    "Garden & Outdoor",
    "Gift Cards",
    "Grocery & Gourmet Food",
    "Handmade",
    "Health, Household & Baby Care",
    "Home & Business Services",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Just for Prime",
    "Kindle Store",
    "Luggage & Travel Gear",
    "Luxury Stores",
    "Magazine Subscriptions",
    "Movies & TV",
    "Musical Instruments",
    "Office Products",
    "Online Learning",
    "Pet Supplies",
    "Premium Beauty",
    "Prime Video",
    "Smart Home",
    "Software",
    "Sports & Outdoors",
    "Subscribe & Save",
    "Subscription Boxes",
    "Tools & Home Improvement",
    "Toys & Games",
    "Under $10",
    "Video Games",
    "Whole Foods Market"
  ];

  const dropDownRef = useRef();

  const [isActive, setIsActive] = useState(true);

  const replaceText = (e) => {
    dropDownRef.current.innerHTML = e.target.innerHTML;
  };

  const activeState = () => {
    setIsActive(false);

    document.addEventListener('pointerdown', () => setIsActive(true));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        ref={dropDownRef}
        variant="success"
        id="dropdown-basic"
        className="nav-left">
        All
      </Dropdown.Toggle>

      <Dropdown.Menu onPointerOver={activeState} id="dropdown__departments">
        {
          departments.map((item, i) => {
            const items = !i ? <Dropdown.Item className={isActive ? 'active' : ''} key={'d_' + i} onPointerDown={replaceText}>{item}</Dropdown.Item> : <Dropdown.Item key={'d_' + i} onPointerDown={replaceText}>{item}</Dropdown.Item>;
            return items;
          })
        }
      </Dropdown.Menu>
    </Dropdown >
  );
}

export default DepartmentsDropDown;
