import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
];

const data = [
  {
    key: "1",
    time: "2025-06-28 08:30",
    action: "Created flight UZ123",
    user: "Admin",
  },
  {
    key: "2",
    time: "2025-06-28 09:10",
    action: "Updated staff info",
    user: "Operator01",
  },
];

const Logs = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">System Logs</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Logs;
