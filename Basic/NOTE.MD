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