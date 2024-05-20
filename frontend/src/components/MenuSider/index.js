import { Menu } from 'antd';
import { CarOutlined,BankOutlined, HomeOutlined  } from "@ant-design/icons";
import { NavLink, Outlet } from "react-router-dom";



function MenuSider() {
    const items = [
        {
            label: <NavLink to="/">Giới Thiệu</NavLink>,
            key: "home",
            icon: <HomeOutlined />,
        },
        {
            label: "Quản Lí Tài Khoản",
            key: "account-management",
            icon: <BankOutlined />,
            children: [
                {
                    label: <NavLink to="/account-balance">Số Dư</NavLink>,
                    key: "account-balance",
                },
                {
                    label: <NavLink to="/recharge">Nạp Tiền</NavLink>,
                    key: "recharge",
                },
                {
                    label: <NavLink to="/transaction-history">Lịch Sử Giao Dịch</NavLink>,
                    key: "transaction-history",
                }
            ]
        },
        {
            label: "Quản Lí Xe",
            key: "car",
            icon: <CarOutlined />,
            children: [
                {
                    label: <NavLink to="/vehicle-information">Thông tin Xe</NavLink>,
                    key: "vehicle-information",
                },
            ]
        },
    ];

    return (
        <>
            <Menu
                mode="inline"
                items={items}
                defaultSelectedKeys={["/"]} 
                defaultOpenKeys={["Home"]}
            >
                <Outlet />
            </Menu>
        </>
    )
}
export default MenuSider;
// path: "/",
// element: <LayoutDefault />,
// children: [
//     {
//         path: "/",
//         element: <Home />,
//     },
//     {
//         path: "login",
//         element: <Login />,
//     },
//     {
//         path: "register",
//         element: <Register />,
//     },
//     {
//         element: <PrivateRouter />,
//         children: [
//             {
//                 path: "account-balance",
//                 element: <AccountBalance />,
//             },
//             {
//                 path: "recharge",
//                 element: <Recharge />,
//             },
//             {
//                 path: "transaction-history",
//                 element: <TransactionHistory />,
//             },
//             {
//                 path: "user",
//                 element: <User />,
//             },
//             {
//                 path: "transaction-history",
//                 element: <TransactionHistory />,
//             },
//             {
//                 path: "vehicle-information",
//                 element: <VehicleInformation />,
//             },
//         ],