// src/pages/flights/Flights.jsx
import React, { useEffect, useState } from "react";
import { Table, Tag, Space, Modal, Form, Input, Button, message } from "antd";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const fetchFlights = async () => {
    const res = await fetch(`${VITE_API_BASE}/flights`);
    const data = await res.json();
    setFlights(data);
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleAdd = async () => {
    try {
      const values = await form.validateFields();
      await fetch(`${VITE_API_BASE}/flights`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      message.success("Flight added successfully");
      form.resetFields();
      setIsModalOpen(false);
      fetchFlights();
    } catch (err) {
      message.error("Failed to add flight");
    }
  };

  const columns = [
    { title: "Flight No", dataIndex: "flightNo", key: "flightNo" },
    { title: "Destination", dataIndex: "destination", key: "destination" },
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
        let color =
          status === "Delayed"
            ? "volcano"
            : status === "Cancelled"
            ? "red"
            : "green";
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

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Flight List</h2>
      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
        className="mb-4"
      >
        Add Flight
      </Button>
      <Table columns={columns} dataSource={flights} rowKey="id" />

      <Modal
        title="Add Flight"
        open={isModalOpen}
        onOk={handleAdd}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            name="flightNo"
            label="Flight No"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="destination"
            label="Destination"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="departureTime"
            label="Departure Time"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Flights;
