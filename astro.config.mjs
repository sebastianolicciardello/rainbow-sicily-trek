import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE ?? 'https://sebastianolicciardello.github.io',
  base: process.env.BASE_PATH ?? '/rainbow-sicily-trek/'
});
