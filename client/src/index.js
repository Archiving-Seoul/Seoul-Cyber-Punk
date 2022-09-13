import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {GlobalStyle} from "./GlobalStyle";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
