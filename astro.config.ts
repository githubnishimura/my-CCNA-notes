import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // テストのため、一旦静的サイト(static)モードにします
  output: 'static',
  adapter: cloudflare(),
  
  // 画像エラーを避ける設定
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  },

  integrations: [
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
