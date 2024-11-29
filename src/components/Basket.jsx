import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useBasket } from '../context/BasketContext'; // Access the global context
import '../styles/Basket.css';

const Basket = () => {
  const { items, removeItem, decreaseQuantity, clearBasket } = useBasket();
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    const coursesNavItem = document.querySelector('.nav__item--courses');
    const handleHideCourses = () => {
      if (coursesNavItem) {
        coursesNavItem.classList.add('hidden'); // Hide Courses navbar item
      }
    };

    const restoreCoursesNav = () => {
      if (coursesNavItem) {
        coursesNavItem.classList.remove('hidden'); // Restore Courses navbar item
      }
    };

    // Attach event listeners to course links
    const courseLinks = document.querySelectorAll('.course-link');
    courseLinks.forEach((link) => {
      link.addEventListener('click', handleHideCourses);
    });

    // Clean up: remove event listeners
    return () => {
      courseLinks.forEach((link) => {
        link.removeEventListener('click', handleHideCourses);
      });
      restoreCoursesNav(); // Ensure Courses navbar is restored when the component is unmounted
    };
  }, []);

  return (
    <div className="basket">
      <h2 className="basket__title">Корзина</h2>
      {items.length === 0 ? (
        <p className="basket__empty">Ваша корзина пуста</p>
      ) : (
        <ul className="basket__list">
          {items.map((item) => (
            <li key={item.id} className="basket__item">
              <img src={item.image} alt={item.title} className="basket__item-image" />
              <div className="basket__item-info">
                <h3 className="basket__item-title">{item.title}</h3>
                <p className="basket__item-quantity">Количество: {item.quantity}</p>
                <p className="basket__item-price">Цена: {item.price * item.quantity} сом</p>
              </div>
              <div className="basket__item-actions">
                <button
                  className="basket__decrease-button"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  Уменьшить
                </button>
                <button
                  className="basket__remove-button"
                  onClick={() => removeItem(item.id)}
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <div className="basket__summary">
          <p className="basket__total">Итого: {totalPrice} сом</p>
          <button className="basket__clear-button" onClick={clearBasket}>
            Очистить корзину
          </button>
          <Link to="/checkout" className="basket__checkout-link">
            Перейти к оформлению
          </Link>
        </div>
      )}
    </div>
  );
};

export default Basket;


