import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { resolve } from "path";
import postcssImport from "postcss-import";
import { defineConfig, loadEnv } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default ({ mode }) => {

  return defineConfig({
    plugins: [
      vue(),
      viteCompression(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    css: {
      preprocessorOptions: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(__dirname, 'src/styles/reset.less')}";`,
      },
      postcss: {
        plugins: [postcssImport, autoprefixer]
      }
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      }
    },
    build: {
      outDir: "dist",
      assetsDir: "assets", //指定静态资源存放路径
      // assetsPublicPath:'',
      sourcemap: true, //是否构建source map 文件
      terserOptions: {
        // 生产环境移除console
        compress: {
          drop_console: true,
          drop_debugger: true,
        }
      }
    },
    server: {
      open: true,
      port: 2333,
      proxy: {
        '^/api': {
          target: 'http://localhost:3500/api', // 后端服务实际地址
          changeOrigin: true, //开启代理
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    base: loadEnv(mode, process.cwd()).VITE_PUBLIC_PATH
  })
}
