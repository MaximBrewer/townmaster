import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./router";
import { AuthProvider } from "./context/auth";
import { OverlayProvider } from "./context/overlay";

ReactDOM.render(
    <OverlayProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </OverlayProvider>,
    document.getElementById("app")
);
