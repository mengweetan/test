const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()

// Creating express server
const app = express();
const cors = require('cors')
app.use(cors());

const PORT = 8000;
const HOST = "localhost";
const { API_BASE_URL } = process.env;
const { API_KEY_VALUE } = process.env;
const API_SERVICE_URL = `${API_BASE_URL}`;

// Logging the requests
app.use(morgan("dev"));

// Proxy Logic :  Proxy endpoints
app.use(
    "/students",
    createProxyMiddleware({
        target: API_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
            "^/students": "",
        },
    })
);

// Starting our Proxy server
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
