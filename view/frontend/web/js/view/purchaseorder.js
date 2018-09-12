define([
    'uiComponent'
], function(Component) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'SomethingDigital_PurchaseOrderNumber/purchaseorder',
        },

        initialize: function () {
            this._super();
            return this;
        },
    });
});
