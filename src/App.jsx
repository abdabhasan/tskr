import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
