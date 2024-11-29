import React from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/courses.json"; // Importing all courses data
import "../styles/HomePage.css";

const AboutUs = () => {
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
    <div className="about">
      {/* Hero Section */}
      <div className="hero">
        <img
          src="/images/marble4.jpg"
          alt="Обучение навыкам строительства и ремонта"
          className="hero__image"
        />
        <div className="hero__text">
          <h1>Добро пожаловать в Центр обучения строителей</h1>
          <p>
          Мы являемся одним из ведущих поставщиков практических курсов по строительству и DIY для людей, работающих в строительной отрасли, и тех, кто хочет в нее войти. Наш центр был основан в 2003 году для решения проблемы нехватки качественных курсов по строительству, и с тех пор мы расширились, чтобы предложить также ряд квалификаций по электрике. Наша цель — помочь вам освоить выбранные навыки в практической, прикладной среде с высококвалифицированными и опытными мастерами в качестве ваших инструкторов.
          </p>
          <p>Все наши курсы разработаны для предоставления индивидуального внимания в непринужденной и дружественной атмосфере. Независимо от того, работаете ли вы уже в строительной отрасли, хотите расширить свои знания или новичок, делающий все своими руками, у нас есть курс, который вам подойдет.</p>
          <Link to="/contact" className="hero__cta">
          Есть вопросы? Свяжитесь с нами сегодня!
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

export default AboutUs;