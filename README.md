# Chair Hub

A designer chair catalog website built with **Next.js**, **shadcn/ui**, and **Motion** (Framer Motion).  
**The layout design is inspired by Apple Watch OS** — a draggable, circular icon grid that evokes the watch face experience.

一個設計師椅子目錄網站，使用 **Next.js**、**shadcn/ui** 與 **Motion** 建構。  
**版面設計靈感來自 Apple Watch OS** —— 可拖曳的圓形圖示網格，重現錶面般的瀏覽體驗。

---

## Getting Started / 開始使用

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Components / 元件清單

*(Excluding shadcn/ui components in `src/components/ui/`)*  
*(不含 `src/components/ui/` 中的 shadcn/ui 元件)*

### Layout / 版面

| Component | Path | English | 繁體中文 |
|-----------|------|---------|----------|
| **Nav** | `layout/nav.tsx` | Fixed top-right navigation with Home and Chairs links. | 固定於右上角的導覽列，包含首頁與椅子圖鑑連結。 |
| **Footer** | `layout/footer.tsx` | Site footer with social links (GitHub, Instagram, Mail) and copyright. | 頁尾區塊，含社群連結與版權資訊。 |

### Common / 共用

| Component | Path | English | 繁體中文 |
|-----------|------|---------|----------|
| **BackToHome** | `common/BackToHome.tsx` | Fixed "Home" link in top-right corner. | 固定於右上角的「Home」返回連結。 |
| **TickerCarousel** | `common/tickerCarousel.tsx` | Horizontal ticker carousel of chair images powered by Motion. | 以 Motion 驅動的水平椅子圖片跑馬燈。 |

### App / 頁面專屬

| Component | Path | English | 繁體中文 |
|-----------|------|---------|----------|
| **Hero** | `(index)/components/hero.tsx` | Draggable grid of circular chair icons — Apple Watch OS–style home screen. | 可拖曳的圓形椅子圖示網格，仿 Apple Watch 主畫面風格。 |
| **Intro** | `(index)/components/intro.tsx` | Full-screen intro overlay with title, description, and dismiss button. | 全螢幕介紹覆蓋層，含標題、說明與關閉按鈕。 |
| **PrevNextBtns** | `chairs/[slug]/components/prevNextBtns.tsx` | Previous/Next navigation for chair detail pages. | 椅子詳情頁的上一張／下一張導覽按鈕。 |

---

## Tech Stack / 技術棧

- **Next.js 15** (App Router)
- **shadcn/ui** (Radix UI)
- **Motion** (Framer Motion)
- **Tailwind CSS v4**
- **TypeScript**
