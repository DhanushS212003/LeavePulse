import App from "./App";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
