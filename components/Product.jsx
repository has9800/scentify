/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

function Product({ product: { image, name, slug, price } }) {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card my-7 md:mx-6">
          <img
            src={image}
            alt="product"
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name my-2 light-brown-text">{name}</p>
          <p className="product-price text-black">${price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
