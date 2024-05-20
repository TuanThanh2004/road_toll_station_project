// import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { getCookie } from "../helpers/cookie";

function PrivateRouter() {
    const token = getCookie("token");
    return (
        <>
        {token ? (<Outlet />) : (<Navigate to="/login"/>)}
        </>
    )
}
export default PrivateRouter;