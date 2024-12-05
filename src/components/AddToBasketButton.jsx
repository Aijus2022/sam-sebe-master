import React, { useState } from "react";
import { useBasket } from "../context/BasketContext"; // Access BasketContext

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
    <div className="relative flex flex-col items-center">
      <button
        onClick={handleAddToBasket}
        className={`px-6 py-2 text-white font-bold rounded-lg transition ${
          added ? "bg-green-500 cursor-default" : "bg-blue-600 hover:bg-blue-700"
        }`}
        disabled={added}
      >
        {added ? "Добавлено!" : "Добавить в корзину"}
      </button>
      {showMessage && (
        <p className="mt-2 text-sm text-green-600">Товар добавлен в корзину!</p>
      )}
    </div>
  );
};

export default AddToBasketButton;

