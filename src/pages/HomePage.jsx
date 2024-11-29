import React from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/courses.json"; // Importing all courses data
import "../styles/HomePage.css";

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
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <img
          src="/images/marble4.jpg"
          alt="Обучение навыкам строительства и ремонта"
          className="hero__image"
        />
        <div className="hero__text">
          <h1>Освойте навыки строительства и ремонта</h1>
          <p>
            Присоединяйтесь к нам в Бишкеке для практического обучения
            плотницким, плиточным, кирпичным, электрическим, сантехническим работам
            и домашнему обслуживанию.
          </p>
          <Link to="/about-us" className="hero__cta">
      Узнать больше
    </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories">
        <h2>Категории</h2>
        <div className="categories__list">
          {categories.map((category) => (
            <Link to={`/courses/${category.id}`} key={category.id} className="category">
              <img src={category.image} alt={category.name} className="category__image" />
              <h3 className="category__name">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses">
        <h2>Все курсы</h2>
        <div className="courses__grid">
          {allCourses.map((course) => (
            <div key={course.id} className="course">
              <img src={course.image} alt={course.name} className="course__image" />
              <div className="course__info">
                <h3 className="course__title">{course.name}</h3>
                <p className="course__description">{course.description}</p>
                <p className="course__price">{course.price}</p>
                <Link to={`/course/${course.id}`} className="course__link">Подробнее</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;


