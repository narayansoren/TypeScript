function WrapInArray<T>(item: T): T[] {
  return [item];
}

WrapInArray("masala");
WrapInArray(42);
WrapInArray({ flavor: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", 20);
pair("masala", { flavor: "Ginger" });

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 10 };
const numberBoxCup: Box<string> = { content: "10" };

// Partial<T>

// # Generics real world use case: API Response, form state (React)

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};
