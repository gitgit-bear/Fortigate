# FortiTrace IR Landing Page

這是 `Vite + React + Tailwind CSS` 的單頁產品網站專案。

## 啟動開發

```bash
npm install
npm run dev
```

## 建置部署

```bash
npm run build
```

建置完成後，將 `dist/` 內容部署到任何靜態 web server（Nginx / Apache / IIS / S3 static hosting）。

## 部署文件

- Cloudflare Pages：`DEPLOY_CLOUDFLARE_PAGES.md`
- 一般部署/排錯：`README_DEPLOY.md`
- 上線前檢查：`PRE_DEPLOY_CHECKLIST.md`

## 可替換內容

- 產品名稱：搜尋 `FortiTrace IR`
- 聯絡方式：搜尋 `cwastesting2018@gmail.com`、`+852-XXXX-XXXX`、`@your_handle`
- 商業方案：搜尋 `Internal Edition`、`Professional Edition`、`Enterprise / MSSP Edition`

## 主要檔案

- `src/App.jsx`：完整單頁內容（單一 component）
- `src/index.css`：Tailwind 基礎樣式
- `tailwind.config.js`：Tailwind 設定
- `public/favicon.svg`：網站 favicon
- `public/og-image.svg`：Open Graph 預覽圖
- `public/logo-mark.svg`：品牌 logo 向量圖
- `public/robots.txt`：搜尋引擎爬蟲規則
- `public/sitemap.xml`：網站 sitemap

## 上線前已內建

- SEO meta tags（description、keywords、canonical、robots）
- Open Graph / Twitter Card
- JSON-LD（SoftwareApplication）
- 深色商業風格微動效（fade-up / hover / glow）
- 繁中 / 英文語言切換（同一頁）
