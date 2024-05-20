import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../components/helpers/cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../actions/login";

function Logout() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    deleteAllCookies();

    useEffect(() => {
        dispatch(checkLogin(false));
        // window.location.reload();
        navigate("/login");
        window.location.reload();
    },[]);
    return(
        <></>
    )
}
export default Logout;