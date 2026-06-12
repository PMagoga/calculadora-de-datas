import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

export default defineConfig({
  root: "src", // Define a pasta src como a raiz do código fonte
  build: {
    outDir: "../dist", // Joga o resultado final na pasta dist (na raiz)
    emptyOutDir: true, // Limpa a pasta dist antes de cada build
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/index.html"),
      },
      output: {
        // Mantém os nomes dos arquivos limpos, sem hashes estranhos, o que ajuda na revisão da Mozilla
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  plugins: [
    {
      name: "copy-manifest-and-icon",
      // Esse gancho roda logo após o build terminar para copiar o manifest e o ícone para a pasta dist
      closeBundle() {
        fs.copyFileSync(
          resolve(__dirname, "src/manifest.json"),
          resolve(__dirname, "dist/manifest.json"),
        );
        fs.copyFileSync(
          resolve(__dirname, "src/calculadora.png"),
          resolve(__dirname, "dist/calculadora.png"),
        );
        console.log("🎉 manifest.json e ícone copiados para a pasta dist!");
      },
    },
  ],
});
