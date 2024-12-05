import React from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/courses.json"; // Importing all courses data

const HomePage = () => {
  // Flatten all courses from the JSON categories
  const allCourses = coursesData.categories.flatMap((category) => category.courses);

  const categories = [
    { id: "carpentry", name: "Плотницкие работы", image: "/images/carpentry.jpg" },
    { id: "tiling", name: "Плиточные работы", image: "/images/tiling.jpg" },
    { id: "masonry", name: "Кирпичная кладка", image: "/images/masonry.jpg" },
    { id: "electrical", name: "Электрика", image: "/images/electrical.jpg" },
    { id: "plumbing", name: "Сантехника", image: "/images/plumbing.jpg" },
    { id: "house-maintenance", name: "Домашнее обслуживание", image: "/images/house-maintenance.jpg" },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div
        className="relative text-white min-h-[400px] flex items-center justify-center px-4 py-20 sm:py-24 lg:py-32"
        style={{
          backgroundImage: "url('/images/marble4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-4xl text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6">
            Освойте навыки строительства и ремонта
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-200">
            Присоединяйтесь к нам в Бишкеке для практического обучения
            плотницким, плиточным, кирпичным, электрическим, сантехническим работам
            и домашнему обслуживанию.
          </p>
          <Link
            to="/about-us"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Узнать больше
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Категории</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              to={`/courses/${category.id}`}
              key={category.id}
              className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <h3 className="text-lg font-semibold text-center py-4 group-hover:text-blue-600">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Все курсы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course) => (
            <div
              key={course.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-blue-600 font-bold mb-4">{course.price}</p>
                <Link
                  to={`/course/${course.id}`}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;





