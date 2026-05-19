# ERA Vietnam Website - Project Overview

> File này tóm tắt cấu trúc và kiến trúc của project để đọc nhanh, không cần đọc lại toàn bộ source code.

---

## 1. Tech Stack

| Layer | Công nghệ |
|-------|-----------|
| Framework | Next.js 16.2.2 (App Router) |
| React | 19.2.4 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Font | Inter (Google Fonts) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Rich Editor | CKEditor 5 |
| Utilities | clsx, tailwind-merge, axios |

---

## 2. Cấu trúc thư mục

```
src/
├── app/                    # Next.js App Router (pages + layouts)
│   ├── page.tsx            # Trang chủ
│   ├── layout.tsx          # Root layout (font + metadata)
│   ├── globals.css         # Design tokens, custom utilities
│   ├── (pages...)/         # Các trang theo URL
│   └── */quan-ly/page.tsx  # Trang quản lý (admin forms)
│
├── components/
│   ├── layout/             # Header, Footer, LayoutWrapper, ToTopButton
│   ├── ui/                 # Base UI components
│   ├── shared/             # Components dùng chung (RichEditor)
│   └── sections/           # Các section/page-specific components
│       ├── home/
│       ├── about/
│       ├── academy/
│       ├── apply/
│       ├── contact/
│       ├── projects/
│       └── news/
│
├── hooks/                  # Custom React hooks
├── lib/                    # Utils, constants, configs
└── types/                  # TypeScript type definitions
```

---

## 3. Quy ước & Pattern

### Page Pattern
- File trong `app/` chỉ export `metadata` và render 1 component từ `components/sections/`
- Logic UI nằm trong `components/sections/`, không trong `app/`

```tsx
// app/ve-chung-toi/page.tsx
import { AboutPage } from "@/components/sections/about";

export const metadata = { title: "...", description: "..." };
export default function VeChungToi() {
  return <AboutPage />;
}
```

### Layout Pattern
- `LayoutWrapper` quản lý hiển thị Header/Footer/ToTopButton theo page
- Có thể khai báo `specialLayouts` để ẩn header/footer cho từng page

### Styling Pattern
- Dùng `cn()` (clsx + tailwind-merge) để merge classes
- Color được quản lý qua `src/lib/theme.ts` và CSS variables trong `globals.css`
- Tailwind v4 dùng `@import "tailwindcss"` và `@theme inline`

---

## 4. Core Files

### Layout
| File | Mô tả |
|------|-------|
| `src/app/layout.tsx` | Root layout, font Inter, metadata mặc định |
| `src/components/layout/LayoutWrapper.tsx` | Quản lý Header/Footer/ToTopButton theo page |
| `src/components/layout/Header.tsx` | Fixed header, scroll-aware, mobile drawer |
| `src/components/layout/Footer.tsx` | 4-column footer, responsive |
| `src/components/layout/ToTopButton.tsx` | Nút scroll to top |

### UI Base
| File | Mô tả |
|------|-------|
| `src/components/ui/Button.tsx` | Button với variants: primary, secondary, outline, ghost |
| `src/components/ui/Container.tsx` | Responsive container với size variants |
| `src/components/ui/Section.tsx` | Section wrapper với bg, padding configs |
| `src/components/ui/SectionTitle.tsx` | Title component với highlight, subtitle |
| `src/components/ui/Badge.tsx` | Badge component |

### Lib
| File | Mô tả |
|------|-------|
| `src/lib/utils.ts` | `cn()` utility |
| `src/lib/theme.ts` | Color palette, theme classes, `withOpacity()` |
| `src/lib/routes.ts` | Centralized route constants |

### Hooks
| File | Mô tả |
|------|-------|
| `src/hooks/useScrollToTop.ts` | Hook detect scroll > threshold |

---

## 5. Design System

### Colors (Primary)
```
Primary:     #C8102E (ERA Red)
Primary Dark:#990038
Navy:        #0C0C44
Secondary:   #41B3E0
Accent:      #0f172a
```

### Breakpoints
- Tailwind mặc định: `sm`, `md`, `lg`, `xl`
- Mobile-first design
- Header chuyển desktop/mobile ở `md`

---

## 6. Routes

```
/                           # Trang chủ
/ve-chung-toi               # Về chúng tôi
/ve-chung-toi/apac          # ERA APAC
/ve-chung-toi/compass       # Compass International
/ve-chung-toi/era-real-estate   # ERA Real Estate
/ve-chung-toi/ve-era-viet-nam   # Về ERA Vietnam
/du-an                      # Dự án
/du-an/chi-tiet             # Chi tiết dự án
/du-an/quan-ly              # Quản lý dự án
/tin-tuc                    # Tin tức
/tin-tuc/[slug]             # Chi tiết tin tức
/tin-tuc/quan-ly            # Quản lý tin tức
/gia-nhap                   # Join Team ERA
/ung-tuyen                  # Ứng tuyển
/ung-tuyen/chi-tiet-cong-viec  # Chi tiết công việc
/ung-tuyen/quan-ly          # Quản lý ứng tuyển
/academy                    # Academy
/lien-he                    # Liên hệ
/dieu-khoan-su-dung         # Điều khoản
/chinh-sach-bao-mat         # Chính sách bảo mật
```

---

## 7. Build Config

```ts
// next.config.ts
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },  // Static export
};
```

---

## 8. Notes

- **Static Export**: `images.unoptimized: true` → build ra HTML tĩnh
- **Scroll Performance**: Dùng `requestAnimationFrame` trong scroll handlers
- **Mobile Header**: Floating pills pattern + slide drawer
- **CKEditor**: Custom upload adapter (base64), license GPL
- **Path Alias**: `@/*` → `./src/*`
- **Metadata**: Mỗi page đều có `Metadata` export với OpenGraph
