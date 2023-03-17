import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  // build: {
  //   assetsInlineLimit: 0,
  // },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "/src/index.less";`,
      },
    },
  },
});
