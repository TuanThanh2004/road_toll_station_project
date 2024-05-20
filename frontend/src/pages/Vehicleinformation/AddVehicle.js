import React, { useState } from 'react';
import { Button, Col, Input, Modal, Row, Form } from 'antd';
import { getCookie } from '../../components/helpers/cookie';
import { generateToken } from '../../components/helpers/generateToken';
import { addVehicle } from '../../services/vehicleServices';
import Swal from 'sweetalert2'

function AddVehicle(props) {
    const { onReload } = props;

    const CCCD = getCookie('CCCD');
    let token = generateToken();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const showConfirm = (e) => {
        if(Object.keys(data).length === 0 || data.licensePlates === ''|| data.vehicleParameters === '') {
            alert("Hãy Điền Đầy Đủ Thông Tin");
        } else {
            Swal.fire({
            title: "Bạn Có Chắc Muốn Thêm?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Vẫn Thêm",
            cancelButtonText: "Hủy"
        }).then((result) => {
            if (result.isConfirmed) {
                handleOk(e);
                Swal.fire({
                    title: "Đã Thêm!",
                    text: "Đã Thêm Phương Tiện",
                    icon: "Thành Công!"
                });
            }
        });
        }
        

    };

    const handleOk = async (e) => {
        setLoading(true);
        e.preventDefault();
        const response = await addVehicle(data);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
        onReload();
    };
    const handleCancel = () => {
        setOpen(false);
    };


    const handleChangeInput = (e) => {
        const object = {
            ...data,
            [e.target.name]: e.target.value,
            CCCD: CCCD,
            token: token,
        };

        setData(object);
    };
    // console.log(data);
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Thêm Phương Tiện
            </Button>
            <Modal
                open={open}
                title="Them xe"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={showConfirm}>
                        Thêm
                    </Button>,
                ]}
            >
                <Form name="form">
                    <Row gutter={[20, 20]}>
                        <Col span={24}>
                            <p>Biển Số Xe</p>
                            <Input name='licensePlates' placeholder='Vi du:37B1...' onChange={handleChangeInput}/>
                            <p>Thông Tin Xe</p>
                            <Input name='vehicleParameters' placeholder='Vi du:mec10' onChange={handleChangeInput}/>
                        </Col>
                    </Row>

                </Form>
            </Modal>
        </>

    )
}
export default AddVehicle;
