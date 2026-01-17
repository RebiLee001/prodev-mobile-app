# ProDev Mobile App – Stack Navigation (0x04)

This project is a React Native mobile application built with **Expo** and **Expo Router**, demonstrating the implementation of **Stack Navigation patterns**. It features a multi-screen authentication flow with clean UI separation and reusable styling.

---

## 📱 Project Overview

The application consists of three main screens:

- **Home (Landing Page)**
- **Join (Sign Up)**
- **Sign In**

Navigation between screens is handled using **Expo Router Stack Navigation**.

---

## 🧭 Navigation Structure

The app uses a stack-based navigation pattern defined in `app/_layout.tsx`.

/ (Home)
│
├── join (Sign Up)
└── signin (Sign In)


All headers are disabled to allow full control over UI design.

---

## 📂 Project Structure

prodev-mobile-app-0x04/
├── app/
│ ├── _layout.tsx
│ ├── index.tsx
│ ├── join.tsx
│ └── signin.tsx
│
├── constants/
│ └── index.ts
│
├── styles/
│ ├── _mainstyle.ts
│ └── _joinstyle.ts
│
├── assets/
│ └── images/
│ ├── hero-icon.png
│ ├── logo.png
│ ├── logo-green.png
│ ├── google.png
│ ├── facebook.png
│ └── splash.png
│
├── app.json
├── package.json
└── tsconfig.json


---

## 🎨 Styling Approach

- Styles are separated from screen components
- Reusable style constants are used for:
  - Colors
  - Spacing
  - Font sizes
  - Border radius
- Improves readability and maintainability

---

## 🛠️ Technologies Used

- **React Native**
- **Expo**
- **Expo Router**
- **TypeScript**
- **StyleSheet API**

---

## ▶️ Getting Started

### 1️⃣ Install dependencies
```bash
npm install
