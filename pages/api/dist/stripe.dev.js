'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = handler;

var _stripe = _interopRequireDefault(require('stripe'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var stripe = new _stripe['default'](process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

function handler(req, res) {
  var _params, params, session;

  return regeneratorRuntime.async(
    function handler$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            if (!(req.method === 'POST')) {
              _context.next = 14;
              break;
            }

            _context.prev = 1;
            params =
              ((_params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                  {
                    shipping_rate: 'shr_1M3BwiSFWW4U2r36zIK06dCH',
                  },
                  {
                    shipping_rate: 'shr_1M3ByVSFWW4U2r36q4hhjMok',
                  },
                ],
                shipping_address_collection: {
                  allowed_countries: ['US', 'CA'],
                },
              }),
              _defineProperty(_params, 'shipping_options', [
                {
                  shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                      amount: 0,
                      currency: 'usd',
                    },
                    display_name: 'Free shipping',
                    delivery_estimate: {
                      minimum: {
                        unit: 'business_day',
                        value: 5,
                      },
                      maximum: {
                        unit: 'business_day',
                        value: 7,
                      },
                      shipping_address_collection: {
                        allowed_countries: ['US', 'CA'],
                      },
                      shipping_options: [
                        {
                          shipping_rate_data: {
                            type: 'fixed_amount',
                            fixed_amount: { amount: 0, currency: 'usd' },
                            display_name: 'Free shipping',
                            delivery_estimate: {
                              minimum: { unit: 'business_day', value: 5 },
                              maximum: { unit: 'business_day', value: 7 },
                            },
                          },
                        },
                        "billing_address_collection"="required"
                      ],
                    },
                  },
                },
              ]),
              _defineProperty(
                _params,
                'line_items',
                req.body.map(function (item) {
                  var img = item.image[0].asset._ref;
                  var newImage = img
                    .replace(
                      'image-',
                      'https://cdn.sanity.io/images/19id90o8/production/'
                    )
                    .replace('-webp', '.webp');
                  return {
                    price_data: {
                      currency: 'inr',
                      product_data: {
                        name: item.name,
                        images: [newImage],
                      },
                      unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                      enabled: true,
                      minimum: 1,
                    },
                    quantity: item.quantity,
                  };
                })
              ),
              _defineProperty(
                _params,
                'success_url',
                ''.concat(req.headers.origin, '/success')
              ),
              _defineProperty(
                _params,
                'cancel_url',
                ''.concat(req.headers.origin, '/canceled')
              ),
              _params); // Create Checkout Sessions from body params.

            _context.next = 5;
            return regeneratorRuntime.awrap(
              stripe.checkout.sessions.create(params)
            );

          case 5:
            session = _context.sent;
            res.status(200).json(session);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](1);
            res.status(_context.t0.statusCode || 500).json(_context.t0.message);

          case 12:
            _context.next = 16;
            break;

          case 14:
            res.setHeader('Allow', 'POST');
            res.status(405).end('Method Not Allowed');

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    },
    null,
    null,
    [[1, 9]]
  );
}
