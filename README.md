Module that adds a custom field, Purchase Order Number, to the `AuthorizeNet_CreditCard` module's credit card form.

Adding this field required some frontend customization with javascript to add the new form field, backend customization via a plugin to save this information to the database, and a special configuration to allow the field's value to survive the form post. Without `poNumber` in the the `paymentInfoKeys` and `paymentAdditionalInformationKeys` configurations in `etc/config.xml`, the values were getting wiped from the payment method data object - something that took a lot of debugging to figure out.

I've preserved the git history of the module because I collaborated with another dev on this, but coded most of the functionality I described above.
