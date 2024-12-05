import React from "react";
import { useParams, Link } from "react-router-dom";
import coursesData from "../data/courses.json";

const ProductTypePage = () => {
  const { category } = useParams(); // Extract category from URL

  // Find the matching category
  const selectedCategory = coursesData.categories.find(
    (cat) => cat.id === category
  );

  // Handle case where category is not found
  if (!selectedCategory) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-red-600">Категория не найдена</h1>
        <p className="text-gray-700">Пожалуйста, выберите другую категорию.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-[100px] sm:pt-[90px]"> {/* Added padding to match header height */}
      <h1 className="text-3xl font-bold text-teal-700 mb-6">
        {selectedCategory.name}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedCategory.courses.map((course) => (
          <Link
            to={`/course/${course.id}`} // Navigate to individual course page
            key={course.id}
            className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-teal-800 group-hover:text-blue-600">
                {course.name}
              </h2>
              <p className="text-gray-700">{course.description}</p>
              <p className="text-teal-600 font-bold mt-2">{course.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductTypePage;








