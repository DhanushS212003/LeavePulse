import App from "./App";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import Role from "./role/Role";
import Leave from "./leave/Leave";

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
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
