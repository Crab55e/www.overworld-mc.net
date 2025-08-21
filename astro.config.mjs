// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://www.overworld-mc.net/",
    integrations: [
        starlight({
            customCss: ["./src/styles/global.css"],
            title: "Overworld MC",
            tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 6 },
            components: {
                Footer: "./src/components/Footer.astro",
            },
            logo: {
                src: "./src/assets/logo.svg",
            },
            social: [
                {
                    icon: "discord",
                    label: "Discord",
                    href: "https://discord.gg/UEDkWKtKhX",
                },
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/Crab55e",
                },
            ],
            sidebar: [
                {
                    label: "トップページ",
                    link: "/",
                },
                {
                    label: "参加ガイド",
                    autogenerate: { directory: "join-guides" },
                },
                {
                    label: "Discord",
                    slug: "discord",
                },
                {
                    label: "コマンドガイド",
                    slug: "command-guide",
                },
            ],
            editLink: {
                baseUrl:
                    "https://github.com/Crab55e/www.overworld-mc.net/edit/main/",
            },
            pagination: false,
        }),
        mdx(),
        react(),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});
