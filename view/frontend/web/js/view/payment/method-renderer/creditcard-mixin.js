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

                /**
                 * add po_number to data object
                 */
                getData: function () {
                    var data = this._super();
                    data.po_number = this.purchaseOrderNumber();
                    data.additional_data.poNumber = this.purchaseOrderNumber();
                    return data;
                }
            });
        }
    }
);
