import { Navigate, useNavigate } from "react-router-dom";
import { checkExits, register } from "../../services/usersService";
import { generateToken } from "../../components/helpers/generateToken";
import { getCookie } from "../../components/helpers/cookie";

function Register() {

    const token = getCookie("token");

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const CCCD = e.target[1].value;
        const password = e.target[2].value;
        const money = 0;

        const checkExitsCCCD = await checkExits("CCCD", CCCD);
        if (checkExitsCCCD.length > 0) {
            alert("CCCD da ton tai!");
        } else {
            const options = {
                name: name,
                CCCD: CCCD,
                password: password,
                money: money,
                token: generateToken()
            }

            const response = await register(options);
            // console.log(response);
            if (response) {
                navigate("/login");
            } else {
                alert("Đăng Kí Thất Bại");
            }
        };

    }
    return (
        <>
            {token ? (<Navigate to="/" />
            ) : (<form onSubmit={handleSubmit}>
                <h2>Đăng Kí</h2>
                <div>
                    <input type="name" placeholder="Nhập Họ Tên" />
                </div>
                <div>
                    <input type="CCCD" placeholder="Nhập CCCD" />
                </div>
                <div>
                    <input type="password" placeholder="Nhập Mật Khẩu" />
                </div>
                <button type="submit">Đăng Kí</button>
            </form>)
            }
        </>
    )
}
export default Register;
