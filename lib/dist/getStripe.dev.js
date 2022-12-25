"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stripeJs = require("@stripe/stripe-js");

var stripePromise;

var getStripe = function getStripe() {
  if (!stripePromise) {
    stripePromise = (0, _stripeJs.loadStripe)(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
};

var _default = getStripe;
exports["default"] = _default;