import { getCookie } from "../../components/helpers/cookie";
import { Col, Row } from 'antd';
import "./InfoUser.css";

function InfoUser() {
    const CCCD = getCookie("CCCD");
    const name = getCookie("name");
    return (
        <>
            {/* <div>
                    <p>User Name: {name}</p>
                    <p>CCCD: {CCCD}</p>
                </div> */}
            <div className="user">
                <Row >
                    <img className="userImage" src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg" alt="defaultAvatar" />
                    <Col className="nameUser" span={24}>Tên Tài Khoản: {name}</Col>

                    <Col className="CCCD" span={24} >CCCD: {CCCD}</Col>
                </Row>
            </div>

        </>
    )
}
export default InfoUser;
