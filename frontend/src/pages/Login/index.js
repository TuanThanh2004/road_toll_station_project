import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../services/usersService";
import { getCookie, setCookie } from "../../components/helpers/cookie";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../actions/login";

function Login() {

    const token = getCookie("token");
    
    const isLogin = useSelector(state => state.loginReducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const CCCD = e.target[0].value;
        const password = e.target[1].value;
        const response = await login(CCCD, password);
        if (response.length > 0) {
            console.log(response);
            setCookie("CCCD", response[0].CCCD, 1);
            setCookie("name", response[0].name, 1);
            setCookie("token", response[0].token, 1);
            dispatch(checkLogin(true));
            window.location.reload();
            navigate("/");
        } else {
            alert("Sai CCCD hoặc mật khẩu!");
        }
        console.log(response);

    }
    return (
        <> {token ? (<Navigate to="/" />
            
        ) : (<form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <input type="CCCD" placeholder="Nhập CCCD" />
                </div>
                <div>
                    <input type="password" placeholder="Nhập Mật Khẩu" />
                </div>
                <button type="submit">Đăng Nhập</button>
            </form>)}

        </>
    )
}
export default Login;
