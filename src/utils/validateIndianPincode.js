export default function validateIndianPincode(pincode) {
    // Regular expression for Indian PIN code (6 digits)
    const pincodeRegex = /^[1-9][0-9]{5}$/;

    // Test the PIN code against the regular expression
    return pincodeRegex.test(pincode);
}
