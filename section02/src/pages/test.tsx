// const Test = () => {
//   return <h1>test</h1>;
// };

import React, { useState } from "react";

// Product tipi
type Product = {
  id: number;
  name: string;
  price: number;
};

// CartItem tipi
type CartItem = Product & {
  quantity: number;
};

const products: Product[] = [
  { id: 1, name: "T-shirt", price: 20 },
  { id: 2, name: "Shoes", price: 50 }
];

const CartApp = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Item qo'shish
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Item mavjud bo‘lsa, quantity +1
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Yangi item qo‘shish
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Quantity oshirish
  const increase = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Quantity kamaytirish
  const decrease = (id: number) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // 0 bo‘lganini o‘chirish
    );
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((p) => (
        <div key={p.id}>
          <span>
            {p.name} - ${p.price}
          </span>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
          </span>
          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
        </div>
      ))}

      <h3>
        Total: $
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
};

export default CartApp;
