# 🌿 GreenNest – Indoor Plant Care & Store

### 🏷️ Assignment: Assignment-09_category_daisy

GreenNest is an elegant **single-page web application (SPA)** for indoor plant lovers who want to decorate and purify their homes with beautiful, healthy plants.  
It provides plant care tips, online plant shopping, and expert consultation booking — ensuring a **greener and healthier lifestyle**.

---

## 🌱 Live Links

- 🔗 **Live Site:** [https://green-nest-plant-care-c5ea8.web.app/]
- 💻 **GitHub Repository:** [https://github.com/programming-hero-web-course2/b12-a9-firesheild-MD-ELIUS]

---

## 🎯 Project Goals

- Build a **responsive, aesthetic, and functional** SPA for plant care and shopping.  
- Implement **Firebase Authentication** (Email/Password, Google Sign-In, Forgot Password).  
- Fetch and display plant data dynamically from a **local JSON file**.  
- Create **protected routes** (only logged-in users can access plant details & profile).  
- Maintain **SPA functionality** with a consistent Navbar and Footer.

---

## 🧩 Core Features

### 🌼 Layout & Navigation
- Fixed **Navbar** with conditional rendering:
  - 🔒 Logged in → shows user avatar, display name, and logout dropdown.
  - 🔓 Logged out → shows Login and Register buttons.
- Persistent **Footer** with Quick Links and Social Media icons.
- Seamless route navigation — **no page reloads or crashes**.

### 🌿 Home Page Sections
1. **Hero Section:**  
   Swiper.js / Framer Motion slider with nature-inspired animations and plant slogans.
2. **Top Rated Indoor Plants:**  
   Dynamically fetched from `plants.json` — includes plant image, name, price, rating, and "View Details" button.
3. **Plant Care Tips:**  
   Static or fake JSON section featuring watering, sunlight, and fertilizing advice.
4. **Meet Our Green Experts:**  
   Showcases 3–4 plant care professionals with name, photo, and specialization.
5. **Extra Section (Optional):**  
   “🌸 Plant of the Week” or “Eco Décor Ideas” — creative addition for visual appeal.

---

## 🌵 Plant Details Page (Protected Route)

- Accessible **only when logged in**.  
  Redirects to the Login page if unauthenticated.
- Displays full plant info from JSON:
  - Image, Name, Description, Price, Rating, Stock, Care Level, and Provider.
- Includes **“Book Consultation” Form** with:
  - Name  
  - Email  
  - “Book Now” button  
- On form submit → shows **success toast** and clears inputs.

---

## 🔐 Authentication System (Firebase)

### 🔑 Login Page
- Email and Password fields  
- “Forgot Password” option (sends Gmail reset link)  
- “Login” button  
- “Login with Google” (social login)  
- Redirects to intended route or Home after success  
- Shows toast message on errors  

### 🪴 Signup Page
- Fields: Name, Email, Photo URL, Password  
- Password Validation Rules:
  - ≥ 6 characters  
  - At least 1 Uppercase letter  
  - At least 1 Lowercase letter  
- On successful signup → redirects to Home  
- Google Sign-Up available  
- Error messages for invalid inputs  

### 👤 My Profile Page
- Displays user **Name, Email, and Photo**  
- Includes **Update Profile** button  
  - Updates `displayName` and `photoURL` via `updateProfile()`  
- Real-time reflection after update  

---

## ⚙️ Technology Stack

| Category | Tools Used |
|-----------|-------------|
| Frontend | React.js (Vite/CRA) |
| Routing | React Router v6 |
| Styling | Tailwind CSS / DaisyUI |
| Animation | Swiper.js / Framer Motion |
| Authentication | Firebase Authentication (v9 Modular) |
| Notifications | React Hot Toast |
| Data Source | Local JSON (`plants.json`) |

---





