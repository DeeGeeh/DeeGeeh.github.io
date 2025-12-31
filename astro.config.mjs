import { webcore } from "webcoreui/integration";
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
    site: 'https://DeeGeeh.github.io',
    base: '/astro-portfolio',
    vite: {
        plugins: [tailwindcss()],
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        }
    },

    integrations: [webcore()]
});
