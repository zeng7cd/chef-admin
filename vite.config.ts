import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  css: {
    // 开css sourcemap方便找css
    devSourcemap: true
  },
  plugins: [
    react(),
    tsconfigPaths(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境移除console
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
