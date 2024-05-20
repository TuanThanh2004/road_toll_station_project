import { useEffect, useState, useRef } from "react";
import { getTransactionHistory } from "../../services/transactionHistory";
import { getCookie } from "../../components/helpers/cookie";
import "./TransactionHistory.css"
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useHref } from "react-router-dom";
function TransactionHistory() {

    const CCCD = getCookie("CCCD");
    const [transactionHistory, setTransactionHistory] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTransactionHistory(CCCD);
            setTransactionHistory(response);
        }
        fetchApi();
    }, []);
    console.log(transactionHistory);

    const dataSource = [];

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: "ID",
            dataIndex: "key",
            key: "id"
        },
        {
            title: "Biển Số Xe",
            dataIndex: "licensePlates",
            ...getColumnSearchProps('licensePlates'),
        },
        {
            title: "Mã Trạm",
            dataIndex: "stationCode",
            ...getColumnSearchProps('stationCode'),
        },
        {
            title: "Thời Gian",
            dataIndex: "time",
            ...getColumnSearchProps('time'),
        },
        {
            title: "Số tiền",
            dataIndex: "money"
        }

    ];
    const numberOfRows = transactionHistory.length;

    for (let index = 0; index < numberOfRows; index++) {
        const rowData = {};
        rowData[`key`] = index + 1;
        rowData[`licensePlates`] = transactionHistory[index].licensePlates;
        rowData[`stationCode`] = transactionHistory[index].stationCode;
        rowData[`time`] = transactionHistory[index].time;
        rowData[`money`] = transactionHistory[index].money;

        dataSource.push(rowData);
    }



    return (
        <>
            <div className="TH">
                <header className="header">
                    <Table className="table" columns={columns} dataSource={dataSource} />
                </header>
            </div>
        </>
    )
}
export default TransactionHistory;
