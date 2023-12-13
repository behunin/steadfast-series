import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: ["./src/styles/custom.css"],
      title: "yuzu Docs",
      social: {
        discord: "https://discord.gg/u77vRWY",
        github: "https://github.com/yuzu-emu/yuzu",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: {
            directory: "guides",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
  ],
  output: "hybrid",
  adapter: cloudflare(),
});
