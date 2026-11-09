const multiplyValue = (value: number, multiplier = 2): number => {
  return value * multiplier;
};

multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
};

processInput(" TypeScript ");
processInput(7);
processInput(true);
processInput(false);

const formatCoordinate = (
  coordinate: readonly [number, number, string]
): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

concatenateArrays(["a", "b"], ["c", "d"]);
concatenateArrays([1, 2], [3, 4], [5]);

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

const getPopularCourses = (
  courses: Course[],
  minStudents: number
): Course[] => {
  return courses.filter(
    (course) => course.students >= minStudents && course.isPublished
  );
};

getPopularCourses(courses, 80);

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

pluckValues(users, "name");
pluckValues(users, "id");

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};

validateAgeAsync(10).then((result) => {
  console.log(result);
});

validateAgeAsync(15).catch((error) => {
  console.log(error.message);
});
