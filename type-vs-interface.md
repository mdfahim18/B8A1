# Type Alias vs Interface in TypeScript

## Introduction

TypeScript provides two useful features, type aliases and interface, that allow us to create custom types and define the structure of data. Both can describe object structures, but they have some differences in their features and usage.

## What Is an Interface?

An interface is a TypeScript feature that allows us to define the structure or shape of an object. It specifies which properties and methods an object should have and what types those properties and methods should follow.

Example

```ts
interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badge: string[];
}
```

Here, IUser is an interface that describes the structure of a user object. Any object that follows this interface must have a name of type string, an age of type number, an isActive property of type boolean, an action function, and a badge array containing strings.

Interfaces are commonly used to define object structures. However, an interface cannot directly define primitive type aliases or represent a union type by itself. TypeScript also supports declaration merging with interfaces, which means multiple interface declarations with the same name can be combined.

## What Is a Type Alias?

A type alias is created using the type keyword. It allows us to give a new name to an existing type or define our own custom types.

Primitive Type Alias:

```ts
type UserName = string;

const name: UserName = "Fahim";
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

const status: UserStatus = "active";
```

In this example, UserName does not create a new JavaScript variable or type at runtime. It simply gives a meaningful name to the existing string type.

## When Should You Choose Type or Interface?

Both type aliases and interface can be used to define object structures, so choosing between them depends on the situation.

- Use Interface: When you mainly work with object structures, class contracts, or want to extend existing interfaces. Interfaces are also useful when declaration merging is needed.
- Use Type Alias: When you need to define primitive types, union types, intersection types, tuples, or combine different types into a more complex structure.

## Conclusion

In conclusion, interfaces are useful for defining and extending object structures, while type aliases offer more flexibility for creating different kinds of types. Understanding their differences helps us choose the right approach and write cleaner TypeScript code.
