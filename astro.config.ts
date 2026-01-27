import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // cloudflareで動かすなら 'server'、今のままでも動くなら 'static'
  // 前回の成功に合わせて、一度設定された方に合わせておいてください
  integrations: [
    starlight({
      title: 'MyCCNA Notes',
//      customCss: [
//        './src/styles/custom.css',
//      ],      
      sidebar: [
        {
          label: '学習ノート',
          // docsフォルダの中身を自動でサイドバーに表示する魔法の設定
          autogenerate: { directory: 'notes' },
        },
        {
          label: '基礎知識',
          autogenerate: { directory: 'basics' }, // docs/basics/ を見る
        },
        {
          label: '応用・演習',
          autogenerate: { directory: 'advanced' }, // docs/advanced/ を見る
        }, 
        {
          label: '学習計画など',
          autogenerate: { directory: 'others' }, // docs/other/ を見る
        },          
      ],
    }),
  ],
});
