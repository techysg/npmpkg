function isShubham(string) {
    return string === "Shubham";
}

export function isEven(num) {
    return num % 2 === 0;
}

export function isOdd(num) {
    return num % 2 !== 0;
}

export function getLocalStorage({ key }) {
    return localStorage.getItem(key);
}

export default isShubham;
