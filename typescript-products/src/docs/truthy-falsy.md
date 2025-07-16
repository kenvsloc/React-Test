
# Trong JavaScript , giá trị truey là giá trị được xem xét truekhi gặp trong ngữ cảnh Boolean . Tất cả các giá trị đều là truey trừ khi chúng được định nghĩa là false . Nghĩa là, tất cả các giá trị đều là truey ngoại trừ false, 0, -0, 0n, "", null, undefined, NaN, , và document.all.

# JavaScript sử dụng kiểu ép buộc trong ngữ cảnh Boolean.

# Ví dụ về các giá trị đúng trong JavaScript (sẽ bị ép buộc truetrong ngữ cảnh boolean và do đó thực thi ifkhối):
```ts
js
Sao chép vào bảng tạm
if (true);
if ({});
if ([]);
if (42);
if ("0");
if ("false");
if (new Date());
if (-42);
if (12n);
if (3.14);
if (-3.14);
if (Infinity);
if (-Infinity);
Toán tử logic AND, &&
Nếu toán hạng đầu tiên là đúng, toán tử logic AND trả về toán hạng thứ hai:

js
Sao chép vào bảng tạm
true && "dog";
// returns "dog"

[] && "dog";
// returns "dog"



# Falsy
Giá trị falsy (đôi khi được viết là falsey ) là giá trị được coi là sai khi gặp trong ngữ cảnh Boolean .

JavaScript sử dụng chuyển đổi kiểu để ép buộc bất kỳ giá trị nào thành Boolean trong các ngữ cảnh yêu cầu, chẳng hạn như điều kiện và vòng lặp .

Bảng sau đây cung cấp danh sách đầy đủ các giá trị sai của JavaScript:

Giá trị	Kiểu	Sự miêu tả
vô giá trị	Vô giá trị	Từ khóa null— không có giá trị nào cả.
không xác định	Không xác định	undefined— giá trị nguyên thủy.
false	Boolean	Từ khóa false.
NaN	Con số	NaN— không phải là một con số.
0	Con số	Số Numberkhông, bao gồm cả 0.0, 0x0, v.v.
-0	Con số	Số Numberkhông âm, bao gồm cả -0.0, -0x0, v.v.
0n	BigInt	Số BigIntkhông, bao gồm cả 0x0n, v.v. Lưu ý rằng không có BigIntsố không âm nào — phủ định của 0nlà 0n.
""	Sợi dây	Giá trị chuỗi rỗng , bao gồm cả ''và ``.
document.all	Sự vật	Đối tượng sai duy nhất trong JavaScript là đối tượng tích hợp document.all.
Các giá trị nullvà undefinedcũng là null .

Ví dụ
Ví dụ về các giá trị sai trong JavaScript (bị ép thành sai trong ngữ cảnh Boolean và do đó bỏ qua khối if):

js
Sao chép vào bảng tạm
if (false) {
  // Not reachable
}

if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (0) {
  // Not reachable
}

if (-0) {
  // Not reachable
}

if (0n) {
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}
Toán tử logic AND, &&
Nếu đối tượng đầu tiên là falsy, nó sẽ trả về đối tượng đó:

js
Sao chép vào bảng tạm
console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0