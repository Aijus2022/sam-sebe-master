import React, { useState } from "react";
import { useBasket } from "../context/BasketContext"; // Access BasketContext
import "../styles/AddToBasketButton.css"; // Separate button styles

const AddToBasketButton = ({ id, image, title, price }) => {
  const { addItem } = useBasket(); // Get the addItem function
  const [added, setAdded] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToBasket = () => {
    const item = { id, image, title, price };
    addItem(item); // Add the item to the basket

    setAdded(true);
    setShowMessage(true);

    // Reset state for button and message
    setTimeout(() => setAdded(false), 1000); // Reset button state
    setTimeout(() => setShowMessage(false), 2000); // Hide success message
  };

  return (
    <div className="add-to-basket-container">
      <button
        className={`add-to-basket-button ${added ? "clicked" : ""}`}
        onClick={handleAddToBasket}
      >
        {added ? "Добавлено!" : "Добавить в корзину"}
      </button>
      {showMessage && (
        <p className="add-to-basket-message">Товар добавлен в корзину!</p>
      )}
    </div>
  );
};

export default AddToBasketButton;
