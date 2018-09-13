<?php

namespace SomethingDigital\PurchaseOrderNumber\Plugin;

use Magento\Payment\Model\Method\Cc as CreditCardMethod;
use Magento\Framework\DataObject;

class PaymentMethodCc
{
    public function afterAssignData(
        CreditCardMethod $subject, 
        CreditCardMethod $result,
        DataObject $data
    ) {
        $purchaseOrder = $data->getPoNumber();
        if ($purchaseOrder === null) {
            return $result;
        }
        /** @var \Magento\Quote\Model\Quote\Payment $info */
        $info = $subject->getInfoInstance();
        // save purchase order number to object
        $info->addData(
            [
                'po_number' => $purchaseOrder,
            ]
        );
        return $result;
    }
}
