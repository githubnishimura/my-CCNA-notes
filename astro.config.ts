import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // cloudflareアダプターを使う場合は、必ず 'server' にします
  output: 'server',
  adapter: cloudflare(),

  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  },

  integrations: [
    // ここから auth() を完全に削除しました
    starlight({
      title: 'MyCCNA Notes',
      social: {
        github: 'https://github.com/githubnishimura/my-CCNA-notes'
      },
      sidebar: [{
        label: 'Guides',
        items: [{ label: 'Example Guide', link: '/guides/example/' }]
      }, {
        label: 'Reference',
        autogenerate: { directory: 'reference' }
      }]
    })
  ]
});
