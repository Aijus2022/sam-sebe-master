import React from "react";
import ContactForm from "../components/ContactForm"; // Import the ContactForm component

const AboutUs = () => {
  return (
        <div className="bg-[url('/images/marble3.jpg')] bg-cover bg-center text-white min-h-screen">
        {/* Hero Section */}
        <div className="w-full px-4 py-20 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Hero Text with Semi-Transparent Background */}
            <div className="bg-black bg-opacity-50 rounded-lg p-8 shadow-lg">
              <h1 className="text-5xl font-extrabold mb-6">
                Откройте мир практических знаний с Sam-sebe-Master
              </h1>
              <p className="text-lg text-gray-200 mb-4">
                Наши курсы помогут вам обрести практические навыки, которые
                позволят вам обновить свой дом, почувствовать уверенность в
                своих силах, и даже зарабатывать на своем мастерстве.
              </p>
              <p className="text-lg text-gray-200 mb-4">
                Испытайте радость от того, что вы можете создать что-то своими
                руками. Это чувство независимости, гордости и свободы, которое
                сложно описать словами.
              </p>
              <p className="text-lg text-gray-200">
                Наши опытные преподаватели помогут вам на каждом шагу. Наши
                офисы удобно расположены, чтобы вы могли легко начать обучение
                уже сегодня.
              </p>
            </div>

            {/* Hero Image */}
            <div>
              <img
                src="/images/about-us-hero.jpg" // Replace with your actual image URL
                alt="Практические курсы"
                className="w-full rounded-lg shadow-lg border border-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="w-full px-4 py-12 space-y-12">
          {/* Section 1: Practical Lessons */}
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 text-gray-800">
            <h2 className="text-3xl font-bold mb-6">
              Практичные уроки для вашего успеха
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              На наших курсах вы научитесь ремонтировать и обновлять свой дом,
              устанавливать новые светильники, делать косметический ремонт и
              многое другое. Уроки сосредоточены на практическом применении, что
              позволяет вам сразу же использовать полученные навыки в реальной
              жизни.
            </p>
            <p className="text-lg leading-relaxed">
              Нет ничего приятнее, чем ощущение, что вы можете сделать что-то
              своими руками. Это чувство гордости и удовольствия от того, что вы
              улучшаете свой дом или помогаете друзьям и семье.
            </p>
          </div>

          {/* Section 2: Empowerment and Independence */}
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 text-gray-800">
            <h2 className="text-3xl font-bold mb-6">
              Чувство независимости и уверенности
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Наши курсы помогают вам обрести уверенность в своих силах. Когда вы
              можете решить бытовые проблемы самостоятельно, вам больше не нужно
              полагаться на дорогих специалистов.
            </p>
            <p className="text-lg leading-relaxed">
              Более того, вы сможете заработать на своих новых навыках,
              предлагая услуги по ремонту и строительству другим.
            </p>
          </div>

          {/* Section 3: Skilled Tutors and Accessible Offices */}
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 text-gray-800">
            <h2 className="text-3xl font-bold mb-6">
              Опытные преподаватели и доступные офисы
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Наши преподаватели — это опытные мастера, которые не только знают
              свое дело, но и умеют объяснять сложные вещи простым языком.
            </p>
            <p className="text-lg leading-relaxed">
              Наши офисы удобно расположены, чтобы вы могли легко добраться до
              нас.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <ContactForm /> {/* Integrating the ContactForm component */}
          </div>
        </div>
      </div>
    
  );
};

export default AboutUs;





