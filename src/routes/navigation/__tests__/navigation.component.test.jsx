import { screen, fireEvent } from "@testing-library/react";
import "jest-styled-components";

import { renderWithProviders } from "../../../utils/test/test.utils";
import Navigation from "../navigation.component";

describe("Navigation tests", () => {
  test("It should render a Sign in link and not a Sign out link if there is no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();
  });

  test("It should render a Sign out and not Sign in if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: true,
        },
      },
    });

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();
  });

  test("It should render a cart dropdown if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const openCartElement = screen.getByText(/go to checkout/i);
    expect(openCartElement).toBeInTheDocument;
  });

  test("It should not render a cart dropdown if isCartOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const closedCartElement = screen.queryByText(/go to checkout/i);
    expect(closedCartElement).toBeNull;
  });
});
