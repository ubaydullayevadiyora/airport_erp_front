import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message } from "antd";
import axios from "../../utils/axios";

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);

  const getStaff = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/staff");
      setStaff(res.data);
    } catch (err) {
      message.error("Error fetching staff");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStaff();
  }, []);

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Shift",
      dataIndex: "shift",
      key: "shift",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button type="link">Edit</Button>
          <Button danger type="link">
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Staff List</h2>
      <Table
        dataSource={staff}
        columns={columns}
        rowKey="id"
        loading={loading}
      />
    </div>
  );
};

export default Staff;
