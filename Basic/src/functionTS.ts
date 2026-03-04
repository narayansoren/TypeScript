function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2);

function getChaiPrice(): number {
  //   return "20 Rupees";
  return 20;
}

function makeOrder(order: string): string | null {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("Chai is ready");
}

// function orderChai(type?: string) {}

function orderChai(type: string = "Masala") {}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  //   console.log();
  return 4;
}
