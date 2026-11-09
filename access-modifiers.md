# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers are an important part of Object-Oriented Programming (OOP) in TypeScript. They control the visibility of class properties and methods. TypeScript provides three main access modifiers: `public`, `private`, and `protected`. It also provides the `readonly` modifier to prevent properties from being reassigned.

### Access Modifiers

#### Public

A public property or method can be accessed from inside the class, outside the class, and from child classes.

Example:

```ts
class Employee {
  public name: string = "Fahim";
}

const employee = new Employee();

console.log(employee.name); // Fahim

employee.name = "Rahim"; // Valid
```

Here, we have explicitly used public.

But what happens if we do not write public?

In TypeScript, class members are public by default. So, both examples below mean the same thing:

```ts
class Employee {
  name: string = "Fahim";
}
```

```ts
class Employee {
  public name: string = "Fahim";
}
```

That is why we usually do not need to write public explicitly.

#### Private

A private property or method can only be accessed from within the same class.

Example:

```ts
class Employee {
  private baseSalary: number = 22000;

  showSalary() {
    console.log(this.baseSalary); // Valid
  }
}

const employee = new Employee();

employee.showSalary();

// employee.baseSalary; // Error
```

Here, this.baseSalary can be accessed inside the class, but accessing employee.baseSalary from outside the class causes an error.

This is a TypeScript compile-time restriction.

#### Protected

A protected property or method can be accessed from within the same class and its child classes. However, it cannot be accessed directly from outside the class.

Example:

```ts
class Employee {
  protected baseSalary: number = 22000;
}

class Manager extends Employee {
  showSalary() {
    console.log(this.baseSalary); // Valid
  }
}

const manager = new Manager();

manager.showSalary();

// manager.baseSalary; // Error
```

Here, Manager is a child class of Employee. Since it inherits from Employee, it can access the protected property.

### Access Modifier Comparison

| Modifier    | Same Class | Child Class | Outside Class |
| ----------- | ---------- | ----------- | ------------- |
| `public`    | Yes        | Yes         | Yes           |
| `protected` | Yes        | Yes         | No            |
| `private`   | Yes        | No          | No            |

### Readonly Modifier

`readonly` is not a visibility modifier. It is used to prevent a property from being reassigned after initialization.

Example:

```ts
class Employee {
  readonly name: string = "Fahim";
}

const employee = new Employee();

console.log(employee.name); // Fahim

// employee.name = "Rahim"; // Error
```

Here, we can read the name property, but we cannot assign a new value to it after initialization.

## Conclusion

Access modifiers control the visibility of class members in TypeScript. `public`, `private`, and `protected` define where members can be accessed, while `readonly` prevents properties from being reassigned. These modifiers help us write cleaner and more organized code.
