import React, { useEffect } from "react";

import { notification, Button, Row, Col } from "antd";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import AppointmentForm from "../../components/StudentForm";

const EditAppointmentPage = () => {
  const [form] = useForm();
  const { id } = useParams();

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: "Appointment Updated To The Table",
      placement,
    });
  };

  useEffect(() => {
    const appointment = JSON.parse(localStorage.getItem("dataInput")).find(
      (appointment) => appointment.id === id
    );

    if (appointment) {
      form.setFieldsValue({
        fullname: appointment.fullname,
        email: appointment.email,
        age: appointment.age,
        address: appointment.address,
        time: dayjs(appointment.time),
        date: dayjs(appointment.date),
        purpose: appointment.purpose,
      });
    }
  }, [id, form]);

  const onFinish = (values) => {
    const updatedAppointment = {
      id,
      ...values,
      time: dayjs(values.time).format("hh:mm:ss"),
      date: dayjs(values.date).format("YYYY/MM/DD"),
    };
    const storageDataSource = JSON.parse(localStorage.getItem("dataInput"));
    const updatedDataSoure = storageDataSource.map((appointment) => {
      if (appointment.id === updatedAppointment.id) {
        return updatedAppointment;
      }
      return appointment;
    });
    localStorage.setItem("dataInput", JSON.stringify(updatedDataSoure));
    openNotification("top");
  };

  return (
    <Row>
      {contextHolder}
      <Link to={"/"}>
        <Button type="primary" style={{ marginLeft: 50 }}>
          BACK TO TABLE
        </Button>
      </Link>
      <Col span={10} style={{ marginLeft: "200px", marginTop: "10px" }}>
        <AppointmentForm form={form} onFinish={onFinish} />
      </Col>
    </Row>
  );
};

export default EditAppointmentPage;
