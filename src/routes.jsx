import App from "./App";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import Role from "./role/Role";
import Leave from "./leave/Leave";
import Employee from "./employee/Employee";
import LeaveForm from "./leave_form/LeaveForm";
import PageNotFound from "./error/PageNotFound";
import Employees from "./employee/Employees";
import MyLeaves from "./leave/MyLeaves";
import Notifications from "./notification/Notifications";
import Profile from "./profile/Profile";
import Calendar from "./calendar/Calendar";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "roles", element: <Role /> },
      { path: "leaves", element: <Leave /> },
      { path: "new_employee", element: <Employee /> },
      { path: "apply_leave", element: <LeaveForm /> },
      { path: "employees", element: <Employees /> },
      { path: "my_leaves", element: <MyLeaves /> },
      { path: "notifications", element: <Notifications /> },
      { path: "profile", element: <Profile /> },
      { path: "calendar", element: <Calendar /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
];
