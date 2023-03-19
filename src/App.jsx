import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
