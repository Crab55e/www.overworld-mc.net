// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://www.overworld-mc.net/",
    integrations: [starlight({
        customCss: ["./src/styles/global.css"],
        title: "Overworld MC",
        logo: {
            src: "./src/assets/logo.svg",
        },
        social: [
            {
                icon: "discord",
                label: "Discord",
                href: "https://discord.gg/UEDkWKtKhX",
            },
        ],
        sidebar: [
            {
                label: "Guides",
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: "Example Guide", slug: "guides/example" },
                ],
            },
            {
                label: "Reference",
                autogenerate: { directory: "reference" },
            },
        ],
    }), mdx()],

    vite: {
        plugins: [tailwindcss()],
    },
});