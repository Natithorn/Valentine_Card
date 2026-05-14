# Valentine Card — Vite + React + TypeScript

**[English](#english) | [ไทย](#thai)**

---

## English

A small, animated Valentine card web app built with Vite, React, TypeScript and Tailwind CSS.

This repo contains a single-page interactive experience: click an envelope to open a card, choose "Yes!" or try to click the evasive "No" button, and enjoy a celebration animation.

## Features
- Envelope open animation with a sliding card.
- Playful evasive "No" button (it moves away when hovered/clicked).
- Celebration overlay with falling hearts and flowers and a central animated heart.
- Responsive layout and Tailwind-based styling.

## Quick start

Requirements:
- Node 18+ (tested with Node 20)
- npm (or yarn/pnpm)

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Open http://localhost:5173 in your browser (Vite's default port).

Useful scripts (from `package.json`):
- `dev` — start Vite dev server
- `build` — build production assets
- `preview` — preview the production build locally
- `typecheck` — run TypeScript type check
- `lint` — run ESLint

## Project structure (key files)
- `index.html` — app entry HTML
- `src/main.tsx` — React entry; mounts `<App />`
- `src/App.tsx` — top-level layout; shows `Envelope` or `Celebration`
- `src/index.css` — Tailwind + custom CSS for animations and layout

Components
- `src/components/Envelope.tsx` — envelope UI; manages open state and reveals the card
- `src/components/ValentineCard.tsx` — the card UI; contains the "Yes" and evasive "No" button
- `src/components/Celebration.tsx` — celebratory overlay with falling particles

## Behavior summary / data shapes
- `ValentineCard` accepts `onYes: () => void` and calls it when the user clicks the Yes button.
- `Envelope` manages `isOpen` and `showCard` local state. It waits ~800ms after opening to show the card.
- `Celebration` generates an array of particle objects (id, x, y, size, duration, delay, type, color, rotation, drift) to render falling visuals.

## Notes and small suggestions
- The evasive "No" button uses randomized translate values; if you want a stricter bounding area, clamp the random offset.
- Animations and sizes are implemented using CSS custom properties and Tailwind utilities — adjust in `src/index.css`.
- `lucide-react` provides the heart icons. If you remove it, replace icons with SVG or another icon set.

## Troubleshooting
- If you see `nmp : The term 'nmp' is not recognized...` — that's a typo: use `npm install` (not `nmp`).
- If `npm` isn't on PATH, install Node from https://nodejs.org or use your package manager and ensure `npm` is available.

---

If you'd like, I can:
- run `npm install` and `npm run dev` here and report the server output,
- add a small screenshot or gif to the README,
- add TypeScript types or tests for components.

---

## ไทย

แอป Valentine card ขนาดเล็ก ที่มีแอนิเมชันสวยงาม สร้างด้วย Vite, React, TypeScript และ Tailwind CSS

โปรเจกต์นี้ประกอบด้วยประสบการณ์เชิงโต้ตอบแบบ single-page: คลิกซองจดหมาย เพื่อเปิดการ์ด เลือก "ได้" หรือพยายามคลิกปุ่ม "ไม่" ที่หลบหนี และเพลิดเพลินกับแอนิเมชันการเฉลิมฉลอง

### คุณลักษณะ
- แอนิเมชันซองจดหมายเปิดพร้อมการ์ดเลื่อนขึ้น
- ปุ่ม "ไม่" ที่มีสีสันและหลบหนี (เคลื่อนตัวเมื่อเมาส์วางหรือคลิก)
- เลเยอร์การเฉลิมฉลองพร้อมหัวใจและดอกไม้ที่ร่วงหล่น และหัวใจศูนย์กลางที่มีแอนิเมชัน
- เลย์เอาต์ที่ตอบสนองและสไตล์ Tailwind

### ก่อนเริ่มต้น

ข้อกำหนด:
- Node 18+ (ทดสอบแล้วกับ Node 20)
- npm (หรือ yarn/pnpm)

ติดตั้งไลบรารี่และเรียกใช้เซิร์ฟเวอร์พัฒนา:

```powershell
npm install
npm run dev
```

เปิด http://localhost:5173 ในเบราว์เซอร์ของคุณ (พอร์ต Vite เริ่มต้น)

สคริปต์ที่มีประโยชน์ (จาก `package.json`):
- `dev` — เริ่มเซิร์ฟเวอร์พัฒนา Vite
- `build` — สร้างสินค้าการผลิต
- `preview` — ดูตัวอย่างบิลด์การผลิตในเครื่อง
- `typecheck` — เรียกใช้การตรวจสอบประเภท TypeScript
- `lint` — เรียกใช้ ESLint

### โครงสร้างโปรเจกต์ (ไฟล์หลัก)
- `index.html` — แอปเข้า HTML
- `src/main.tsx` — React entry; ติดตั้ง `<App />`
- `src/App.tsx` — เลย์เอาต์ระดับบนสุด; แสดง `Envelope` หรือ `Celebration`
- `src/index.css` — Tailwind + CSS ที่กำหนดเองสำหรับแอนิเมชันและเลย์เอาต์

### องค์ประกอบ
- `src/components/Envelope.tsx` — ซองจดหมาย UI; จัดการสถานะเปิดและเปิดเผยการ์ด
- `src/components/ValentineCard.tsx` — การ์ด UI; มีปุ่ม "ได้" และ "ไม่" ที่หลบหนี
- `src/components/Celebration.tsx` — เลเยอร์การเฉลิมฉลองพร้อมอนุภาคที่ร่วงหล่น

### สรุปพฤติกรรม / รูปร่างข้อมูล
- `ValentineCard` ยอมรับ `onYes: () => void` และเรียกใช้เมื่อผู้ใช้คลิกปุ่ม "ได้"
- `Envelope` จัดการสถานะท้องถิ่น `isOpen` และ `showCard` รอ ~800ms หลังเปิดเพื่อแสดงการ์ด
- `Celebration` สร้างอาร์เรย์ของอบเจกต์อนุภาค (id, x, y, size, duration, delay, type, color, rotation, drift) เพื่อแสดงรูปภาพที่ร่วงหล่น

### หมายเหตุและข้อเสนอแนะ
- ปุ่ม "ไม่" ที่หลบหนีใช้ค่า translate แบบสุ่ม; หากคุณต้องการพื้นที่ขอบเขตที่เข้มงวดกว่า ให้คลัมป์การชดเชยแบบสุ่ม
- แอนิเมชันและขนาดนำมาใช้โดยใช้คุณสมบัติ CSS ที่กำหนดเองและยูทิลิตี้ Tailwind — ปรับในไฟล์ `src/index.css`
- `lucide-react` ให้ไอคอนหัวใจ หากคุณลบออก ให้แทนที่ไอคอนด้วย SVG หรือชุดไอคอนอื่น

### การแก้ไขปัญหา
- หากคุณเห็น `nmp : The term 'nmp' is not recognized...` — นั่นคือการพิมพ์ผิด ให้ใช้ `npm install` (ไม่ใช่ `nmp`)
- หากไม่มี `npm` บน PATH ให้ติดตั้ง Node จาก https://nodejs.org หรือใช้ตัวจัดการแพ็คเกจของคุณ และตรวจสอบให้แน่ใจว่า `npm` พร้อมใช้งาน
