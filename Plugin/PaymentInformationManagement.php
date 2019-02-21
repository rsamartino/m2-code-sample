<?php

namespace SomethingDigital\PurchaseOrderNumber\Plugin;

use Magento\Sales\Api\OrderRepositoryInterface;

class PaymentInformationManagement
{
    /**
     * @var OrderRepositoryInterface
     */
    private $orderRepository;

    /**
     * PaymentInformationManagement constructor.
     * @param OrderRepositoryInterface $orderRepository
     */
    public function __construct(
        OrderRepositoryInterface $orderRepository
    )
    {
        $this->orderRepository = $orderRepository;
    }


    /**
     * save PO Number for authorize.net credit card orders, if it exists
     * gets saved to po_number column in sales_order_payment table
     *
     * @param \Magento\Checkout\Model\PaymentInformationManagement $subject
     * @param int $result
     * @param int $cartId
     * @param \Magento\Quote\Api\Data\PaymentInterface $paymentMethod
     */
    public function afterSavePaymentInformationAndPlaceOrder(
        \Magento\Checkout\Model\PaymentInformationManagement $subject,
        int $result,
        int $cartId,
        \Magento\Quote\Api\Data\PaymentInterface $paymentMethod
    )
    {
        if ($paymentMethod->getMethod() == 'anet_creditcard' && $paymentMethod->getPoNumber()) {
            $order = $this->orderRepository->get($result);
            $order->getPayment()->setPoNumber($paymentMethod->getPoNumber());
            $this->orderRepository->save($order);
        }
    }

}
