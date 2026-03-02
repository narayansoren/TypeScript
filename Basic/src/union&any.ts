// Type union

let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success";

let airLineSeat: "aisle" | "window" | "middle" = "aisle";

airLineSeat = "window";

const orders = ["12", "20", "28", "42"];

// let currentorder: any;   // ❌ Avoid `any`
let currentorder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentorder = order;
    break;
  }
  currentorder = "53";
}

console.log(currentorder);
