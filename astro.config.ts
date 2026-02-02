import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // cloudflareで動かすなら 'server'、今のままでも動くなら 'static'
  // 前回の成功に合わせて、一度設定された方に合わせておいてください
  integrations: [
    starlight({
      title: 'MyCCNA Notes',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/favicon.svg?v=20260129', // ← 日付や番号を変える
          },
        },
      ],      
      sidebar: [
        {
          label: '学習ノート（日付）',
          autogenerate: {
            directory: 'notes',
            collapsed: true,
          },
        },
        {
          label: '基礎知識',
          autogenerate: { directory: 'basics' }, 
        },
        {
          label: '応用・演習',
          autogenerate: { directory: 'advanced' }, 
        }, 
        {
          label: '学習計画など',
          autogenerate: { directory: 'others' }, 
        },
        {
          label: 'Sora AI動画',
          link: '/my-videos', 
        },        
      ],
    }),
  ],
});
