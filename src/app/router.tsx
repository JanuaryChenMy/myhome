import { createBrowserRouter } from "react-router-dom";
import Home from "../features/Home/Home";
interface Handle {
  crumb: (data: any) => number;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    handle: {
      // you can put whatever you want on a route handle
      // here we use "crumb" and return some elements,
      // this is what we'll render in the breadcrumbs
      // for this route
      crumb: () => 2,
    } as Handle,
    children: [],
  },
]);

export default router;
