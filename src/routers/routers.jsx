import StudentFormPage from "../pages/Appoinments/StudentFormPage.jsx";
import StudentRecordPage from "../pages/Appoinments/StudentRecordPage.jsx";
import EditRecordPage from "../pages/Appoinments/EditRecordPage.jsx";
import Error500Page from "../pages/errors/500.jsx";
import Error404Page from "../pages/errors/404.jsx";
import Mainlayout from "../layout/mainlayout.jsx";

const Router = [
  // Main Routers
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error500Page />,
    children: [
      // AppointmentForm
      {
        path: "/",
        element: <StudentFormPage />,
      },

      // AppointmentTable
      {
        path: "/StudentRecordPage",
        element: <StudentRecordPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404Page />,
  },
];

export default Router;
