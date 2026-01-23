import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import auth from 'auth-astro';
import cloudflare from '@astrojs/cloudflare'; // これを追加

// https://astro.build/config
export default defineConfig({
  // Cloudflareでログイン機能を使うための設定
  output: 'server', 
  adapter: cloudflare(), 

  integrations: [
    auth({
      injectEndpoints: false
    }), 
    starlight({
      title: 'MyCCNA Notes',
      components: {
        Search: './src/components/starlight/Search.astro'
      },
      social: {
        github: 'https://github.com/githubnishimura/my-CCNA-notes' // あなたのURLに直しました
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
  ],
});
