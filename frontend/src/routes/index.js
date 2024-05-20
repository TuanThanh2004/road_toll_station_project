import PrivateRouter from "../components/PrivateRouter";
import LayoutDefault from "../layout/LayoutDefault";
import AccountBalance from "../pages/AccountBalance";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Recharge from "../pages/Recharge";
import Register from "../pages/Register";
import TransactionHistory from "../pages/TransactionHistory";
import VehicleInformation from "../pages/Vehicleinformation";
import InfoUser from "../pages/InfoUser";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "logout",
                element: <Logout />,
            },
            {
                element: <PrivateRouter />,
                children: [
                    {
                        path: "account-balance",
                        element: <AccountBalance />,
                    },
                    {
                        path: "recharge",
                        element: <Recharge />,
                    },
                    {
                        path: "transaction-history",
                        element: <TransactionHistory />,
                    },
                    {
                        path: "info-user",
                        element: <InfoUser />,
                    },
                    {
                        path: "transaction-history",
                        element: <TransactionHistory />,
                    },
                    {
                        path: "vehicle-information",
                        element: <VehicleInformation />,
                    },
                    {
                        path: "logout",
                        element: <Logout />,
                    },
                ],
            }
        ],


    },


]