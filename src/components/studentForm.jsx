import { useContext } from "react";

import { Form, Input, Button, Select } from "antd";
import { RecordContext } from "../context/useContext";
const { Option } = Select;

const StudentForm = () => {
  const { form, onFinish } = useContext(RecordContext);

  return (
    <div>
      <h1 className=" text-2xl font-bold"> CCIS REGISTRATION FORM</h1>
      <div className=" flex justify-center align-center mt-16">
        <Form
          form={form}
          onFinish={onFinish}
          style={{
            maxWidth: "380px",
          }}
        >
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item
            style={{
              marginBottom: 0,
            }}
          >
            <Form.Item
              label="Full Name"
              name="firstname"
              rules={[
                {
                  required: true,
                  message: "Input Your Name",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(60% - 8px)",
              }}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="lastname"
              rules={[
                {
                  required: true,
                  message: "Input Your Lastname",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(40% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Lastname" />
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="Middle Name"
            name="middlename"
            rules={[
              {
                required: true,
                message: "Input Your MiddleName",
              },
            ]}
          >
            <Input placeholder="Middle Name" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Input Your Address",
              },
            ]}
          >
            <Input placeholder="Address" />
          </Form.Item>
          <Form.Item
            style={{
              marginBottom: 0,
            }}
          >
            <Form.Item
              label="Year & Course"
              name="year"
              rules={[
                {
                  required: true,
                  message: "Select Your Year",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(60% - 8px)",
              }}
            >
              <Select placeholder="Year Level">
                <Option value="1st year"> 1st year</Option>
                <Option value="2nd year"> 2nd year</Option>
                <Option value="3rd year"> 3rd year</Option>
                <Option value="4th year"> 4th year</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="course"
              rules={[
                {
                  required: true,
                  message: "Select Your Course",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(40% - 8px)",
                margin: "0 8px",
              }}
            >
              <Select placeholder="Select Course">
                <Option value="Information Technology">
                  {" "}
                  Information Technology{" "}
                </Option>
                <Option value="Computer Science"> Computer Science</Option>
                <Option value="Information System"> Information System </Option>
              </Select>
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Input Your Email",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Contact"
            name="contact"
            rules={[
              {
                required: true,
                message: "Input Your Contact",
              },
            ]}
          >
            <Input placeholder="Contact Number" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add Record
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default StudentForm;
