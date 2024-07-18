import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/SWDigital/",
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "http://43.202.161.19:8080",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
