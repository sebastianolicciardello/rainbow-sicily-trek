import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE ?? 'https://rainbowsicilytrek.com',
  base: process.env.BASE_PATH ?? '/'
});
