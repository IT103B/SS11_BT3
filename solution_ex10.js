/*
 * Trade-off giữa Function Declaration, Function Expression và Arrow Function
 *
 * Function Declaration:
 * - Được hoist cùng phần thân hàm, nên có thể gọi trước dòng khai báo.
 * - `this` phụ thuộc vào cách hàm được gọi.
 * - Có đối tượng `arguments`.
 * - Hợp với hàm tiện ích đặt tên cần dùng ở nhiều nơi.
 *
 * Function Expression:
 * - Bản thân biểu thức hàm không được hoist. Với `const`/`let`, tên biến ở
 *   trong Temporal Dead Zone cho đến khi tới dòng khởi tạo.
 * - `this` phụ thuộc vào cách hàm được gọi.
 * - Có đối tượng `arguments`.
 * - Hợp với hàm được gán cho biến hoặc truyền vào như một giá trị.
 *
 * Arrow Function:
 * - Không được hoist như một hàm; biến const/let chỉ dùng được sau khi khởi tạo.
 * - Không có `this` hay `arguments` riêng, mà kế thừa từ phạm vi bao ngoài.
 * - Cú pháp gọn, phù hợp với callback và hàm xử lý dữ liệu.
 *
 * Chuẩn đề xuất cho dự án Smart Home ES6+: dùng const + arrow function cho
 * callback và hàm tiện ích thông thường; dùng function declaration khi cần
 * gọi trước vị trí định nghĩa; dùng method/function thường cho hành vi cần
 * `this` riêng. Tránh dùng arrow function làm method cần `this` của object.
 */

const comparison = [
  {
    "Tiêu chuẩn": "Hoisting",
    "Function Declaration": "Toàn bộ hàm được hoist; có thể gọi trước khai báo",
    "Function Expression": "Không hoist phần hàm; biến const/let ở TDZ trước khởi tạo",
    "Arrow Function": "Không hoist phần hàm; biến const/let ở TDZ trước khởi tạo",
  },
  {
    "Tiêu chuẩn": "Cú pháp",
    "Function Declaration": "function name() {}",
    "Function Expression": "const fn = function () {}",
    "Arrow Function": "const fn = () => {}",
  },
  {
    "Tiêu chuẩn": "this",
    "Function Declaration": "Động: phụ thuộc cách gọi",
    "Function Expression": "Động: phụ thuộc cách gọi",
    "Arrow Function": "Lexical: kế thừa từ phạm vi bên ngoài",
  },
  {
    "Tiêu chuẩn": "arguments",
    "Function Declaration": "Có arguments riêng",
    "Function Expression": "Có arguments riêng",
    "Arrow Function": "Không có arguments riêng",
  },
  {
    "Tiêu chuẩn": "Khuyến nghị",
    "Function Declaration": "Hàm tiện ích có tên, cần hoisting",
    "Function Expression": "Hàm lưu trong biến hoặc truyền như giá trị",
    "Arrow Function": "Callback và hàm tiện ích ES6+",
  },
];

function declarationHoistingExample() {
  return "Function Declaration gọi được trước khi định nghĩa.";
}

console.log(declarationHoistingExample());
console.table(comparison);

const functionExpressionExample = function () {
  return "Function Expression cần khởi tạo trước khi gọi.";
};

const arrowFunctionExample = () => "Arrow Function cần khởi tạo trước khi gọi.";

console.log(functionExpressionExample());
console.log(arrowFunctionExample());

if (typeof module !== "undefined") {
  module.exports = {
    comparison,
    declarationHoistingExample,
    functionExpressionExample,
    arrowFunctionExample,
  };
}
