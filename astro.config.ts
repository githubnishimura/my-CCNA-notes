import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // cloudflareで動かすなら 'server'、今のままでも動くなら 'static'
  // 前回の成功に合わせて、一度設定された方に合わせておいてください
  integrations: [
    starlight({
      title: 'MyCCNA Notes',
      sidebar: [
        {
          label: '学習ノート',
          // docsフォルダの中身を自動でサイドバーに表示する魔法の設定
          autogenerate: { directory: 'notes' },
        },
      ],
    }),
  ],
});
