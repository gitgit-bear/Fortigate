# FortiTrace IR Cloudflare Pages 部署指南

本專案目前最適合用 **Cloudflare Pages（靜態網站）** 部署。

---

## 一、專案部署判定（目前狀態）

- 專案性質：`React + Vite` 純前端網站，無必要後端依賴。
- 部署模式：先 `build` 產出靜態檔，再上傳/自動部署。
- 入口檔：開發入口為 `index.html`，正式部署使用 `dist/`。
- 靜態資源：放在 `public/`，建置後可正確輸出到 `dist/`。
- Cloudflare Pages 風險點：SPA 重新整理路由可能 404，已加入 `public/_redirects` 解決。

---

## 二、Cloudflare Pages 設定值（直接照填）

- **Framework preset**: `Vite`
- **Root directory**: `/`（留空或填根目錄）
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: 建議 `20`（Cloudflare 預設通常可用）
- **Environment variables**: 靜態版不需要

---

## 三、部署步驟（Git 連接方式）

1. 將專案 push 到 GitHub Repository。
2. 登入 Cloudflare Dashboard -> `Pages` -> `Create a project`。
3. 選 `Connect to Git`，授權並選擇此 Repository。
4. Build settings 填入：
   - Build command: `npm run build`
   - Build output directory: `dist`
5. 點 `Save and Deploy`。
6. 首次部署完成後，打開 Pages 提供的網址測試。

---

## 四、自訂 Domain 綁定

1. 進入 Cloudflare Pages 專案 -> `Custom domains`。
2. 點 `Set up a custom domain`。
3. 輸入你的網域（例如 `fortitraceir.com` 或 `www.fortitraceir.com`）。
4. 依 Cloudflare 指示完成 DNS 設定（通常自動建立 CNAME）。
5. 等待 SSL 憑證簽發完成（幾分鐘內）。

---

## 五、部署後驗證（基本）

- 首頁可正常開啟
- Hero 圖與 UI Showcase 圖可正常載入
- 導覽錨點（Demo / Contact）可跳轉
- 手機版排版正常（至少 iPhone 寬度）
- `<title>`、description、favicon、OG 圖正常

---

## 六、SPA 重新整理保護

已加入：

- `public/_redirects`  
  內容：`/* /index.html 200`

用途：避免 Cloudflare Pages 上直接刷新子路由造成 404（雖然目前多為單頁錨點，仍建議保留）。

---

## 七、若不用 Cloudflare（備用）

### Vercel（備用）
- Import GitHub repo
- Framework 選 `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### Netlify（備用）
- Import GitHub repo
- Build command: `npm run build`
- Publish directory: `dist`
- 可保留 `_redirects` 支援 SPA fallback
