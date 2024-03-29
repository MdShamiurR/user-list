import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto font-[barlow]">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
