import "./Footer.css"
function FooterWeb() {
 return(
    <>
     <footer class="footer">
        <div class="footer-container">
            <div class="footer-column">
                <h3>Về Chúng Tôi</h3>
                <p>Chúng tôi là một công ty cung cấp dịch vụ di chuyển qua các tuyến BOT tự động không dừng.</p>
            </div>
            <div class="footer-column">
                <h3>Liên Hệ</h3>
                <ul>
                    <li>Email: nguyenvanA@gmail.com</li>
                    <li>Điện thoại: +099999999</li>
                    <li>Địa chỉ: TP.HCM</li>
                </ul>
            </div>
        </div>
        <div class="footer-social">
            <a href="https://www.facebook.com/profile.php?id=100076270958738"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="footer-bottom">
            &copy; 2024 Your Company. All rights reserved.
        </div>
    </footer>
    </>
 )
}
export default FooterWeb;