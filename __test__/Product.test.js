import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Product } from "../components";

describe("Product", () => {
  it("Should render properly", async () => {
    const product = {
      price: 123,
      name: "Le Beau",
      image: "someimage",
      slug: {
        current: "some slug",
      },
    };

    /**
     * To quickly explain what's going on: The query will traverse all elements in the DOM,
     * but we want to avoid returning more elements than needed. We make sure that none of the children
     * has the same text as its parent. This ensures that the element we return is the one that actually
     * contains the target text.
     */

    const getByTextContent = (text) => {
      // Passing function to `getByText`
      return screen.getByText((content, element) => {
        const hasText = (element) => element.textContent === text;
        const elementHasText = hasText(element);
        const childrenDontHaveText = Array.from(element?.children || []).every(
          (child) => !hasText(child)
        );
        return elementHasText && childrenDontHaveText;
      });
    };

    render(<Product product={product} />);

    const title = getByTextContent("Le Beau");
    const price = getByTextContent("$123");

    expect(title).toHaveTextContent("Le Beau");
    expect(price).toHaveTextContent("$123");
  });
});
