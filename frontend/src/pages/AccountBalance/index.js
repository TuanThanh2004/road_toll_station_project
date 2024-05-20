import { useEffect, useState } from "react";
import { getInfoUser } from "../../services/usersService";
import { getCookie } from "../../components/helpers/cookie";
import { Card } from "antd";

function AccountBalance() {
    const CCCD = getCookie("CCCD");
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getInfoUser(CCCD);
            setUser(response);
        }
        fetchApi();
    }, []);
    console.log(user);
    return (
        <>
            
                {user.length > 0 && (
                    <>
                    <Card>
                        <div>Họ Tên Người Dùng: {user[0].name}</div>
                        <div>Số Dư: {user[0].money}</div>
                        <div>CCCD: {user[0].CCCD}</div>
                    </Card>
                        
                    </>
                )}
            
        </>
    )
}
export default AccountBalance;