// queries.js (or your Queries file)
import { gql } from "graphql-tag";

// Define your GraphQL query using gql
export const GET_STUDENT_INFORMATION = gql`
  query {
    student_informations {
      id
      firstname
      lastname
      middlename
      address
      year
      course
      email
      contact
    }
  }
`;

export const INSERT_RECORD = gql`
  mutation InsertRecord(
    $firstname: String!
    $middlename: String!
    $lastname: String!
    $address: String!
    $year: String!
    $course: String!
    $email: String!
    $contact: String!
  ) {
    insert_student_informations(
      objects: {
        firstname: $firstname
        middlename: $middlename
        lastname: $lastname
        address: $address
        year: $year
        course: $course
        email: $email
        contact: $contact
      }
    ) {
      affected_rows
    }
  }
`;

export const UPDATE_RECORD = gql`
  mutation UpdateRecord(
    $id: Int!
    $firstname: String!
    $middlename: String!
    $lastname: String!
    $address: String!
    $year: String!
    $course: String!
    $email: String!
    $contact: String!
  ) {
    update_student_informations(
      where: { id: { _eq: $id } }
      _set: {
        id: $id
        firstname: $firstname
        middlename: $middlename
        lastname: $lastname
        address: $address
        year: $year
        course: $course
        email: $email
        contact: $contact
      }
    ) {
      affected_rows
    }
  }
`;

export const DELETE_RECORD = gql`
  mutation DeleteRecord($id: Int!) {
    delete_student_informations(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
