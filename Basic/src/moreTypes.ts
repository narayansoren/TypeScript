let response: any = "42";
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

// type assertion

let bookString = '{"name: "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

// unknown or any

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;

// newValue.toUpperCase();
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

// try {
//                ❌
// } catch (error: any) {
//   console.log(error.message);
// }

// ✅
try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error");
}

const data: unknown = "Chai aur code";
const strData: string = data as string;

// type never

type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
  role; // type never
}

function neverReturn(): never {
  while (true) {}
}
