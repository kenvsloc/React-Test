// src/router.js
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import CustomerListPage from "./pages/CustomerListPage";
import InvoiceListPage from "./pages/InvoiceListPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "customers",
        element: <CustomerListPage />,
      },
      {
        path: "invoices",
        element: <InvoiceListPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;