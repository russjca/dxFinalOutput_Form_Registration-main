import { useContext, useState } from "react";

import { Space, Table, Input, Modal, Form, Button } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Select } from "antd";
const { Option } = Select;
const { Search } = Input;
import { useQuery } from "@apollo/client";
import { RecordContext } from "../context/useContext";
import { GET_STUDENT_INFORMATION } from "../helpers/queries";

const StudentRecords = () => {
  const [searchRecord, setSearchRecord] = useState("");

  const {
    handleDelete,
    handleEdit,
    handleCancel,
    handleOnFinish,
    confirmLoading,
    form,
    open,
    refetch,
  } = useContext(RecordContext);

  const { loading, error, data } = useQuery(GET_STUDENT_INFORMATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // The fetched student information is available in the "data" object
  const dataInput = data?.student_informations;

  const filterdData = dataInput
    ? dataInput.filter((tableData) => {
        const firstnameMatch = tableData.firstname
          .toLowerCase()
          .includes(searchRecord.toLowerCase());

        const middlenameMatch = tableData.middlename
          .toLowerCase()
          .includes(searchRecord.toLowerCase());

        const lastnameMatch = tableData.lastname
          .toLowerCase()
          .includes(searchRecord.toLowerCase());

        const addressMatch = tableData.address
          .toLowerCase()
          .includes(searchRecord.toLowerCase());

        const courseMatch = tableData.course
          .toLowerCase()
          .includes(searchRecord.toLowerCase());

        const yearMatch = tableData.year
          .toLowerCase()
          .includes(searchRecord.toLowerCase());

        const emailMatch = tableData.email
          .toLowerCase()
          .includes(searchRecord.toLowerCase());

        const contactMatch = tableData.contact
          .toLowerCase()
          .includes(searchRecord.toLowerCase());
        return (
          firstnameMatch ||
          middlenameMatch ||
          lastnameMatch ||
          addressMatch ||
          yearMatch ||
          courseMatch ||
          emailMatch ||
          contactMatch
        );
      })
    : [];

  const handleSearch = (tableData) => {
    setSearchRecord(tableData);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "firstname",
      key: "firstname",
    },

    {
      title: "Middle Name",
      dataIndex: "middlename",
      key: "middlename",
    },

    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Course",
      dataIndex: "course",
      key: "course",
    },

    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Contact Number",
      dataIndex: "contact",
      key: "contact",
    },

    {
      title: "Action",
      key: "action",
      render: (tableData) => {
        refetch();
        return (
          <>
            <Space direction="between">
              <Button onClick={() => handleEdit(tableData)}>
                <EditFilled />
              </Button>
              <Button onClick={() => handleDelete(tableData)}>
                <DeleteFilled />
              </Button>
            </Space>
          </>
        );
      },
    },
  ];

  return (
    <>
      <h1 className=" text-2xl font-bold"> STUDENT RECORDS</h1>
      <div className="flex justify-end mb-5 ">
        <Search
          placeholder="Search Records Here"
          allowClear
          size="medium"
          onSearch={handleSearch}
          style={{
            width: 250,
          }}
        />
      </div>
      <Table columns={columns} dataSource={filterdData} />
      <Modal
        title="Edit Record"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button
              htmlType="submit"
              type="primary"
              onClick={() => {
                form.submit();
              }}
            >
              Update
            </Button>
          </>
        }
      >
        <div className=" flex justify-center align-center">
          <Form
            form={form}
            onFinish={handleOnFinish}
            style={{
              maxWidth: "320px",
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
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Input Your Name",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
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
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="Lastname" />
              </Form.Item>
            </Form.Item>

            <Form.Item
              name="middlename"
              rules={[
                {
                  required: true,
                  message: "Please Input Your MiddleName",
                },
              ]}
            >
              <Input placeholder="Middle Name" />
            </Form.Item>

            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please Input Your Address",
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
                name="year"
                rules={[
                  {
                    required: true,
                    message: "Input Your Year",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(40% - 8px)",
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
                    message: "Enter Your Course",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(60% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Select placeholder="Select Your Course">
                  <Option value="Information Technology">
                    {" "}
                    Information Technology{" "}
                  </Option>
                  <Option value="Computer Science"> Computer Science </Option>
                  <Option value="Information System">
                    {" "}
                    Information System{" "}
                  </Option>
                </Select>
              </Form.Item>
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please Input Your Email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="contact"
              rules={[
                {
                  required: true,
                  message: "Please Input Your Contact",
                },
              ]}
            >
              <Input placeholder="Contact Number" />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default StudentRecords;
