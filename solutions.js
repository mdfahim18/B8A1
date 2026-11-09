"use strict";
// 1
Object.defineProperty(exports, "__esModule", { value: true });
const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
// console.log(multiplyValue(10));
// console.log(multiplyValue(10, 5));
// console.log(multiplyValue(7, 0));
// 2
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive";
    }
};
// console.log(processInput(" TypeScript "));
// console.log(processInput("")); // undefine hole ki handle korte hobe
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));
// 3
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
// 4
const concatenateArrays = (...arrays) => {
    return arrays.flat();
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true },
];
const getPopularCourses = (courses, minStudents) => {
    const newArr = courses.filter((course) => course.students >= minStudents && course.isPublished);
    return newArr;
};
// console.log(getPopularCourses(courses, 80));
// 6
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
];
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
// console.log(pluckValues(users, "name"));
// console.log(pluckValues(users, "id"));
// 7
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());
// 8
const validateAgeAsync = async (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 100);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
// validateAgeAsync(10).then((result) => {
//   console.log(result);
// });
validateAgeAsync(15).catch((error) => {
    console.log(error.message);
});
//# sourceMappingURL=solutions.js.map