import React from "react";
import ReactDOM from "react-dom/client";

import "antd/dist/reset.css";
import { ApolloProvider } from "@apollo/client";
import { ConfigProvider } from "antd";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import themeJson from "../themeJson.json";
import { client } from "./helpers/apolloClient";
import Router from "./routers/routers";

const router = createBrowserRouter(Router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ConfigProvider theme={themeJson}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </ApolloProvider>
  </React.StrictMode>
);
