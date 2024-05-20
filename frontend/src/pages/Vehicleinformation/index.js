import { useState } from "react";

// import DeleteVehicle from "./DeleteVehicle";
import AddVehicle from "./AddVehicle";
import VehicleList from "./VehicleList";

function VehicleInformation() {
    const [reload, setReload] = useState(false);

    const handleReload = ()=> {
        setReload(!reload);
    }

    return (
        <>
            <AddVehicle onReload={handleReload}/>
            <VehicleList reload = {reload}/>


        </>
    )
}
export default VehicleInformation;
