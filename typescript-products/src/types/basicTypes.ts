type UserRole = "admin" | "editor" | "user" | "viewer";// Literal Type
type UserID = string | number; //  Union Types
type UserIsEdit = boolean; // Type Boolean

type Ruler = {  // . Type Aliases
  name: string;
  id: UserID;
  keyActive: UserID;
  role: UserRole;
  isEdit: UserIsEdit;
};

export const admin: Ruler = {
  name: "Huy chu",
  id: 123,
  keyActive: 1599,
  role: "admin",
  isEdit: true,
};

export const editor: Ruler = {
  name: "ND11223",
  id: 223,
  keyActive: 7580,
  role: "editor",
  isEdit: true,
};

export const user: Ruler = {
  name: "nam",
  id: 'U-303253',
  keyActive: 1599,
  role: "user",
  isEdit: false,
};

export const viewer: Ruler = {
  name: "thai",
  id: 'V-092237',
  keyActive: 1599,
  role: "viewer",
  isEdit: false,
};


type ResponseType = string | number | boolean;

const response1: ResponseType = "success"; // ✔️
const response2: ResponseType = 200;       // ✔️
const response3: ResponseType = false;      // ✔️

console.log(response1);
console.log(response2);
console.log(response3);

let value: unknown;
value = 123;

if (typeof value === "string") {
  console.log("Chuỗi:", value.toUpperCase());
} else if (typeof value === "number") {
  console.log("Số:", value.toFixed(2));
} else if (typeof value === "boolean") {
  console.log("Boolean:", value ? "Đúng" : "Sai");
} else {
  console.log("Kiểu dữ liệu không hỗ trợ");
}

console.log(value)