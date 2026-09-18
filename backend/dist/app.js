"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const listingRoutes_js_1 = require("./routes/listingRoutes.js");
function createApp() {
    const app = (0, express_1.default)();
    // Standard middleware
    app.use((0, cors_1.default)({
        origin: '*',
        methods: ['GET', 'OPTIONS']
    }));
    app.use(express_1.default.json());
    // Health check endpoint
    app.get('/api/health', (req, res) => {
        res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
    });
    // Listing routes
    app.use('/api', listingRoutes_js_1.listingRouter);
    // 404 handler
    app.use((req, res) => {
        res.status(404).json({ success: false, message: 'Resource not found' });
    });
    // Global error handler
    app.use((err, req, res, next) => {
        console.error('Unhandled Server Error:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    });
    return app;
}
