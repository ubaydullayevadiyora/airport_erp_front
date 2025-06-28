// src/pages/flights/Flights.jsx
import React from "react";
import { Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Flight No",
    dataIndex: "flightNo",
    key: "flightNo",
  },
  {
    title: "Destination",
    dataIndex: "destination",
    key: "destination",
  },
  {
    title: "Departure Time",
    dataIndex: "departureTime",
    key: "departureTime",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      let color = "green";
      if (status === "Delayed") color = "volcano";
      else if (status === "Cancelled") color = "red";
      return <Tag color={color}>{status}</Tag>;
    },
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
    flightNo: "UZ123",
    destination: "Tashkent",
    departureTime: "08:30",
    status: "On Time",
  },
  {
    key: "2",
    flightNo: "AF321",
    destination: "Paris",
    departureTime: "12:45",
    status: "Delayed",
  },
  {
    key: "3",
    flightNo: "TK789",
    destination: "Istanbul",
    departureTime: "17:10",
    status: "Cancelled",
  },
];

const Flights = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Flight List</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Flights;
