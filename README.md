# 💕 Valentine Card — Say Yes with Style

**[English](#english) | [ไทย](#thai)**

> An interactive, charming Valentine's Day experience built with modern web technologies.

---

## English

### 🎀 Project Overview

**Valentine Card** is a delightful, interactive web app that brings a playful twist to expressing your feelings. Elegantly designed with smooth animations and heart-warming details, this single-page experience guides users through an unforgettable Valentine's moment.

Built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS** for blazing-fast performance and modern styling.

### ✨ Key Features

- **🎁 Beautiful Envelope Animation** — Click to reveal an elegant animated envelope that opens to unveil your message
- **💌 Interactive Valentine Card** — A thoughtfully designed card with enchanting details and smooth transitions
- **😄 Playful "No" Button** — A fun, evasive button that dodges your click—because persistence is cute!
- **🎉 Celebration Explosion** — When they say "Yes!", experience a magical cascade of falling hearts and flowers
- **📱 Fully Responsive** — Looks stunning on mobile, tablet, and desktop devices
- **⚡ Lightning Fast** — Powered by Vite for instant hot module replacement during development

### 🚀 Quick Start

#### Requirements
- **Node.js** 18+ (tested with Node 20)
- **npm**, **yarn**, or **pnpm** as your package manager

#### Setup & Run

```powershell
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open **http://localhost:** in your browser. The app reloads instantly as you code.

### 📋 Available Scripts

```powershell
npm run dev        # 🔧 Start dev server with hot reload
npm run build      # 🏗️  Build optimized production assets
npm run preview    # 👀 Preview production build locally
npm run typecheck  # ✔️  Run TypeScript type checking
npm run lint       # 🔍 Check code style with ESLint
```

### 🏗️ Project Architecture

```
Valentine_Card/
├── src/
│   ├── App.tsx                 # Main app layout
│   ├── main.tsx                # React entry point
│   ├── index.css               # Global styles & animations
│   └── components/
│       ├── Envelope.tsx        # Animated envelope wrapper
│       ├── ValentineCard.tsx   # Interactive card with buttons
│       └── Celebration.tsx     # Victory celebration overlay
├── index.html                  # HTML entry file
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
└── package.json                # Dependencies & scripts
```

### 🔧 Component Breakdown

| Component | Purpose |
|-----------|---------|
| **App** | Main orchestrator; manages app state & transitions |
| **Envelope** | Handles envelope opening animation; reveals card with timing |
| **ValentineCard** | Interactive card UI; contains the "Yes" and mischievous "No" button |
| **Celebration** | Displays celebration overlay with animated particle effects (hearts & flowers) |

### 💡 How It Works

1. **User clicks the envelope** → Beautiful 3D flip animation
2. **Card slides up** → Smooth entrance with the "Will you be my Valentine?" question
3. **User chooses:**
   - ✅ **Click "Yes"** → Celebration! Confetti-like effect with hearts & flowers
   - 🏃 **Hover "No"** → Button playfully dodges away (try again!)
4. **Celebration view** → Magical animation with a pulsing central heart and falling decorative elements

### 🎨 Customization Tips

- **Colors & Gradients** — Edit gradient definitions in `src/index.css` (search for `linear-gradient`, `radial-gradient`)
- **Animation Speed** — Adjust `duration`, `delay`, and `transform` in CSS keyframes
- **Button Text** — Modify messages in `ValentineCard.tsx` → `noMessages` array
- **Icon Source** — Uses `lucide-react`; swap for your own SVGs if needed
- **Celebration Particles** — Tweak particle count, size, and types in `Celebration.tsx`

### 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm: command not found` | Install Node.js from [nodejs.org](https://nodejs.org) |
| `nmp: The term 'nmp' is not recognized` | That's a typo! Use `npm install` (not `nmp`) |
| Port 5173 already in use | Run `npm run dev -- --port 3000` to use a different port |
| Styles not updating | Clear browser cache or restart dev server |

### 📦 Dependencies

- **react** 18.3+ — UI library
- **react-dom** 18.3+ — DOM rendering
- **typescript** 5.5+ — Type safety
- **tailwindcss** 3.4+ — Utility-first CSS
- **lucide-react** 0.344+ — Beautiful icons
- **vite** 5.4+ — Lightning-fast build tool

### 🌟 Future Ideas

- 🎵 Add sound effects (button clicks, celebration music)
- 🖼️ Upload custom background images
- 📧 Send Valentine link via email or QR code
- 🎭 Multiple themes & color schemes
- 📊 Track "Yes" responses with backend integration

---

## ไทย

### 🎀 ภาพรวมของโปรเจกต์

**Valentine Card** เป็นแอปพลิเคชันเว็บที่น่ารักและสร้างสรรค์ที่นำเสนอวิธีการแสดงความรู้สึกที่สนุกและลึกซึ้ง ออกแบบอย่างสวยงามพร้อมแอนิเมชันอันนุ่มนวลและรายละเอียดที่อบอุ่นใจ ประสบการณ์แบบเพจเดียวนี้นำผู้ใช้ผ่านช่วงเวลาวาเลนไทน์ที่ไม่ลืมเลือน

สร้างด้วย **Vite**, **React**, **TypeScript**, และ **Tailwind CSS** เพื่อประสิทธิภาพสูงสุดและสไตล์สมัยใหม่

### ✨ คุณลักษณะหลัก

- **🎁 แอนิเมชันซองจดหมายสวยงาม** — คลิกเพื่อเปิดซองจดหมายที่สวยงามพร้อมการ์ดที่เลื่อนขึ้นมา
- **💌 การ์ดวาเลนไทน์เชิงโต้ตอบ** — การ์ดที่ออกแบบอย่างลึกซึ้งพร้อมรายละเอียดที่น่ามหัศจรรย์และการเปลี่ยนผ่านที่นุ่มนวล
- **😄 ปุ่ม "ไม่" ที่ตลกขบขัน** — ปุ่มที่สนุกสนานและหลบหนี—เพราะความเพียรพยายามนั้นน่ารัก!
- **🎉 การเฉลิมฉลองแบบ Explosion** — เมื่อพวกเขาพูดว่า "ได้!" ลองรับประสบการณ์ห้อยลอยของหัวใจและดอกไม้ที่ตกลงมา
- **📱 รองรับทุกหน้าจอ** — ดูสวยงามบนอุปกรณ์มือถือ แท็บเล็ต และเดสก์ท็อป
- **⚡ ความเร็วเหนือคำว่าเร็ว** — ขับเคลื่อนด้วย Vite เพื่อให้สามารถแก้ไขและดูผลได้ทันที

### 🚀 เริ่มต้นอย่างรวดเร็ว

#### ข้อกำหนด
- **Node.js** 18+ (ทดสอบแล้วกับ Node 20)
- **npm**, **yarn**, หรือ **pnpm** เป็นตัวจัดการแพ็คเกจ

#### ติดตั้งและเรียกใช้

```powershell
# ติดตั้งไลบรารี่
npm install

# เริ่มเซิร์ฟเวอร์พัฒนา
npm run dev
```

เปิด **http://localhost:** ในเบราว์เซอร์ของคุณ แอปจะรีโหลดทันทีขณะที่คุณเขียนโค้ด

### 📋 สคริปต์ที่มีอยู่

```powershell
npm run dev        # 🔧 เริ่มเซิร์ฟเวอร์พัฒนาพร้อมรีโหลดแบบเรียลไทม์
npm run build      # 🏗️  สร้างสินค้าที่ปรับให้เหมาะสมสำหรับการผลิต
npm run preview    # 👀 ดูตัวอย่างบิลด์การผลิตในเครื่อง
npm run typecheck  # ✔️  เรียกใช้การตรวจสอบประเภท TypeScript
npm run lint       # 🔍 ตรวจสอบสไตล์โค้ด ESLint
```

### 🏗️ สถาปัตยกรรมโปรเจกต์

```
Valentine_Card/
├── src/
│   ├── App.tsx                 # เลย์เอาต์แอปหลัก
│   ├── main.tsx                # จุดเข้า React
│   ├── index.css               # สไตล์ทั่วโลกและแอนิเมชัน
│   └── components/
│       ├── Envelope.tsx        # ตัวห่อม้วนซองจดหมายแบบอนิเมชัน
│       ├── ValentineCard.tsx   # การ์ดเชิงโต้ตอบพร้อมปุ่ม
│       └── Celebration.tsx     # เลเยอร์การเฉลิมฉลองพร้อมแอนิเมชันอนุภาค
├── index.html                  # ไฟล์เข้า HTML
├── vite.config.ts              # การกำหนดค่า Vite
├── tailwind.config.js          # การกำหนดค่า Tailwind CSS
└── package.json                # ไลบรารี่และสคริปต์
```

### 🔧 การแบ่ง Component

| Component | วัตถุประสงค์ |
|-----------|----------|
| **App** | ผู้จัดการหลัก; จัดการสถานะและการเปลี่ยนผ่านของแอป |
| **Envelope** | จัดการแอนิเมชันการเปิดซองจดหมาย; เปิดเผยการ์ดด้วยการจัดเวลา |
| **ValentineCard** | UI การ์ดเชิงโต้ตอบ; มีปุ่ม "ได้" และปุ่ม "ไม่" ที่มีความสนุกสนาน |
| **Celebration** | แสดงเลเยอร์การเฉลิมฉลองพร้อมเอฟเฟกต์อนุภาคแบบอนิเมชัน (หัวใจและดอกไม้) |

### 💡 วิธีการทำงาน

1. **ผู้ใช้คลิกซองจดหมาย** → แอนิเมชันพลิกแบบ 3 มิติที่สวยงาม
2. **การ์ดเลื่อนขึ้น** → การเข้าแบบที่นุ่มนวลพร้อมกับคำถาม "จะเป็นวาเลนไทน์ของฉันไหม?"
3. **ผู้ใช้เลือก:**
   - ✅ **คลิก "ได้"** → การเฉลิมฉลอง! เอฟเฟกต์คล้ายกับกระดาษลอยหลากสีพร้อมหัวใจและดอกไม้
   - 🏃 **วาง "ไม่"** → ปุ่มจะหลบหนีไปข้างหลัง (ลองอีกครั้ง!)
4. **มุมมองการเฉลิมฉลอง** → แอนิเมชันอันมหัศจรรย์พร้อมหัวใจศูนย์กลางที่เต้นชีพจรและเอลิเมนต์ประกอบที่ตกลงมา

### 🎨 เคล็ดลับการปรับแต่ง

- **สีและการไล่ระดับสี** — แก้ไขคำจำกัดความการไล่ระดับใน `src/index.css` (ค้นหา `linear-gradient`, `radial-gradient`)
- **ความเร็วแอนิเมชัน** — ปรับ `duration`, `delay` และ `transform` ในคีเฟรมไซ CSS
- **ข้อความปุ่ม** — แก้ไขข้อความใน `ValentineCard.tsx` → อาร์เรย์ `noMessages`
- **แหล่งไอคอน** — ใช้ `lucide-react`; สลับไปยัง SVG ของคุณเองหากจำเป็น
- **อนุภาคการเฉลิมฉลอง** — ปรับจำนวนอนุภาค ขนาด และประเภทใน `Celebration.tsx`

### 🐛 การแก้ไขปัญหา

| ปัญหา | วิธีแก้ไข |
|-------|----------|
| `npm: command not found` | ติดตั้ง Node.js จาก [nodejs.org](https://nodejs.org) |
| `nmp: The term 'nmp' is not recognized` | นั่นคือการพิมพ์ผิด! ใช้ `npm install` (ไม่ใช่ `nmp`) |
| พอร์ต 5173 ถูกใช้งานแล้ว | เรียกใช้ `npm run dev -- --port 3000` เพื่อใช้พอร์ตอื่น |
| สไตล์ไม่อัปเดต | ล้างแคช Browser หรือรีสตาร์ทเซิร์ฟเวอร์พัฒนา |

### 📦 ไลบรารี่ที่ใช้

- **react** 18.3+ — ไลบรารี่ UI
- **react-dom** 18.3+ — การเรนเดอร์ DOM
- **typescript** 5.5+ — ความปลอดภัยประเภท
- **tailwindcss** 3.4+ — CSS ยูทิลิตี้ที่ได้รับความนิยม
- **lucide-react** 0.344+ — ไอคอนที่สวยงาม
- **vite** 5.4+ — เครื่องมือสร้างที่รวดเร็ว

### 🌟 ความคิดในอนาคต

- 🎵 เพิ่มเอฟเฟกต์เสียง (คลิกปุ่ม ดนตรีการเฉลิมฉลอง)
- 🖼️ อัปโหลดภาพพื้นหลังที่กำหนดเอง
- 📧 ส่งลิงก์วาเลนไทน์ผ่านอีเมลหรือรหัส QR
- 🎭 ธีมและโครงการสีหลายแบบ
- 📊 ติดตามการตอบ "ได้" พร้อมกับการรวมแบ็กเอนด์
