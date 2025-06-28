import React from "react";
import { Table, Space, Tag } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Shift",
    dataIndex: "shift",
    key: "shift",
    render: (text) => <Tag color="blue">{text}</Tag>,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a style={{ color: "red" }}>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "Ali Karimov",
    role: "Flight Manager",
    shift: "Night",
    phone: "+998 90 123 45 67",
  },
  {
    key: "2",
    name: "Nodira Rasulova",
    role: "Security Officer",
    shift: "Day",
    phone: "+998 91 765 43 21",
  },
];

const Staff = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Staff List</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Staff;
