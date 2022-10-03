// Bước 1: Import module http
var http = require('http');
 
// Bước 2: Khởi tạo server
var server = http.createServer(function(request, response){
    // Biến request: là biến lưu trữ thông tin gửi lên của client
    // Biến response: là biến lưu trữ các thông tin trả về cho client
     
    // Thiết lập Header
    response.writeHead(200, {
        "Context-type" : "text/plain"
    });
     
    // Show thông tin
    response.write('Your URL is ' + request.url);
     
    // Kết thúc
    response.end();
});
 
// Bước 3: Lắng nghe cổng 300 thì thực hiện chương trình
server.listen(3000, function(){
    console.log('Connected Successfull!');
});
