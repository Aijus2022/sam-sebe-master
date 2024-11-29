import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/courses.json"; // Import the JSON file
import AddToBasketButton from "../components/AddToBasketButton"; // Reusable Button Component
import "../styles/ProductPage.css";

const ProductPage = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Find the course by ID in the JSON file
    let foundCourse = null;
    coursesData.categories.forEach((category) => {
      const match = category.courses.find((c) => c.id === id);
      if (match) {
        foundCourse = match;
      }
    });

    setCourse(foundCourse); // Set the course data
  }, [id]);

  if (!course) return <p>Загрузка...</p>; // Loading state if course not loaded yet

  // Clean and parse the price to ensure it's a number
  const sanitizedPrice = parseInt(course.price.replace(/\D/g, ""), 10) || 0;

  return (
    <div className="container product-page">
      <div className="product-page__content">
        {/* Left Side: Course Image */}
        <div className="product-page__image">
          <img src={course.image} alt={course.name} />
        </div>

        {/* Right Side: Course Details */}
        <div className="product-page__details">
          <h1 className="product-page__title">{course.name}</h1>
          <p className="product-page__description">{course.description}</p>
          <p className="product-page__duration">Длительность: {course.duration}</p>
          <p className="product-page__price">Цена: {sanitizedPrice} сом</p>
          <AddToBasketButton
            id={course.id}
            image={course.image}
            title={course.name}
            price={sanitizedPrice} // Use the sanitized price
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;






