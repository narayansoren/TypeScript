// # Interfaces for Functions

interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavor: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "Chai caffe",
};

// s.id = 23;   // Not allowed 📛

// # method definition
interface DiscountCalculator {
  (price: number): number;
}
// # usage
const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log(`Start`);
  },
  stop() {
    console.log(`Stop`);
  },
};

// # Index Signatures

interface ChaiRatings {
  [flavor: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};

// # suppose this is coming from library
interface User {
  name: string;
}

// # I created this interface with same name `User`
interface User {
  age: number;
}

const u: User = {
  name: "XD",
  age: 12,
};

// # Interface Merging

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}
