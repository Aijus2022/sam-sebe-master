import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import coursesData from "../data/courses.json";
import AddToBasketButton from "../components/AddToBasketButton";

const ProductPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to adjust top padding/margin
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load course data
  useEffect(() => {
    let foundCourse = null;
    coursesData.categories.forEach((category) => {
      const match = category.courses.find((c) => c.id === id);
      if (match) {
        foundCourse = match;
      }
    });
    setCourse(foundCourse);
  }, [id]);

  if (!course) return <p className="text-center text-gray-600">Загрузка...</p>;

  const sanitizedPrice = parseInt(course.price.replace(/\D/g, ""), 10) || 0;

  return (
    <div
      className={`transition-all duration-300 ${
        scrolled ? "mt-0 pt-0" : "mt-16 pt-12"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8">
        {/* Course Image */}
        <div className="flex justify-center items-center">
          <img
            src={course.image}
            alt={course.name}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Course Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
          <p className="text-gray-700 mb-6">{course.description}</p>
          <p className="text-lg text-gray-900 font-semibold mb-2">
            Длительность: {course.duration}
          </p>
          <p className="text-2xl text-blue-600 font-bold mb-6">
            Цена: {sanitizedPrice} сом
          </p>
          <AddToBasketButton
            id={course.id}
            image={course.image}
            title={course.name}
            price={sanitizedPrice}
          />
          <Link
            to="/basket"
            className="mt-4 inline-block bg-blue-500 text-white text-center py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Перейти в корзину
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;





