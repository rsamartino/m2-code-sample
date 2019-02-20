define([
        'jquery',
    ], function ($) {
        'use strict';
        return function (AuthnetCreditCard) {
            return AuthnetCreditCard.extend({
                defaults: {
                    template: 'SomethingDigital_PurchaseOrderNumber/payment/form',
                    purchaseOrderNumber: '',
                },

                /** @inheritdoc */
                initObservable: function () {
                    this._super()
                        .observe('purchaseOrderNumber');

                    return this;
                },
            });
        }
    }
);
