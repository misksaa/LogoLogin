import express from "express";
import fs from "fs";
import path from "path";
export function serveStatic(app) {
    // Use process.cwd() to locate dist correctly
    var distPath = path.resolve(process.cwd(), "dist");
    if (!fs.existsSync(distPath)) {
        throw new Error("Could not find the build directory: ".concat(distPath, ". Make sure to build the client first"));
    }
    // Serve static assets
    app.use(express.static(distPath));
    // SPA fallback to index.html
    app.get("*", function (_req, res) {
        res.sendFile(path.join(distPath, "index.html"));
    });
}
