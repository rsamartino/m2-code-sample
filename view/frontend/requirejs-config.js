var config = {
    map: {
        '*': {
            "Magento_Authorizenet/js/view/payment/method-renderer/authorizenet-directpost": "SomethingDigital_PurchaseOrderNumber/js/authorizenet-directpost",
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-payment-information': {
                'SomethingDigital_PurchaseOrderNumber/js/model/place-order-mixin': true
            },
            'AuthorizeNet_CreditCard/js/view/payment/method-renderer/creditcard': {
                'SomethingDigital_PurchaseOrderNumber/js/view/payment/method-renderer/creditcard-mixin': true
            }
        },
    },
};
