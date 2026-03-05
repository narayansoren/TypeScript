## 1. Project init

- `npm init -y`
- `npm i -D typescript`
- `npx tsc --init`
- `npx tsc` `:` Convert's `ts` `->` `js` in dist folder📂 
- `node dist/index.js`
## package.json
```js
"scripts": {
    "start": "node dist/index.js",
    "dev": "npx tsc",
    "dev": "npx ts-node src/index.ts"
  }
```

# Type Inference vs. Annotation
```ts
// Type Inference
let drink = "water";

let cups = Math.random() > 0.5 ? 10 : `5`;

let userName = "itz-XD";
// userName = 23 ❌

// Type Annotation
let chaiFlavour: string = "masala chai";
chaiFlavour = "Ginger tea";

let numVal: number;
let boolVal: boolean;
```
# Union & Any

# The unknown Type
- `typeNarrowing`

# Handling Errors in Try/Catch
- type assertion
- The never Type

# Type Aliases (type)
- Literal type - custom data type

# Objects in TypeScript
- Duck Typing / Structural Typing
- Partial<T> Utility Type
- Required<T> Utility Type
- Pick<T> Utility Type
- Omit<T> Utility Type
# Functions Basics
- void Return Type
- Optional Parameters in Functions

# Arrays Basics
# Readonly Arrays
# Tuples
# Enums

# Classes Introduction
- Constructors
- Access Modifiers (Public, Private)
- Getters and Setters
- Static Members
- Abstract Classes

# Interfaces & Generics Intro
- Interfaces for Functions
- Index Signatures
- Interface Merging
- Generics Basics (<T>)
- Multiple Generic Types
- Generic Interfaces

# Type Declarations (.d.ts)
- Installing Libraries & Types (Axios)
- Fetching Data with Types
- `npm i some-library`
- `npm i -D @types/some-library`
- `.d.ts`
- Handling Axios Errors Safely
- import type Syntax