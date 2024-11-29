import React from "react";
import AddToBasketButton from "./AddToBasketButton"; // Import reusable button
import "../styles/CourseCard.css";

const CourseCard = ({ id, image, title, description, price }) => {
  // Clean and parse the price to ensure it's a number
  const sanitizedPrice = parseInt(price.replace(/\D/g, ""), 10) || 0;

  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-card__image" />
      <div className="course-card__content">
        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__description">{description}</p>
        <p className="course-card__price">{sanitizedPrice} сом</p>
        <AddToBasketButton id={id} image={image} title={title} price={sanitizedPrice} />
      </div>
    </div>
  );
};

export default CourseCard;






