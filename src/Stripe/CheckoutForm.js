import React from "react";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: location.state.total,
            id: id,
          }
        );
        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 400 }}
      className="bg-slate-100 p-5 border rounded-md border-yellow-500 text-center mt-10 absolute top-1/4 left-1/2  -translate-x-1/2 w-1/2 "
    >
      <h1 className="text-lg font-bold text-red-500">E_Payment</h1>
      <CardElement className="p-2 w-[100%] h-32 pt-10" />
      <button className="mx-3 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2">
        Pay
      </button>
    </form>
  );
};
