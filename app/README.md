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
    - JavaScript Closures : đóng gọi các funtion , các biến có thể được lấy từ bên ngoài không nhất thiểt phải truyền vào . Mỗi funtion được coi là đóng gói bằng dấu ngoặc nhọn {} 

# Async (async - await)
    - callback() : là 1 hàm được truyền vào 1 hàm khác như 1 tham số và sẽ được thực thi sau khi hoàn thành. callback là 1 cách để xử lý bất đồng bộ cho
                phép quản lý được dòng chảy thực thi của chương trình
    - Asynchronous : là cách thực thi mã mà không làm ngừng hoạt động của các ứng dụng khác. điều này đặc biệt hữu ích khi trong các tính huống 
                    cần thực hiện các tác vụ mất thời gian như gọi api, đọc tệp,... 
    -Promises : là 1 cơ chế mạnh mẽ để sử lý bất đồng bộ , cho phép bạn làm việc với các giá trị mà có thể không có ngay lập tức,....
            * các trạng thái của Promises :
                + Pending : trạng thái ban đầu nghĩa là Promises chưa hoàn thành hoặc bị từ chối
                + Fulfilled : trạng thái thực hiện thành công và gửi trả dữ liệu về
                + Rejected : trạng thái Promises bị từ chối thường do các lỗi xảy ra
    - Async/Await : là cách tiếp cận hiện đại sử lý bất đồng bộ trong JS được giới thiệu ES2017 xây dựng trên cơ sở Promises giúp bạn viết mã đồng bộ dễ đọc hơn

# HTML DOM
    - HTML DOM (Document Object Model) : là mô hình lập trình tài liệu HTML, XML . cho phép bạn truy cập thay đổi nội dung , cấu trúc, nội dung ,...
                (TẤT CẢ NHỮNG GÌ TRÊN MÀN HÌNH WEB LÀ DOM) => DOM là 1 trang web
    - DOM Document :
        * Adding and Deleting Elements : thêm và xoá phần tử
            . document.createElement(' tên loại thẻ html ') : thêm mới 1 thẻ html
            . document.removeChild(element)	 : xoá phần tửu ra khỏi phần tử cha của nó
            . document.appendChild(element) :thêm 1 phần tửu con vào cuối phần tử cha
            . document.replaceChild(new, old) : thay thế phần tử con bằng phần tử mới
            . document.write(text) : ghi văn bản trực tiếp vào luồng đầu ra HTML và ghì đè lên toàn bộ tài lại cũ
    - DOM Form : gồm các thẻ input , action, method
    - DOM Events
        + onclick() : khi người dùng click vào thì thực hiện nghiệp vụ
        + onload() : thực hiện loà body. phải đặt ở trong thẻ body
        + onchange() : thực hiện đọc value trong thẻ input
    - DOM navigation : là quá trình truy cập và tương tác với các phần tử trong cấu trúc DOM . Bằng cach sử dụng các thuộc tính và phương thức của DOm,  có thể điều hướng
                        các nút(nodes), phần tử và quan hệ giữa chúng để điều hướng các nội dung

# BOM (Browser Object Model) : mô hình đối tượng trình duyệt , cho phép tương tác với cở sở tringh duyệt. đối tượng window là đối tượng chính trong BOM
  1. các thuộc tinh quan trọng
    - window.document : trả về đối tượng document hiện tại của trang, cho phép bạn truy cập và theo tác với DOM
    - window.location.href : tra về url tiện tại
    - window.history.back() : trở về trang trước
    - window.navigator.userAgent() :thông tin về trình duyệt
  2. các phương thức quan trọng
    - window.alert(): Hiển thị hộp thoại thông điệp
    - window.comfirm(): hiển thị hộp thoại xác nhận tuỳ chọn OK và Cancel
    - window.prompt() : hiện hộp thoại cho phép người dùng nhập giá trị
    - window.open() : mở mới 1 cửa sổ mới hoặc tab mới trình duyệt
    - window.moveTo(x, y) : cho phép bạn di chuyển cửa sổ hiện tại đến vị trí x, y
    - window.resizeTo(width, height) : thay đổi kích thước của sủu hiện tại 
     * các thuộc tính screen
     - screen.width : trả về chiều rộng màn hình
     - screen.availWidth : trả về chiều rộng khả dụng
     - screen.availHeight : trả về chiều cao khả dụng
     - screen.colorDepth : trả về độ sâu màu màn hình (mỗi bit cho mỗi pixel)
     - screen.pixelDepth : trả về độ sâu pixel màn hình
     * các thuộc tính location
     - window.location.href: trả vveef URL hiện tại
     - window.location.hostname : trả về host name là www hay http
     - window.location.pathname : trả về đường dẫn path
     - window.location.search : trả về chuỗi truy vấn strign query
     - window.location.hash : trả về chuỗi sau dấu #
        => các phương thức hữu ích
            + window.location.assign("url"): điều hướng đến đường dẫn url , nhưng không lưu vào lịch sử
            + window.location.replace("url"): thay thế url hiện tại bằng url mới không lưu vào lịch sử. có nghĩa sẽ không quay lại trang nếu ấn quay lại
            + window.location.reload(); tải lại trang hiện tại
    * các thuộc tính history : cho phép truy cập lại các trang trong lịch sử

        - history.back(): trở lại trang trước
        - history.forward() : tiến trang trước nếu có
    * các thuộc tính window.navigator 

     -  navigator.userAgent : lấy ra thông tin về trình duyệt, hệ điều hành, phiên bản
     - navigator.appName : trả về tên trình duyệt
     - navigator.appVersion : trả về bản trình duyệt
     - navigator.platform : trả về tên hệ điều hành (window,IOS, Linux,...)
     - navigator.language : trả về ngôn ngữ của trình duyệt
     - navigator.onLine : trả về người dùng có online hay không

    * setTimeout : sự kiện thời gian được sử dụng để thực hiênuj các tác vụ theo thời gian hoặc 1 khoảng thời gian nhất định
                    các ham này rất hữu ích cho việc lặp đi lặp lại, trì hoãn các hoạt động, hoặc lập lịch cho các tác vụ
        -setTimeout : hàm sẽ được gọi sau 1 khoảng thời gian nhất định tính bằng miliseconds
        -setInterval : sẽ được gọi liên tục trong khoảng thời gian nhất định tính bằng  miliseconds
        clearTimeout("tên hàm"): huỷ 1 hàm đã được lên lịch settimeout 
    +cookie : là 1 phần lưu trữ web cho phép lưu dữ liệu nhỏ trên máy tính người dùng theo dỡi các thông tin. thường được sử dụng để lưu thông tin người dùng, 
            tuỳ chọn trang web, và phiên đăng nhập
            => tạo ra 1 cookie gồm: document.cookie = "tênCookie=giáTri; expires=ngàyHếtHạn; path=/";
                .tênCookie : tên
                .giáTri : giá trị của cookie 
                .expires : ngày hết hạn
                .path : đường dẫn cookie có hiệu lực
# JS Web APIs
    1. Web Forms API 
        Validate API
            checkValidity() : trả về true nếu phần tử nhập vào hợp lệ
            setCustomValidity()	: đặt phần tử validationMessage  vào phần tử đầu vào
    2. localStorage: lưu thông tin cần thiết như thông tin đăng nhập,...
        ex: localStorage.setItem("name", "John Doe");
        * các phương thức:
          setItem(keyname, value)   : lưu trứ thông tin theo keyname truyền vào 1 value
          getItem(keyname) : lấy ra value được lưu trên localStorage
          removeItem(keyname) : xoá bỏ 1 keyname - value  trên localStorage
          clear(): xoá toàn bộ keyname - value  trên localStorage
    3. Fetch API : là 1 giao thức để thực hiện yêu cầu HTTP (GET, POST, PUT, DELETE)
        cú pháp: 
        try{
            const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                console.log(json);
        }catch (error){
            console.error(error.message);
        }
 
# AJAX
    * Các redyState Value 
        0  (UNSENT): yêu cầu đã được tạo nhưng chưa gửi 
        1 (opened) : yêi cầu được mở nhưng chưa được gửi đi
        2 (HEADERS_RECEIVED) : yêu cầu đã được gửi và máy chủ đã trả về các tiêu đề 
        3 (LOADING) : dữ liệu đã nhận nhưng chưa hoàn thành
        4 (DONE) : yêu cầu đã hoàn thành và có thể truy cập vào dữ liệu
    * lấy dữ liêu về dạng json