# We Want Waste – Yard Skip Selector Redesign - React + Vite Project

This project presents a redesigned version of the **Yard Skip Selection** page for **WeWantWaste**. The original layout used multiple individual cards for each skip size, each containing static details like size, price, and hire period. This new design improves usability, performance, and clarity by converting the layout into a modern, interactive single product page with dynamic content updates.

---

## 🚀 Redesign Overview

### ✅ Old Design (Before)
- Repeated information leading to clutter.
- Multiple static cards for each yard skip size.
- Poor scalability and user experience on mobile devices.
- Image, price, and details not dynamically linked to user selection.

### ✨ New Design (After)
- A **single-page product layout** with a unified interface.
- Introduced a **Select Size** dropdown to allow users to choose different skip sizes — one at a time.
- **Dynamic updates**: Selecting a size dynamically updates:
  - Yard skip **image**
  - **VAT (20%)**
  - **Base Price**
  - **Hire Period**
  - **Delivery fee**
  - **Total Price**
  - **On-road availability**
  - **Heavy waste allowance**

## 🧠 Key Features

| Feature                     | Description |
|----------------------------|-------------|
| 🖼️ **Dynamic Image Preview**      | The image changes based on selected skip size. |
| 💷 **Price Breakdown**            | Includes base price, VAT (20%), delivery, and total price. |
| 🕐 **Hire Period Display**        | Clearly indicates how long the selected skip can be hired. |
| 🧾 **Dynamic Skip Size Selector** | Users can choose a size from a dropdown; all details update accordingly. |
| ✅ **Availability Indicators**    | Shows whether the selected skip is allowed on-road and if heavy waste is permitted. |

## 📐 Design Goals & Improvements

- ✅ **Responsiveness**: Clean layout that works well across devices.
- ✅ **Simplified UI**: Removed clutter caused by displaying all skip cards at once.
- ✅ **Improved UX**: Easier decision-making by consolidating skip details into a single view.
- ✅ **Modern Aesthetic**: Aligns more with ecommerce-style product pages (e.g., Amazon, Junaid Jamshed) for familiarity.

## 🛠️ Tech Stack

- **React** – Frontend library
- **MUI (Material UI)** – UI components
- **Axios** – HTTP client for API calls
- **Vite** – Lightning-fast build tool and dev server

## 📸 Screenshots

## Before 
![Before](./src/assets/before.png)

## After 
![After](./src/assets/after.png)

---

### 🛠 Installation

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/we-want-waste.git
cd we-want-waste
npm install
# or
yarn
npm run dev
# or
yarn dev