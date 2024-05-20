import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import logo from "../../components/images/logo.png";
import logoFold from "../../components/images/logo-fold.png"
import { MenuUnfoldOutlined, MenuFoldOutlined, LoginOutlined, LogoutOutlined, UsergroupAddOutlined, UserOutlined } from "@ant-design/icons";
import "../LayoutDefault/LayoutDefault.css";

import MenuSider from '../../components/MenuSider';
import { NavLink, Outlet } from 'react-router-dom';
import { getCookie } from '../../components/helpers/cookie';
import { useSelector } from 'react-redux';
import FooterWeb from '../Footer';


const { Footer, Sider, Content } = Layout;
function LayoutDefault() {
    const token = getCookie("token");
    const isLogin = useSelector(state => state.loginReducer);
    // console.log(isLogin);
    // console.log(token);
    
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Layout className="layout-default">
                <header className="header">
                    <div className={"header__logo" + (collapsed && "header__logo--collapsed")}>
                        <img src={collapsed ? logoFold : logo} alt="Logo" />
                    </div>
                    <div className="header__nav">
                        <div className="header__left">
                            <div className="heder__collapse">
                                <Button
                                    width="25%"
                                    className="MenuOutlined"
                                    type="text"
                                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        fontSize: '16px',
                                        width: 62,
                                        height: 62,
                                    }}
                                /></div>
                        </div>
                        <div className="header__right">
                            {(token) ? (
                                <>
                                    <Button>
                                        <NavLink to="info-user">
                                            <UserOutlined /> Tài Khoản</NavLink>
                                    </Button>
                                    <Button>
                                        <NavLink to="logout"><LogoutOutlined /> Đăng Xuất</NavLink>
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button >
                                        <NavLink to="/login"><LoginOutlined /> Đăng Nhập</NavLink>
                                    </Button>
                                    <Button>
                                        <NavLink to="/register"><UsergroupAddOutlined /> Đăng Kí</NavLink>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </header>
                <Layout className="main">
                    <Sider theme='light' className="sider" collapsed={collapsed}>
                        <MenuSider />
                    </Sider>
                    <Content className="content">
                        <div>
                            <Outlet />
                        </div>
                        
                    </Content>

                </Layout>
                <Footer >
                    <FooterWeb />
                </Footer>
            </Layout>
        </>
    )
}
export default LayoutDefault;