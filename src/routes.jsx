import App from "./App";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import Role from "./role/Role";
import Leave from "./leave/Leave";
import Employee from "./employee/Employee";
import LeaveForm from "./leave_form/LeaveForm";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "roles",
        element: <Role />,
      },
      {
        path: "leaves",
        element: <Leave />,
      },
      {
        path: "new_employee",
        element: <Employee />,
      },
      {
        path: "apply_leave",
        element: <LeaveForm />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
