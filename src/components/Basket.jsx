import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useBasket } from '../context/BasketContext'; // Access the global context

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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Корзина</h2>
      {items.length === 0 ? (
        <p className="text-center text-gray-600">Ваша корзина пуста</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center bg-white rounded-lg shadow p-4 space-x-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">Количество: {item.quantity}</p>
                <p className="text-blue-600 font-bold">
                  Цена: {item.price * item.quantity} сом
                </p>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Уменьшить
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <div className="mt-6 space-y-4">
          <p className="text-xl font-bold">Итого: {totalPrice} сом</p>
          <button
            onClick={clearBasket}
            className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Очистить корзину
          </button>
          <Link
            to="/checkout"
            className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Перейти к оформлению
          </Link>
        </div>
      )}
    </div>
  );
};

export default Basket;


