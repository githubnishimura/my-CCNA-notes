import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import auth from 'auth-astro';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    runtime: { mode: 'complete' },
    session: {
      driver: 'kv',
      binding: 'SESSION' // 先ほどBindingsで設定した変数名
    }
  }),
  // ここを追加：Cloudflareでエラーを起こしやすい画像最適化をバイパスします
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  },
  integrations: [
    auth(),
    starlight({
      title: 'MyCCNA Notes',
      components: {
        Search: './src/components/starlight/Search.astro'
      },
      social: {
        github: 'https://github.com/githubnishimura/my-CCNA-notes'
      },
      sidebar: [{
        label: 'Guides',
        items: [
          {
            label: 'Example Guide',
            link: '/guides/example/'
          }
        ]
      }, {
        label: 'Reference',
        autogenerate: {
          directory: 'reference'
        }
      }]
    })
  ]
});
