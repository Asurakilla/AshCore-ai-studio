import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./services/ThemeContext";
import { auth } from "./services/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

auth.onAuthStateChanged((user) => {
  root.render(
    <ThemeProvider>
      <App user={user} />
    </ThemeProvider>
  );
});
