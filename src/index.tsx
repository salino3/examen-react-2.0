import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";

const container = document.getElementById("root");
const root = createRoot(container);
// npm install sass sass-loader --save-dev
// npm install @mui/material @emotion/react @emotion/styled @mui/icons-material --save
//? https://mui.com/material-ui/material-icons/

root.render(<App />);
