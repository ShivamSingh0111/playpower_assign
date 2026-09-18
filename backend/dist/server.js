"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const app = (0, app_js_1.createApp)();
app.listen(PORT, () => {
    console.log(`Airbnb Listing API server running at http://localhost:${PORT}`);
});
