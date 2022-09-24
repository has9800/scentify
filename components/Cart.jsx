/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

function Cart() {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQty,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    // if we have the data, show loader
    toast.loading("Redirecting...");

    // call stripe instance to redirect to checkout pg
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft className="text-black" />
          <span className="heading text-black">Your Cart</span>
          <span className="cart-num-items light-brown-text font-bold">
            ({totalQuantities} items)
          </span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart flex flex-col items-center justify-center">
            <AiOutlineShopping size={150} className="text-black my-3" />
            <h1 className="text-black text-2xl my-3">Your cart is empty...</h1>
            <Link href="/">
              <button
                type="button"
                className="light-brown-bg text-white p-2 w-10/12 my-5 font-bold"
                onClick={() => setShowCart(false)}
              >
                Continue shopping
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div key={item._id} className="product mx-1">
                <img
                  src={urlFor(item?.image[0])}
                  alt={item._id}
                  className="cart-product-image"
                />
                <div className="text-black flex flex-col w-full">
                  <div className="flex flex-row justify-between items-center">
                    <h5 className="text-black">{item.name}</h5>
                    <h4>${item.price}</h4>
                    {/* <button type="button" className="remove-item" onClick="">
                                        <TiDeleteOutline />
                                    </button> */}
                  </div>
                  {/* <div className="flex flex-col">
                                    <div className="w-full">
                                         <p className="flex flex-row justify-between items-center">
                                            <span className="minus light-brown-bg rounded-sm w-16 p-1 text-white hover:scale-95 hover:transition-all hover:cursor-pointer shadow-lg" onClick={() => toggleCartItemQty(item._id, 'dec')}>
                                                <AiOutlineMinus className="mx-auto" />
                                            </span>
                                            <span className="num text-xl -mx-10" onClick="">
                                                {item.quantity}
                                            </span>
                                            <span className="plus light-brown-bg rounded-sm w-16 p-1 text-white hover:scale-95 hover:transition-all hover:cursor-pointer shadow-lg" onClick={() => toggleCartItemQty(item._id, 'inc')}>
                                                <AiOutlinePlus className="mx-auto" />
                                            </span>
                                        </p>
                                    </div>
                                </div> */}
                </div>
              </div>
            ))}
        </div>
        <div className="">
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total text-black">
                <h3 className="text-2xl">Subtotal:</h3>
                <h3 className="secondary-font text-lg">${totalPrice}</h3>
              </div>
              <div className="btn-container">
                <button type="button" className="btn" onClick={handleCheckout}>
                  Checkout with Stripe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
