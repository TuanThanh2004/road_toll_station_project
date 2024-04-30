## Dự án sử dụng các ứng dụng của AI trong trạm thu phí BOT
Thực hiện bởi: Nguyễn Tuấn Thành
### Các chức năng:
- Lưu trữ Tên lái xe, Biển số, Loại xe có số chỗ ngồi, Số dư tài khoản, Lịch sử giao dịch, Số tờ tiền với từng loại trong cây BOT.
- Máy nhận dạng biển số ô tô: Sử dụng YOLO để lấy ảnh chỉ có biển số xe. Sau đó dùng OCR để lấy ra chuỗi kí tự biển số. Rồi tiếp tục các chức năng khác với những truy vấn vào CSDL.
- Khi máy quét nhận được xe thì xảy ra 2 trường hợp:
    - Số dư tài khoản còn trên số phí thu của loại xe thì tự động trừ tiền trong CSDL và ghi lại lịch sử giao dịch.
    - Số dư tài khoản ít hơn số phí thu thì hệ thống tính tiền tự trừ hết tiền và lái xe phải trả số tiền nợ còn lại bằng tiền mặt.
        - Khi trả tiền bằng tiền mặt: Lái xe bỏ tiền vào Hệ thống thu tiền mặt rồi nó sẽ tự dộng trả lại tiền thừa cho lái xe.
- Máy thu tiền mặt sẽ tự động kiểm tra xem với mỗi mức tiền thì còn bao nhiêu tờ, nếu số tờ mỗi mức mà ít hơn 100 tờ thì hiện ra thông báo để quản lí cây BOT có thể bảo thêm tiền vào máy.
