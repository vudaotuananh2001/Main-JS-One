# Học Javascript tutorial
# string: làm viêc với chuỗi
- let text = "John Doe"; => khai báo 1 chuỗi
- let length = text.length; => kiểm tra độ dài của 1 chuôi
- so sách chuôi : sử dụng 2 dấu ==
- các phương pháp làm  việc với chuối :
1. length : trả về độ dài chuôi
2. charAt (n) : trả về ký tự vị trí thứ n
3. at(n) : trả về ký tự vị trí thứ n
4. slice (m : n) : trích xuất 1 phần cửa chuỗi và trả về phần đã trích xuất và tạo ra chuỗi mới
        . nếu bỏ qua tham số n: thì chuỗi mới sẽ được cắt từ vị trí m đến hết
        . nếu tham số m , n là số âm thì sẽ được tính từ cuối chuỗi về đầu chuỗi
5. chuyển đổi hoa thường cho chuỗi
    toUpperCase(): viết in hoa toàn bộ chuỗi
    toLowerCase(): viết thường cho toàn bộ chuỗi
6. concat("content", stringContent );
7.trim(): cắt khoảng trắng 2 đầu chuỗi
    trimStart() : cắt khoảng trắng ở đầu chuỗi
    trimEnd() : cắt khoảng trắng ở cuối chuỗi
8.padStart() : sẽ chèn thêm chuỗi vào đầu chuỗi (nhiều lần) cho đến khi độ dài chuỗi nhất định
    ví dụ: let text = "5";
            let padded = text.padStart(4,"0");
         => text : sẽ là chuỗi bị chèn   
        0 : sẽ là chuỗI kí tự 0 được chèn vào đầu chuỗi
        4 : độ dài của chuỗi nhất định thì dừng chèn chuỗi không chèn thêm nữa
9. padEnd() : giống như padStart() như chuỗi sẽ chèn vào cuối chuỗi
10. repeat(n) : lặp chuỗi sẽ trả về chuỗi mới không làm thay đổi chuỗi ban đầu. có độ dài n lần
11. replace(oldStr, newStr) : sẽ thay đổi giá trị được chỉ định bằng 1 giá trị chuỗi mới
    . newStr sẽ được thay thế cho oldStr
12. replaceAll(oldStr, newStr) : giống như replace
13. split(): chuyển đổi chuỗi thành mảng

-- các phương thức tìm kiếm chuỗi:
1. indexOf() : trả về vị trí lần xuất hiện đầu tiền của 1 chuỗi. trả về -1 nếu không tìm thấy
2. lastIndexOf() : trả về vị trí xuất hiện cuối cùng của 1  chuỗi
3.includes("string",n) : trả về boolear nếu string xuất hiện
    nếu tồn tại n thì sẽ tìm chuỗi từ vị trí thứ n vể sau
4. startsWith() : trả về boolear nếu xuất hiện chuỗi string. sẽ tìm kiếm từ đầu -> cuối
5. endsWith() : trả về boolear nếu xuất hiện chuỗi string  sẽ tìm kếm từ cuối -> đầu

# number
* các lỗi thương gặp khi làm việc với sô
    NaN  (Not a number): không phải số
*chuyển đổi chuỗi thành sô : parseInt() and parseFloat().

# Array : mảng
- các mehod làm việc: 
    length: độ dài mảng
    sort: sắp xếp mảng
    push: thêm data vào mảng
- các funtion
   at(n): lấy ra data tại vị trí thứ n
   join() : nối tất cả các mảng thành 1 chuỗi string
   pop() : xoá phần tử cuối ra khỏi mảng
   push("value") : thêm mới 1 value vào mảng
   shift(): loại bỏ phần tử đầu tiên ra khỏi mảng
   unshift("value") : thêm mới value vào đầu mảng
   concat(): nối mảng
   flat() : tạo ra 1 mảng mới các phần tử nằm thằng hàng với nhau
   splice(m, n, value): thêm mục mới vào mảng
        m: vị trí cần thêm
        n: số lượng phần tử trong mảng xoá đi
        value: data cần thêm vào mảng
- tìm kiếm trong mảng
    indexOf(find_Data) : trả vị trí cả phần tử cần tìm . nếu không tìm thấy thì trả về -1
- sắp xếp trong mảng 
   (1) sort(): sắp xếp theo thứ tự tăng dần
   (2) reverse() : đảo ngược các phần tử trong mảng
   => kết hợp 1 và 2 thì có thể sắp xếp mnagr giảm dần
    toSorted() : sắp xếp mảng mới tăng dần mà không thay đổi mảng ban đầu
    toReversed() : đảo ngược mảng nhưng không làm thay đổi mảng ban đầu

- lặp mảng 
    forEach(): 
    map() : cho phép tạo ra 1 mảng mới bằng cách áp dụng 1 hàm cho từng phần tử . không làm thay đổi giá chị của mảng cũ
    flatMap(): đầu tiên ánh xạ tất cả các phần tử của một mảng và sau đó tạo một mảng mới bằng cách làm phẳng mảng đó. EX : const newArr = myArr.flatMap((x) => x * 2);
    filter() : tạo ra 1 mảng mới thoả mãn điều kiện

 # Date
 # const dataTime = new Date();
 # console.log(dataTime.getFullYear()); => lấy ra năm
 # console.log(dataTime.getMonth() + 1); => lấy ra tháng
 # console.log(dataTime.getDate()); => lấy ra ngày

 # Math
    math.PI : lấy ra số PI
    round(n): trả về số nguyên gần nhất
    ceil(n) : làm tròn lên số nguyên gần nhất
    trunc(n): trả về phân nguyên
    sign(n): trả vể 1 nếu n > 0 , trả về 0 nếu  n = 0 , trả về -1 nếu n < 0
    pow(x, y) : trả về luỹ thừa x mũ y
    sqrt(x) : trả về căn bậc 2 của x
    abs(x) : trả về trị tuyệt đối x

# JS (ES5)
    map(): 1 phương thức của mảng, cho phép tạo ra 1 mảng mới bằng cách áp dụng 1 hàm cho từng phần tử
            của mảng ban đầu. đây là 1 cách hiệu quả để thay đổi các phần tử trong mảng. Không làm thay đổi mảng gốc
    reduce() : 1 phương thức của mảng , cho phép giảm 1 mảng thành 1 giá trị duy nhất bằng cách áp dụng 1 hàm cho mỗi phần tử của mảng từu trái qua phải
    every() : 1 phương thức của mảng. cho phép kiểm tra điều kiện các phần tử nếu thoả mãn thì trả về true , còn không là false
    indexOf() : trả về vị trí mảnh xuất hiện đầu tiên
    lastIndexOf() : trả về vị trí mảng txuất hiện cuối cùng
    JSON.parse() : phương thức phân tích chuỗi JSON (JavaScript Object Notation)  để chuyển đổi thành đối tượng JS.
    JSON.stringify() : chuyển đổi 1 đối tượng hoặc mảng thành chuỗi JSON.
    Object.create() : tạo thêm 1 đối tượng mới từ khuôn đối tượng đã khai báo
    Object.keys() : trả về các thường của đối tượng

# ES6
    Destructuring  : cho phép bạn lấy giá trị từ mảnh hoặc đối tượng gán  chúng vào biến 1 cách nhanh chóng và dễ dàng. Giúp ngắn gọn hơn và dễ đọc hơn
    Maps(): là cấu trúc dữ liệu cho phép lưu trữ dữ liệu với cặp Key - value tương tự như đối tượng. Mao cho phép bất kỳ kiểu dữ liệu nào làm key
    Class(): định ngĩa ra 1 đối tượng và quản ký kế thừa theo (OOP)
    find: tìm phần tử thoả mãn điều kiện trong mảng hoặc list . nếu phần tử thoả mãn điều kiện thì dừng và trả về không tìm các phần tử phía sau
    Mayh.trunc(n): trả về phần nguyên của n
    Math.cbrt(n): trả về căn bậc 3 của n
    Math.log2(n): trả về logaric 2 của n
    Math.log10(n): trả về logaric 10 của n
    Number.EPSILON : khoảng cách nhỏ nhất giữa 2 số khác nhau
    Number.MIN_SAFE_INTEGER : giá trị nhỏ nhất của các số nguyên an toàn trong JS
    Number.MAX_SAFE_INTEGER : giá trị lớn nhất của các số nguyên an toàn trong JS

# Object
    - Khai báo 1 đối tượng : const person = {}; hoặc const person = new Object();
    -Constructor  : dùng để khởi tạo đối tượng 
    * Các method
        Object.assign(target, source) : cho phép sao chép từ 1 đối tượng nguồn sang đối tượng đích đến. đối tượng này sẽ thay đổi đối tượng đích và thay đổi nó
        Object.create(object) : tạo ra 1 đối tượng mới. sử dụng nguyên mẫu cho đối tượng mới
        Object.entries(object) : trả về 1 mảng chứa các cặp key - value của đối tượng dưới dạng mảng con
        Object.keys(object) : trả về 1 mảng chứa tất cả các thuộc tính của đối tượng
        Object.values(object) : trả về 1 mảng chứa tất cả các value của đối tượng

# Funtion
    - call() : là phương thức của đối tượng funtion cho phép bạn gọi hàm với 1 ngữ cảnh, tức là gán giá trị cho từ khoá this trong hàm đó.
    - apply(): giống như call() nhưng khác nhau là apply() cho phép bạn truyền 1 mảng hoặc 1 đối tượng 
    - bind() : cho phép tạo ra 1 hàm ngữ cảnh (this) được cố định và có thể truyền 1 tham số mặc định cho hàm đó. điều này hữu ích đảm bảo rằng 1 hàm sẽ luôn được gọi
                với 1 ngữ ảnh nhất định. đặc biệt trong tình huống hay sự kiện
    - JavaScript Closures : đóng gọi các funtion , các biến có thể được lấy từ bên ngoài không nhất thiểt phải truyền vào
    