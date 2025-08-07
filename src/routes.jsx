import App from "./App";
import Login from "./login/Login";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "login",
    element: <Login />,
  },
];
