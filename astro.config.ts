import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // adapter も一旦消して、完全な静的サイトとしてビルド
  integrations: [
    starlight({
      title: 'MyCCNA Notes',
      sidebar: [
        { label: 'Guides', items: [{ label: 'Example Guide', link: '/guides/example/' }] },
      ],
    }),
  ],
});
