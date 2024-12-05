import React, { useState, useEffect } from "react";
import { useBasket } from "../context/BasketContext";

const Checkout = () => {
  const initialCheckoutInfo = {
    name: "",
    address: "",
    paymentMethod: "Кредитная карта",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  };

  const [checkoutInfo, setCheckoutInfo] = useState(initialCheckoutInfo);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const { clearBasket } = useBasket();
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to adjust top padding/margin
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!checkoutInfo.name) {
      setErrors((prev) => ({ ...prev, name: "Имя обязательно" }));
      valid = false;
    }
    if (!checkoutInfo.address) {
      setErrors((prev) => ({ ...prev, address: "Адрес обязателен" }));
      valid = false;
    }

    if (valid) {
      const isPaymentSuccessful = Math.random() > 0.5; // Mocked payment success/failure

      if (isPaymentSuccessful) {
        setSuccessMessage(`Спасибо за покупку, ${checkoutInfo.name}!`);
        clearBasket();
        setCheckoutInfo(initialCheckoutInfo);

        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setFailureMessage("Ошибка оплаты. Пожалуйста, попробуйте снова.");
        setTimeout(() => setFailureMessage(""), 3000);
      }
    }
  };

  return (
    <div
      className={`transition-all duration-300 ${
        scrolled ? "mt-0 pt-0" : "mt-16 pt-12"
      }`}
    >
      <div className="max-w-4xl mx-auto p-8">
        {/* Checkout Form Container */}
        <div className="p-8 bg-white border border-gray-300 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Оформление заказа
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium text-gray-700">
                Имя:
                <input
                  type="text"
                  name="name"
                  value={checkoutInfo.name}
                  onChange={handleInputChange}
                  className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                />
              </label>
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Адрес:
                <input
                  type="text"
                  name="address"
                  value={checkoutInfo.address}
                  onChange={handleInputChange}
                  className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                />
              </label>
              {errors.address && (
                <p className="text-sm text-red-500 mt-1">{errors.address}</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Способ оплаты:
                <select
                  name="paymentMethod"
                  value={checkoutInfo.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                >
                  <option value="Кредитная карта">Кредитная карта</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Банковский перевод">Банковский перевод</option>
                </select>
              </label>
            </div>

            {checkoutInfo.paymentMethod === "Кредитная карта" && (
              <div className="space-y-6">
                <div>
                  <label className="block font-medium text-gray-700">
                    Номер карты:
                    <input
                      type="text"
                      name="cardNumber"
                      value={checkoutInfo.cardNumber}
                      onChange={handleInputChange}
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                    />
                  </label>
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Срок действия:
                    <input
                      type="text"
                      name="expirationDate"
                      value={checkoutInfo.expirationDate}
                      onChange={handleInputChange}
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                    />
                  </label>
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    CVV:
                    <input
                      type="text"
                      name="cvv"
                      value={checkoutInfo.cvv}
                      onChange={handleInputChange}
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                    />
                  </label>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Завершить покупку
            </button>
          </form>

          {successMessage && (
            <div className="mt-6 p-4 bg-green-100 border border-green-500 text-green-700 rounded-md shadow">
              {successMessage}
            </div>
          )}

          {failureMessage && (
            <div className="mt-6 p-4 bg-red-100 border border-red-500 text-red-700 rounded-md shadow">
              {failureMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;










