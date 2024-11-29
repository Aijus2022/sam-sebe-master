import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/courses.json"; // Import the JSON data
import CourseCard from "../components/CourseCard"; // Import the CourseCard component
import "../styles/ProductTypePage.css"; // Import CSS

const ProductTypePage = () => {
  const { category } = useParams(); // Extract the category ID from the URL
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    // Find the category data in the JSON file
    const foundCategory = coursesData.categories.find((cat) => cat.id === category);
    setCategoryData(foundCategory); // Set the category data
  }, [category]);

  if (!categoryData) {
    return <p>Загрузка...</p>; // Loading message in Russian
  }

  return (
    <div className="category-page">
      {/* Hero Section */}
      <div className="category-hero">
        <img
          src={categoryData.image} // Use the hero image from JSON
          alt={`Изображение категории ${categoryData.name}`}
          className="category-hero__image"
        />
        <div className="category-hero__text">
          <h1>{categoryData.name}</h1>
          <p>Изучайте курсы по категории {categoryData.name} и улучшайте свои навыки!</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="course-grid">
        {categoryData.courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            image={course.image}
            title={course.name}
            description={course.description}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductTypePage;





