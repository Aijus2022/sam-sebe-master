import React, { useState } from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/courses.json"; // Import the courses JSON file
import "../styles/Header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Flatten all courses into a single array for easy rendering
  const allCourses = coursesData.categories.flatMap((category) => category.courses);

  // Function to handle closing the dropdown
  const handleCourseClick = () => {
    setShowDropdown(false); // Close the dropdown when a course is clicked
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/images/tools.png" alt="Sam-sebe-Master Logo" className="logo-image" />
          <span className="logo-text">Sam-sebe-Master</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about-us">О нас</Link> {/* "About Us" link */}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="dropdown-toggle">Курсы</span>
              {showDropdown && (
                <ul className="dropdown-menu">
                  {allCourses.map((course) => (
                    <li key={course.id}>
                      <Link to={`/course/${course.id}`} onClick={handleCourseClick}>
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/basket">Корзина</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;







