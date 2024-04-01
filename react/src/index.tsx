import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import Loader from "./components/Loader";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./service/graphql/graphql";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <PrimeReactProvider>
          <ApolloProvider client={apolloClient}>
            <App />
          </ApolloProvider>
        </PrimeReactProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
