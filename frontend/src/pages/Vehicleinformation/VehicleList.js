import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getListVehicle } from "../../services/vehicleServices";
import { getCookie } from "../../components/helpers/cookie";
import EditVehicle from "./EditVehicle";
import DeleteVehicle from "./DeleteVehicle";

function VehicleList(props) {
    const {reload} = props;
    const [editReload, setEditReload] = useState(false);
    const CCCD = getCookie("CCCD");
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListVehicle(CCCD);
            setVehicle(response);
        }
        fetchApi();
    }, [reload, editReload]);
    // console.log(vehicle);
    const handleReload = () => {
        setEditReload(!editReload);
    }
    
    return(
        <>
        <Row gutter={[20, 20]}>
                {vehicle.length > 0 && (
                    vehicle.map(item => (
                        <Col  span={12} key={item.id}>
                            <Card title={item.licensePlates}>
                                <p>Thông Số Xe:{item.vehicleParameters}</p>
                                <EditVehicle onReload={handleReload} item={item}/>
                                <DeleteVehicle onReload={handleReload} item={item}/>
                            </Card>
                            
                        </Col>
                    ))
                )}
            </Row>
        </>
    )
}
export default VehicleList;