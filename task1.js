function logOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

const person = {
    name: "Иван",
    age: 28,
    profession: "Разработчик"
};

const student = Object.create(person);
student.grade = "A";
student.university = "МГУ";

console.log("Собственные свойства объекта student:");
logOwnProperties(student);
// Вывод:
// grade: A
// university: МГУ
