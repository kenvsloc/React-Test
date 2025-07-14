# Kiểu Dữ Liệu Trong TypeScript

Dưới đây là một số ví dụ về các kiểu dữ liệu cơ bản trong TypeScript.
```ts
# ✅1. Boolean – Mảng
Chỉ nhận giá trị true hoặc false.

let isDone: boolean = false;

# 🔢2. Number Kieu so

let decimal: number = 6;
let hex: number = 0xf00d;     // Hexadecimal
let binary: number = 0b1010;  // Nhị phân
let octal: number = 0o744;    // Bát phân
let big: bigint = 100n;       // BigInt (số lớn)

# 3. ✏️String – Chuỗi ký tự
Lưu trữ văn bản, có thể dùng dấu nháy đơn ' ' hoặc kép " ".

let color: string = "blue";
color = 'red';
let fullName: string = `Alice`;
let age: number = 25;
let sentence: string = `mình tên là ${fullName}, năm nay mình ${age} tuổi.`;

# 4. 📋Array – Mảng
Có hai cách khai báo mảng:

let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];

# 🎯5. Tuple - Bộ giá trị cố định
Mảng với số lượng và kiểu dữ liệu cố định theo vị trí.

let person: [string, number];
person = ['John', 25]; // ✔️ OK
person = [25, 'John']; // ❌ Lỗi

# 📋6. Enum – Liệt kê
Kiểu dữ liệu liệt kê, đánh số tự động hoặc thủ công.

enum Color {
  Red,
  Green,
  Blue
}
let b: Color = Color.Blue;
console.log(b); // In ra: 2

enum Color {
  Red = 1,
  Green,
  Blue
}
let c: Color = Color.Green;
console.log(c); // In ra: 2

# ⚠️ 7. Any – Bất kỳ kiểu nào
Bỏ qua kiểm tra kiểu dữ liệu. Nên tránh nếu có thể.

let notSure: any = 4;
notSure = "maybe a string"; // ✔️ Được
notSure = false;             // ✔️ Được

# 📦 8. Void – Không trả về
Thường dùng cho hàm không trả về giá trị.

function logMessage(): void {
  console.log("Không có giá trị trả về");
}
logMessage(); // In ra: Không có giá trị trả về

# 🧱 9. Null và Undefined
Hai kiểu dữ liệu nguyên thủy đặc biệt.

let u: undefined = undefined;
let n: null = null;

Trong hệ thống loại của TypeScript, null và undefined là con của tất cả các kiểu khác → có thể gán cho number, string, v.v.

# 💀 10. Never – Không bao giờ xảy ra
Dùng cho hàm không bao giờ kết thúc thành công (ví dụ: throw error, loop vô tận).

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

# 🏗️ 11. Object – Đối tượng
Chỉ định kiểu dữ liệu là object, không phải primitive như number, string, v.v.

declare function create(o: object | null): void;

create({ prop: 0 }); // ✔️ OK
create(null);         // ✔️ OK
create(42);          // ❌ Lỗi