// vitepress 的配置项
import { defineConfig } from 'vitepress'
// 主题的配置项
// ⭐特意拆分到这个文件中的，为了代码的可读性
import { themeConfig } from './config/theme'

// markdown 插件
import markdownItFootnote from 'markdown-it-footnote'
import mermaidPlugin from './myscript/myMermaid';


export default defineConfig({
  lang: 'cn',
  title: "zo-notes",
  description: "A VitePress Site",

  base: '/zo-notes/',
  // 标签页的LOGO
  head: [
    ['link', { rel: 'icon', href: './icon/png/logo.png' }]
  ],
  outDir: './.vitepress/dist',
  // 关闭深色模式
  appearance: false,
  // 开启显示更新时间
  lastUpdated: true,
  themeConfig: themeConfig,
  markdown: {
    config: (md) => {

      md.use(markdownItFootnote)
      md.use(mermaidPlugin)

    },
    Math: true
  }
})
