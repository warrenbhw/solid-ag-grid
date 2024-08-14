import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'SolidAgGrid',
      fileName: (format) => `solid-ag-grid.${format}.js`,
    },
    rollupOptions: {
      external: ['solid-js', '@ag-grid-community/core'],
      output: {
        globals: {
          'solid-js': 'Solid',
          '@ag-grid-community/core': 'AgGridCommunity',
        },
      },
    },
  },
});