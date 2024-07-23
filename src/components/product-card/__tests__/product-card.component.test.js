import { screen, fireEvent, waitFor } from "@testing-library/react";
import "jest-styled-components";

import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";

describe("Product Card tests", () => {
  test("It should add the product item when Product Card button is clicked", () => {
    const mockProduct = {
      id: 1,
      imageUrl: "test",
      name: "Item A",
      prices: 10,
    };

    const { store } = renderWithProviders(<ProductCard product={mockProduct} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });

    const addToCartButtonElement = screen.getByText(/add to cart/i);

    fireEvent.click(addToCartButtonElement);
    fireEvent.click(addToCartButtonElement);
    expect(store.getState().cart.cartItems.length).toBe(1);
    expect(store.getState().cart.cartItems[0].quantity).toBe(2);
  });

  test("It should render the Product Card button", () => {
    const mockProduct = {
        id: 1,
        imageUrl: "test",
        name: "Item A",
        prices: 10,
      };
  
      renderWithProviders(<ProductCard product={mockProduct} />, {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      });
  
      const addToCartButtonElement = screen.getByText(/add to cart/i)
      expect(addToCartButtonElement).toBeInTheDocument;
  })
});
