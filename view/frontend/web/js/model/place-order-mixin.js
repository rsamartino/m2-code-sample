define([
    'jquery',
    'mage/utils/wrapper',
], function ($, wrapper) {
    'use strict';

    return function (placeOrderAction) {
        /** Override place-order-mixin for set-payment-information action as they differs only by method signature */
        return wrapper.wrap(placeOrderAction, function (originalAction, messageContainer, paymentData) {
            if (paymentData.method === 'authorizenet_directpost') {
                // mutate paymentData by including purchase order number
                paymentData['po_number'] = $('#po_number').val();
            }
            return originalAction(messageContainer, paymentData);
        });
    };
});

