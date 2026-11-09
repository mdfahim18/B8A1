# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers control the visibility of class properties and methods in TypeScript. TypeScript provides three main access modifiers: `public`, `private`, and `protected`. It also provides the `readonly` modifier to prevent properties from being reassigned.

## Access Modifiers

### Public

A public property or method can be accessed inside the class, outside the class, and from child classes. It is the default access modifier, so writing `public` is optional.

Example:

```ts
class Employee {
  name: string = "Fahim";
}

const employee = new Employee();

console.log(employee.name); // Fahim
employee.name = "Rahim"; // Valid
```

### Private

A private property or method can only be accessed within the same class.

Example:

```ts
class Employee {
  private baseSalary: number = 22000;

  showSalary(): void {
    console.log(this.baseSalary);
  }
}

const employee = new Employee();

employee.showSalary();
// employee.baseSalary; // Error
```

Here, `this.baseSalary` works inside the class, but `employee.baseSalary` causes an error outside the class. TypeScript checks this restriction at compile time.

### Protected

A protected property or method can be accessed inside its class and child classes. It cannot be accessed directly from outside.

Example:

```ts
class Employee {
  protected baseSalary: number = 22000;
}

class Manager extends Employee {
  showSalary(): void {
    console.log(this.baseSalary);
  }
}

const manager = new Manager();

manager.showSalary();
// manager.baseSalary; // Error
```

Here, `Manager` can access `baseSalary` because it extends `Employee`.

### Access Modifier Comparison

| Modifier    | Same Class | Child Class | Outside Class |
| ----------- | ---------- | ----------- | ------------- |
| `public`    | Yes        | Yes         | Yes           |
| `protected` | Yes        | Yes         | No            |
| `private`   | Yes        | No          | No            |

## Readonly Modifier

`readonly` prevents a property from being reassigned after initialization. It is not a visibility modifier.

Example:

```ts
class Employee {
  readonly name: string = "Fahim";
}

const employee = new Employee();

console.log(employee.name);
// employee.name = "Rahim"; // Error
```

We can read the `name` property, but cannot assign a new value to it.

## Conclusion

Access modifiers control where class members can be accessed. `readonly` prevents properties from being reassigned. These features help us organize and protect class data.
