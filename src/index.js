import React from "react";
import ReactDOM from "react-dom/client";
import "typeface-roboto";
import "typeface-questrial";
import "typeface-ubuntu";
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HashRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </HashRouter>
);
