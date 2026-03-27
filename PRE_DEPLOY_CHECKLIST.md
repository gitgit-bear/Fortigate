# FortiTrace IR 部署前檢查清單

## Build 與資源

- [ ] `npm run build` 成功
- [ ] `dist/` 內有 `index.html` 與 assets
- [ ] `public/` 圖片在頁面都正常顯示
- [ ] favicon 顯示正常

## 內容與互動

- [ ] Hero 區塊標題與 CTA 正常
- [ ] Features 卡片排版一致
- [ ] UI Showcase 圖片可點擊放大（Lightbox）
- [ ] Contact 區塊聯絡資料正確
- [ ] CTA 按鈕連結正確（Demo / Contact）

## 響應式與體驗

- [ ] 手機寬度（約 390px）排版正常
- [ ] 平板寬度排版正常
- [ ] 桌面版排版正常
- [ ] 深色主題對比可讀

## SEO / Metadata

- [ ] `<title>` 正確
- [ ] `meta description` 正確
- [ ] Open Graph metadata 已設定
- [ ] `robots.txt` 與 `sitemap.xml` 存在

## Cloudflare Pages 設定

- [ ] Framework: Vite
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] `_redirects` 生效（SPA 刷新不 404）
- [ ] `.env` 不要提交到 GitHub（已由 `.gitignore` 排除）
