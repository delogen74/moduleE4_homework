function hasProperty(propertyName, obj) {
    return obj.hasOwnProperty(propertyName);
}

// Пример:
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(hasProperty("brand", car)); // true
console.log(hasProperty("color", car)); // false
