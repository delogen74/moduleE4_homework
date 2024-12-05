function createObjectWithoutPrototype() {
    return Object.create(null);
}

// Пример:
const obj = createObjectWithoutPrototype();
console.log(obj); // {}
console.log(Object.getPrototypeOf(obj)); // null

// Проверка
console.log(obj.toString); // undefined
