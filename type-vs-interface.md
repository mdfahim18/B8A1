# Title

TypeScript e type ebong interface use kore amra nijeder moto custom type ba structure create korte pari.

## Introduction = Differences between type aliases and interface in TypeScript

## What is an Interface

interface holo Typescript er ektu feature jar maddhome e amra kono object structure ba shape nirdaron korte pari. mane ekti object er moddhe ki ki property ba method takbe ebong segular type ki hobe ta interface diye define korte pari.

```
interface IUser {
name: string;
age: number;
isActive: boolean;
action: () => void;
badge: string[];
}
```

ekane IUser ekta interface. ekane bole dicchi IUser type er kono object create korle tar moddhe takte hobe. name hobe string, age hobe numher, isActive hobe boolean, action hobe ektu function, badge hobe array of string. sadarono kono object er shape create korte interface use kora hoy. interface e amra direct primitive type lekte parbo na. ar union o use korte parbo na. Declaration merging kore type merge korte pari

#### interface diye object toiri

```

```

interface ke extend kora jay. jeta parent er type inherit korte pare.

## What is Type

type keyword use kore amra kono existing type er ekti new nam dite pari ba nijesso custom type create korte pari.

#### Example

```
type UserName = string;
```

ekane UserName holo ekta string er nam ba alias.
amra caile evabe o korte pari

```
const name: UserName = "Fahim";
```

```
const name: string = "Fahim";
```

ortat UserName kono JavaScript create korini. eta shudu string type ke ekta meaningful nam dise

type diye object o create kora jay

#### type diye object

```
type Address = {
  holdingNumber: number;
  streetName: string;
};
```

type muloto primite type lekte use kora hoy. union, intersection, use korte pari

## Conclusion type muloto primite type ar union, intersection use korte use kora hoy. onno dike iterface diye object shape banano jay. interface ke extend o kora jay. Declaration o support kore.

- Interface: Object structure, class contracts এবং extendable object definitions-এর জন্য।
- Type Alias: Union, intersection, primitive aliases, tuples এবং complex type composition-এর জন্য।
