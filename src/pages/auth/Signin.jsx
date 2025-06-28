import React from "react";
import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    // ✅ Backendga ulanish kerak bo‘lsa shu yerga API chaqiruv qo‘shiladi
    const { username, password } = values;

    // TEMP: faqat demo uchun
    if (username === "admin" && password === "admin01") {
      api.success({
        message: "Login successful!",
      });
      navigate("/dashboard");
    } else {
      api.error({
        message: "Invalid username or password",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      {contextHolder}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Airport Erp System
        </h1>
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username" }]}
          >
            <Input placeholder="Enter username" size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password placeholder="Enter password" size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              size="large"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
