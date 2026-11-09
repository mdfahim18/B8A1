# Type Alias vs Interface in TypeScript

## Introduction

TypeScript provides two useful features, type aliases and interfaces, to define custom types and describe the structure of data. Both can define object structures, but they have some differences.

## What Is an Interface?

An interface defines the structure or shape of an object. It specifies which properties and methods an object should have and their types.

Example:

```ts
interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badge: string[];
}
```

Here, `IUser` describes the structure of a user object. An object using this interface must follow the defined structure.

Interfaces are commonly used for object structures and class contracts. They also support declaration merging, which allows multiple interfaces with the same name to be combined. However, an interface cannot directly represent a primitive type or a union type.

## What Is a Type Alias?

A type alias uses the `type` keyword to give a name to an existing type or create a custom type.

Primitive Type Alias:

```ts
type UserName = string;

const userName: UserName = "Fahim";
```

Object Type:

```ts
type Address = {
  holdingNumber: number;
  streetName: string;
};
```

Union Type:

```ts
type UserStatus = "active" | "inactive";

const userStatus: UserStatus = "active";
```

Here, `UserName` is an alias for the existing `string` type. Type aliases are removed during compilation and do not exist at runtime.

## When Should You Choose Type or Interface?

Both can define object structures. The choice depends on what you need.

Use Interface when working with object structures, class contracts, or extending existing interfaces.

Use Type Alias when working with primitive types, union types, intersection types, tuples, or more complex type combinations.

Example of Interface Extension:

```ts
interface IUser {
  name: string;
}

interface IEmployee extends IUser {
  employeeId: number;
}
```

Example of Type Intersection:

```ts
type User = {
  name: string;
};

type Employee = User & {
  employeeId: number;
};
```

## Conclusion

Interfaces are useful for defining and extending object structures. Type aliases provide more flexibility for creating different kinds of types. Understanding their differences helps us choose the right one for our needs.
