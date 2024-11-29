import React, { useState } from "react";
import { useBasket } from "../context/BasketContext";
import "../styles/Checkout.css";

const Checkout = () => {
  const initialCheckoutInfo = {
    name: "",
    address: "",
    paymentMethod: "Кредитная карта",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    paypalEmail: "",
    bankAccount: "",
    sortCode: "",
  };

  const [checkoutInfo, setCheckoutInfo] = useState(initialCheckoutInfo);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState(""); // State for failure message
  const { clearBasket } = useBasket();

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

    // Basic validation
    if (!checkoutInfo.name) {
      setErrors((prev) => ({ ...prev, name: "Имя обязательно" }));
      valid = false;
    }
    if (!checkoutInfo.address) {
      setErrors((prev) => ({ ...prev, address: "Адрес обязателен" }));
      valid = false;
    }

    // Simulate payment outcome
    if (valid) {
      const isPaymentSuccessful = Math.random() > 0.5; // Mocked random payment success/failure

      if (isPaymentSuccessful) {
        setSuccessMessage(`Спасибо за покупку, ${checkoutInfo.name}!`);
        clearBasket();
        setCheckoutInfo(initialCheckoutInfo);

        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setFailureMessage("Ошибка оплаты. Пожалуйста, попробуйте снова.");
        // Clear failure message after 3 seconds
        setTimeout(() => setFailureMessage(""), 3000);
      }
    }
  };

  return (
    <div className="checkout-container">
      <h1>Оформление заказа</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={checkoutInfo.name}
            onChange={handleInputChange}
            className="input-field"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </label>
        <label>
          Адрес:
          <input
            type="text"
            name="address"
            value={checkoutInfo.address}
            onChange={handleInputChange}
            className="input-field"
          />
          {errors.address && <p className="error-text">{errors.address}</p>}
        </label>
        <label>
          Способ оплаты:
          <select
            name="paymentMethod"
            value={checkoutInfo.paymentMethod}
            onChange={handleInputChange}
            className="select-field"
          >
            <option value="Кредитная карта">Кредитная карта</option>
            <option value="PayPal">PayPal</option>
            <option value="Банковский перевод">Банковский перевод</option>
          </select>
        </label>

        {/* Conditional Fields */}
        {checkoutInfo.paymentMethod === "Кредитная карта" && (
          <div>
            <label>
              Номер карты:
              <input
                type="text"
                name="cardNumber"
                value={checkoutInfo.cardNumber}
                onChange={handleInputChange}
                className="input-field"
              />
            </label>
            <label>
              Срок действия:
              <input
                type="text"
                name="expirationDate"
                value={checkoutInfo.expirationDate}
                onChange={handleInputChange}
                className="input-field"
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                name="cvv"
                value={checkoutInfo.cvv}
                onChange={handleInputChange}
                className="input-field"
              />
            </label>
          </div>
        )}
        <button type="submit" className="submit-button">
          Завершить покупку
        </button>
      </form>

      {/* Success Message */}
      {successMessage && (
        <div className={`success-message ${successMessage ? "show" : ""}`}>
          {successMessage}
        </div>
      )}

      {/* Failure Message */}
      {failureMessage && (
        <div className={`failure-message ${failureMessage ? "show" : ""}`}>
          {failureMessage}
        </div>
      )}
    </div>
  );
};

export default Checkout;






