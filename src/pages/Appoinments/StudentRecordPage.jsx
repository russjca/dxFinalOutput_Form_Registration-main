import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import {
  GET_STUDENT_INFORMATION,
  DELETE_RECORD,
  UPDATE_RECORD,
} from "../../helpers/queries";
import StudentRecords from "../../components/StudentRecords";
import { RecordContext } from "../../context/useContext";
import { useForm } from "antd/es/form/Form";

const StudentRecordPage = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = useForm();

  const { loading, error, data, refetch } = useQuery(GET_STUDENT_INFORMATION);
  const [deleteRecord] = useMutation(DELETE_RECORD);
  const [updateRecord] = useMutation(UPDATE_RECORD);

  const handleEdit = (tableData) => {
    const { id } = tableData;
    if (tableData) {
      setOpen(true);
      const selectedRecord = data.student_informations.find(
        (student_informations) => student_informations.id === id
      );
      form.setFieldsValue({
        id: selectedRecord.id,
        firstname: selectedRecord.firstname,
        lastname: selectedRecord.lastname,
        middlename: selectedRecord.middlename,
        address: selectedRecord.address,
        year: selectedRecord.year,
        course: selectedRecord.course,
        email: selectedRecord.email,
        contact: selectedRecord.contact,
      });
    }
  };

  const handleOnFinish = (values) => {
    setOpen(false);
    const id = values.id;
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
    updateRecord({
      variables: {
        id,
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
        const affected_rows = data.update_student_informations.affected_rows;
        if (affected_rows > 0) {
          refetch(); // Assuming refetch is a function to fetch the updated data again
        }
      })
      .catch((error) => {
        // Handle error here
        console.error(error);
      });
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const handleDelete = (tableData) => {
    const { id } = tableData;
    deleteRecord({
      variables: {
        id,
      },
    });
  };

  return (
    <>
      <RecordContext.Provider
        value={{
          handleDelete,
          handleEdit,
          refetch,
          handleCancel,
          handleOnFinish,
          confirmLoading,
          form,
          open,
        }}
      >
        <StudentRecords />
      </RecordContext.Provider>
    </>
  );
};

export default StudentRecordPage;
