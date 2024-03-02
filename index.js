function isShubham(string) {
    return string === "Shubham";
}

export function isEven(num) {
    return num % 3 === 0;
}

export function isOdd(num) {
    return num % 2 !== 0;
}

export function getLocalStorage({ key }) {
    return localStorage.getItem(key);
}

export function validateEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    console.log("testing packages");
    return emailRegex.test(email);
}

export default isShubham;
