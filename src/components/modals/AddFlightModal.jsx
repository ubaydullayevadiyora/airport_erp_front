import React, { useEffect } from "react";
import { Modal, Form, Input, Select } from "antd";

const AddFlightModal = ({
  open,
  onCancel,
  onSubmit,
  confirmLoading,
  editMode,
  initialValues,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editMode && initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [editMode, initialValues, form]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title={editMode ? "✏️ Edit Flight" : "➕ Add Flight"}
      open={open}
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      okText={editMode ? "Update" : "Create"}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Flight No"
          name="flightNo"
          rules={[{ required: true, message: "Please enter flight number" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Destination"
          name="destination"
          rules={[{ required: true, message: "Please enter destination" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Departure Time"
          name="departureTime"
          rules={[{ required: true, message: "Please enter time" }]}
        >
          <Input placeholder="e.g. 10:30" />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please select status" }]}
        >
          <Select placeholder="Select flight status">
            <Select.Option value="On Time">On Time</Select.Option>
            <Select.Option value="Delayed">Delayed</Select.Option>
            <Select.Option value="Cancelled">Cancelled</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddFlightModal;
