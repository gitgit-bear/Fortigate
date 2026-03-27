# FortiTrace IR 部署與維護說明

本文件針對「本地開發 -> 建置 -> 上線部署」提供實務流程。

## 1) 本地開發

```bash
npm install
npm run dev
```

開發網址通常為 `http://localhost:5173/`。

## 2) 正式建置

```bash
npm run build
```

建置完成後，輸出目錄為 `dist/`。

## 3) 部署（推薦 Cloudflare Pages）

請參考 `DEPLOY_CLOUDFLARE_PAGES.md`，核心設定為：

- Build command: `npm run build`
- Output directory: `dist`

## 4) 常見錯誤排查

### 問題：`npm run dev` 找不到 `package.json`
- 原因：不在專案目錄
- 解法：先 `cd "C:\Users\USER\Desktop\fortigate-ir-landing"`

### 問題：Tailwind utility unknown（例如 `shadow-glow`）
- 原因：Tailwind v4 與舊 `@apply` 自訂 utility 相容問題
- 解法：改用原生 CSS `box-shadow`（本專案已修正）

### 問題：部署後路由刷新 404
- 解法：確認 `public/_redirects` 存在，內容為 `/* /index.html 200`

## 5) 圖片 / asset 路徑注意事項

- 請將靜態資源放在 `public/` 下
- React 中使用絕對路徑（例如 `/screenshots/main-analysis.svg`）
- 不要寫本機磁碟路徑（如 `C:\...`）

## 6) 建議維運流程

1. 本地修改後先 `npm run dev` 檢查
2. `npm run build` 確認建置成功
3. 推送到 GitHub
4. Cloudflare Pages 自動部署
5. 線上驗證首頁、截圖、CTA 與 Contact 區
