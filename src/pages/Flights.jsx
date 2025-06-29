import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag, message, Modal } from "antd";
import axios from "axios";
import AddFlightModal from "../components/modals/AddFlightModal";
const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const fetchFlights = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/flights");
      setFlights(res.data);
    } catch (err) {
      message.error("Failed to load flights");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleAdd = () => {
    setEditMode(false);
    setSelectedFlight(null);
    setModalOpen(true);
  };

  const handleEdit = (record) => {
    setEditMode(true);
    setSelectedFlight(record);
    setModalOpen(true);
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this flight?",
      content: `Flight: ${record.flightNo}`,
      okText: "Yes",
      cancelText: "No",
      onOk: async () => {
        try {
          await axios.delete(`http://localhost:5000/api/flights/${record._id}`);
          message.success("Deleted successfully");
          fetchFlights();
        } catch {
          message.error("Delete failed");
        }
      },
    });
  };

  const handleSubmit = async (values) => {
    setSubmitLoading(true);
    try {
      if (editMode) {
        await axios.put(
          `http://localhost:5000/api/flights/${selectedFlight._id}`,
          values
        );
        message.success("Updated successfully");
      } else {
        await axios.post("http://localhost:5000/api/flights", values);
        message.success("Flight added");
      }
      fetchFlights();
      setModalOpen(false);
    } catch {
      message.error("Something went wrong");
    } finally {
      setSubmitLoading(false);
    }
  };

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
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color =
          status === "On Time"
            ? "green"
            : status === "Delayed"
            ? "volcano"
            : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a onClick={() => handleDelete(record)} style={{ color: "red" }}>
            Delete
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">✈️ Flight List</h2>
        <Button type="primary" onClick={handleAdd}>
          + Add Flight
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={flights}
        loading={loading}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
      />

      <AddFlightModal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        confirmLoading={submitLoading}
        editMode={editMode}
        initialValues={selectedFlight}
      />
    </div>
  );
};

export default Flights;
