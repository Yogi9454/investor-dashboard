# 💼 Investor Dashboard (Next.js + Redux)

A highly interactive, frontend-only **investment dashboard** built using **Next.js**, **Redux Toolkit**, and **Recharts**.

This project simulates real-world backend behavior (filtering, pagination, async calls) without using any external APIs.

---

## 🌐 Live Demo

👉 https://investor-dashboard-xh3v.vercel.app/

---

## 🚀 Features

### 📊 Dashboard Overview

* Total Investments
* Average ROI
* Risk distribution
* Interactive charts

### 🔍 Deal Explorer

* Debounced search
* Multi-filter system (Risk, ROI, Industry)
* Sorting (ROI / Investment)
* Pagination

### ⭐ Recommendation Engine

* Intelligent deal scoring based on:

  * ROI
  * Risk level
* Top recommended deals with explanation

### 📄 Deal Details Page

* Company overview
* ROI trend chart
* Risk insights
* Tab-based UI (Overview + Analysis)

### 💾 My Interests

* Save deals using LocalStorage
* Persistent user tracking

### 🏢 Corporate Dashboard

* Industry distribution (Pie chart)
* Investment analytics

---

## 🏗️ Architecture

The project follows a **feature-based and scalable architecture**:

```
src/
│
├── app/                # Next.js App Router pages
├── components/         # Reusable UI components
├── services/           # API simulation layer
├── store/              # Redux Toolkit (global state)
├── hooks/              # Custom hooks (debounce)
├── utils/              # Business logic (recommendation, storage)
├── data/               # Mock datasets
```

### Key Principles

* Separation of concerns
* Reusable components
* No business logic inside UI components
* Scalable folder structure

---

## 🔄 Data Flow Design

The application simulates a real backend flow:

```
UI (React Components)
        ↓
Redux Store (Global State)
        ↓
Async Thunk (loadDeals)
        ↓
Service Layer (dealService)
        ↓
Mock Data (data/deals.js)
```

### Flow Explanation

1. User interacts with UI (search/filter)
2. Redux updates global state
3. Async thunk triggers data fetch
4. Service layer simulates API (with delay)
5. Data returned and stored in Redux
6. UI updates automatically

---

## ⚙️ Optimization Strategies

### ⚡ Performance Optimizations

* Debounced search (reduces unnecessary calls)
* useMemo for recommendation engine
* Efficient filtering in service layer
* Pagination to limit data rendering

### 🧠 State Management

* Redux Toolkit for predictable state
* Centralized data handling
* Loading and error state management

### 🎯 UI Optimization

* Component reusability
* Clean layout system
* Minimal re-renders

---

## 🎨 UI/UX Highlights

* Dark mode dashboard
* Fintech-style layout
* Responsive design
* Smooth hover interactions
* Clean typography and spacing

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Yogi9454/investor-dashboard.git
cd investor-dashboard
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 📸 Screenshots

### Dashboard

![Dashboard](./public/screenshots/dashboard.png)

### Deal Details

![Deal Details](./public/screenshots/details.png)

### Corporate Dashboard

![Corporate](./public/screenshots/corporate.png)

---

## 📌 Assignment Coverage

✔ Data Layer (Mock datasets)
✔ Service Layer (API simulation)
✔ Dashboard Overview
✔ Deal Explorer
✔ Recommendation Engine
✔ Data Visualization
✔ Redux State Management
✔ Performance Optimization
✔ Deployment (Vercel)

---

## 🧑‍💻 Author

**Yogesh Shete**

* GitHub: https://github.com/Yogi9454
* LinkedIn: *(Add your LinkedIn link)*

---

## ⭐ Conclusion

This project demonstrates:

* Real-world frontend architecture
* Scalable state management
* Backend simulation techniques
* Interactive data visualization

---
