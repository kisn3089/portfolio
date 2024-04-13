import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    port: 3000,
    // ffmpeg SharedBuffer Error 해결
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
    // proxy: {
    //   "/api": {
    //     target:
    //       "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    //   "/stock": {
    //     target: "http://apis.data.go.kr/1160100/service/GetStocDiviInfoService",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/stock/, ""),
    //   },
    // },
  },
});
