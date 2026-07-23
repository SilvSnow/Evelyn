// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Update this to your final domain once you connect one in Cloudflare.
  site: 'https://evelyn-pottery.pages.dev',

  adapter: cloudflare()
});