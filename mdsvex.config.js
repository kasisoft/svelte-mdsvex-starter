// @see https://mdsvex.com/docs#options
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({

    extensions: ['.svelte.md', '.md', '.svx'],

    remarkPlugins: [
    ],

});

export default config;
