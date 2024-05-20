import React, { useState } from 'react';
import { Button, Col, Input, Modal, Row, Form } from 'antd';
import { getCookie } from '../../components/helpers/cookie';
import {  editVehicle } from '../../services/vehicleServices';
import Swal from 'sweetalert2';

function EditVehicle(props) {
    const { onReload, item } = props;

    const CCCD = getCookie('CCCD');
    const [data, setData] = useState(item);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const showConfirm = (e) => {
        if( data.licensePlates === ''|| data.vehicleParameters === '') {
            alert("Hãy Điền Đầy Đủ Thông Tin");
        } else {
            Swal.fire({
            title: "Bạn Có Chắc Muốn Sửa?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Vẫn Chỉnh Sửa!",
            cancelButtonText: "Hủy"
        }).then((result) => {
            if (result.isConfirmed) {
                handleOk(e);
                Swal.fire({
                    title: "Đã Chỉnh Sửa!",
                    text: "Đã Chỉnh Sửa Phương Tiện.",
                    icon: "Thành Công"
                });
            }
        });
        }
        

    };

    const handleOk = async (e) => {
        setLoading(true);
        e.preventDefault();
        const response = await editVehicle(data.id, data);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
        // console.log(response);
        // console.log(data);
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
        };

        setData(object);
    };
    // console.log(data);
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Chỉnh Sửa
            </Button>
            <Modal
                open={open}
                title="Thêm Xe"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={showConfirm}>
                        Chỉnh Sửa
                    </Button>,
                ]}
            >
                <Form name="form">
                    <Row gutter={[20, 20]}>
                        <Col span={24}>
                            <p>Biển Số Xe</p>
                            <Input name='licensePlates' value={data.licensePlates} onChange={handleChangeInput}/>
                            <p>Thông Tin Xe</p>
                            <Input name='vehicleParameters' value={data.vehicleParameters} onChange={handleChangeInput}/>
                        </Col>
                    </Row>

                </Form>
            </Modal>
        </>

    )
}
export default EditVehicle;
