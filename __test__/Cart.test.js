import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Cart } from "../components";
import StateContext from "../context/StateContext";

describe("Cart", () => {
  it("Should render the cart using context without crashing", () => {
    render(
      <StateContext>
        <Cart />
      </StateContext>
    );

    const title = screen.getByText(/your cart is empty/i);

    expect(title).toBeInTheDocument();
  });

  it("Should show correct titles for empty cart list", () => {
    render(
      <StateContext>
        <Cart />
      </StateContext>
    );

    const title = screen.getByRole("heading", {
      name: /your cart is empty/i,
    });

    const btnTitle = screen.getByRole("button", {
      name: /continue shopping/i,
    });

    expect(title).toHaveTextContent("Your cart is empty...");
    expect(btnTitle).toHaveTextContent("Continue shopping");
  });

  it("Should show correct titles for items in cart list", () => {
    render(
      <StateContext>
        <Cart />
      </StateContext>
    );

    // user interaction needed?
  });
});

/**
 * maybe if i simulate user interaction of adding a product to the cart,
 * then the cart will update?
 */
