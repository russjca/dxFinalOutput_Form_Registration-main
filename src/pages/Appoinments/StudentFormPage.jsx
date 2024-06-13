import { useMutation, useQuery } from "@apollo/client";

import { INSERT_RECORD } from "../../helpers/queries";
import { GET_STUDENT_INFORMATION } from "../../helpers/queries";
import StudentForm from "../../components/StudentForm";
import { useForm } from "antd/es/form/Form";
import { RecordContext } from "../../context/useContext";
import { notification } from "antd";

const StudentFormPage = () => {
  const { refetch } = useQuery(GET_STUDENT_INFORMATION);
  const [form] = useForm();
  const [insertRecord] = useMutation(INSERT_RECORD);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      type: "success",
      message: "Record Added Succesfully",
    });
  };

  const onFinish = (values) => {
    openNotification();
    const {
      firstname,
      lastname,
      middlename,
      address,
      year,
      course,
      email,
      contact,
    } = values;

    insertRecord({
      variables: {
        firstname,
        lastname,
        middlename,
        address,
        year,
        course,
        email,
        contact,
      },
    })
      .then(({ data }) => {
        const affected_rows = data.insert_student_informations.affected_rows;
        if (affected_rows > 0) refetch();
      })
      .catch((error) => {
        // Handle error here
        console.error(error);
      });
    form.resetFields();
  };

  return (
    <RecordContext.Provider value={{ form, onFinish }}>
      {contextHolder}
      <StudentForm />
    </RecordContext.Provider>
  );
};

export default StudentFormPage;
