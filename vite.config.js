import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

// Trending Coins
// https://api.coingecko.com/api/v3/search/trending
// Specigi Detail
// https://api.coingecko.com/api/v3/coins/sonic-svm
// Search Coin
// https://api.coingecko.com/api/v3/search?query=tron
