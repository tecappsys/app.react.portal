import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //         @import "node_modules/@tecappsys/library-styles/scss/styles.scss";
  //         @import "src/sass/styles.scss";
  //       `,
  //     },
  //   },
  //   // Esto incluye las variables automáticamente en todos tus .scss
  // },
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'app.react.portal',
      fileName: (format) => `app-react-portal.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});