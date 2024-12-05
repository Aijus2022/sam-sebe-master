import React, { useState } from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/courses.json";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State for hamburger menu toggle

  const allCourses = coursesData.categories.flatMap((category) => category.courses);

  return (
    <header className="bg-teal-700 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/tools.png"
            alt="Sam-Sebe-Master Logo"
            className="w-10 h-auto"
          />
          <span className="text-xl font-bold">Sam-Sebe-Master</span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="block md:hidden text-2xl focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`${
            showMenu ? "block" : "hidden"
          } absolute md:relative top-full left-0 md:top-0 md:flex bg-teal-700 md:bg-transparent w-full md:w-auto z-40 md:space-x-5 transition-all`}
        >
          <ul className="flex flex-col md:flex-row list-none gap-2 md:gap-5 px-4 md:px-0">
            <li>
              <Link
                to="/"
                className="hover:bg-teal-800 rounded px-4 py-2 transition"
                onClick={() => setShowMenu(false)}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:bg-teal-800 rounded px-4 py-2 transition"
                onClick={() => setShowMenu(false)}
              >
                О нас
              </Link>
            </li>

            {/* Courses Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span
                className="cursor-pointer hover:bg-teal-800 rounded px-4 py-2 transition"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Курсы
              </span>
              {showDropdown && (
                <ul className="absolute top-full mt-1 left-0 bg-teal-800 rounded shadow-lg flex flex-col list-none py-2 min-w-[200px] z-50 transition">
                  {allCourses.map((course) => (
                    <li key={course.id}>
                      <Link
                        to={`/course/${course.id}`}
                        className="block px-4 py-2 text-white hover:bg-teal-900 transition"
                        onClick={() => {
                          setShowDropdown(false);
                          setShowMenu(false);
                        }}
                      >
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/basket"
                className="hover:bg-teal-800 rounded px-4 py-2 transition"
                onClick={() => setShowMenu(false)}
              >
                Корзина
              </Link>
            </li>
            <li>
              <Link
                to="/checkout"
                className="hover:bg-teal-800 rounded px-4 py-2 transition"
                onClick={() => setShowMenu(false)}
              >
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



















