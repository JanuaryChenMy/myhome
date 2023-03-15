import { createBrowserRouter } from "react-router-dom";
import Home from "../features/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
