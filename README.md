# svelte-mdsvex-starter

This is a starter which uses Svelte 5, Typescript and MDSVEX.


# Setup

Here is a list of the instructions for this project in case you want to recreate the project by yourself:

```bash
mkdir svelte-mdsvex-starter
cd svelte-mdsvex-starter

pnpm create svelte@latest
# Create a skeleton project using Typescript including ESLint, Prettier

pnpm i -D @fontsource/fira-mono
pnpm i -D @sveltejs/adapter-static
pnpm i -D mdsvex
```

Create a file __./src/routes/layout.ts__ with the following content (ssr):

```typescript
export const prerender = true;
```

Create a file __./src/routes/+layout.svelte__ with the following content to include the CSS file:

```svelte
<script>
    import './styles.css';
</script>

<slot />
```

Create the file __./src/routes/styles.css__ with the initial content as provided in this repo.

Create the file __./mdsvex.config.js__ with for mdsvex with the following content:

```javascript
// @see https://mdsvex.com/docs#options
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({

    extensions: ['.svelte.md', '.md', '.svx'],

    remarkPlugins: [
    ],

});

export default config;
```

Update the file __./svelte.config.js__ to use this mdsvex config and change the adapter to static:

```javascript
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {

    extensions: ['.svelte', ...(mdsvexConfig.extensions ?? [])],

    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [
        mdsvex(mdsvexConfig),
        vitePreprocess(),
    ],

    kit: {
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter()
    }
};

export default config;
```


# Developing

Once you've created a project and installed dependencies with `pnpm install` start a development server:

```bash
pnpm dev
```
