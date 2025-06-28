import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button, notification } from "antd";

const validationSchema = Yup.object({
  name: Yup.string().required("Please, enter your name"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  feedback: Yup.string()
    .min(10, "Feedback must be at least 10 characters")
    .required("Feedback is required"),
});

const Signup = () => {
  const [api, contextHolder] = notification.useNotification();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Submitted:", values);
    api.success({
      message: "Signup Successful!",
      description: "You can now log in.",
    });
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {contextHolder}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <Formik
          initialValues={{ name: "", email: "", password: "", feedback: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <Form.Item>
                  <Field name="name">
                    {({ field }) => <Input {...field} placeholder="John Doe" />}
                  </Field>
                </Form.Item>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <Form.Item>
                  <Field name="email">
                    {({ field }) => (
                      <Input {...field} placeholder="john@example.com" />
                    )}
                  </Field>
                </Form.Item>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block mb-1 font-medium">
                  Password
                </label>
                <Form.Item>
                  <Field name="password">
                    {({ field }) => (
                      <Input.Password {...field} placeholder="********" />
                    )}
                  </Field>
                </Form.Item>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Feedback */}
              <div>
                <label htmlFor="feedback" className="block mb-1 font-medium">
                  Feedback
                </label>
                <Form.Item>
                  <Field name="feedback">
                    {({ field }) => (
                      <Input.TextArea
                        {...field}
                        rows={4}
                        placeholder="Your feedback here..."
                      />
                    )}
                  </Field>
                </Form.Item>
                <ErrorMessage
                  name="feedback"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
