import { defineConfig } from "vite";
import envCompatible from "vite-plugin-env-compatible";
import react from  '@vitejs/plugin-react';

export default defineConfig({
    envPrefix: "REACT_APP_",
    plugins:[
        envCompatible(),
        react()
    ]
});