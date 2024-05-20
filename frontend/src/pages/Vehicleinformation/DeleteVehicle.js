import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Swal from 'sweetalert2';
import { deleteVehicle } from "../../services/vehicleServices";

function DeleteVehicle(props) {
    const { onReload, item } = props;

    const deleteItem = async () => {
        const result = await deleteVehicle(item.id);
        if (result) {
            onReload();
            Swal.fire({
                title: "Đã Xóa!",
                text: "Đã Xóa Phương Tiện",
                icon: "Thành Công"
            });
        }

    };

    const handleDelete = () => {

        Swal.fire({
            title: "Bạn Có Chắc Muốn Xóa?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Vẫn Xóa!",
            cancelButtonText: "Hủy"
        }).then( (result) => {
            if (result.isConfirmed) {
                deleteItem();
            }
        });
    };
    return (
        <>
            <Button onClick={handleDelete}>
                <DeleteOutlined />
            </Button>
        </>
    )
}
export default DeleteVehicle;