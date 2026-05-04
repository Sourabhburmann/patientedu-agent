# 🩺 HealthEdu Agent: AI Patient Education Platform

**HealthEdu Agent** is a full-stack MERN application designed to help patients understand their diseases, conditions, and treatments through clear AI-generated explanations and medical illustrations. Using intelligent topic extraction and AI-driven logic, patients can ask health questions and receive structured educational content with visual diagrams.

---

## 🚀 Key Features

- **AI Patient Education**: Ask any health question and receive a structured, easy-to-understand explanation covering symptoms, causes, and treatment options.
- **Medical Illustrations**: Every explanation is paired with an AI-generated anatomical diagram via Pollinations.ai to help visualize the condition.
- **Persistent Consultation History**: Unlike standard chatbots, HealthEdu Agent saves your entire consultation thread to MongoDB. You can revisit, rename, or delete past consultations anytime.
- **Advanced Authentication**: Secure JWT-based authentication system using Bearer tokens. Supports both guest exploration and persistent user sessions.
- **Modern UI/UX**:
  - Clean, medical-grade aesthetic with glassmorphism and teal/cyan color palette.
  - Smooth animations powered by Framer Motion.
  - Fully responsive design with a collapsible sidebar.
  - Real-time dark/light mode toggling.

---

## 🛠️ Technology Stack

### **Frontend**
- **React (Vite)**: For a lightning-fast development experience and optimized builds.
- **Tailwind CSS**: Modern utility-first styling for a custom, premium look.
- **Framer Motion**: Smooth page transitions and micro-animations.
- **Lucide React**: Beautiful, consistent iconography.

### **Backend**
- **Node.js & Express**: Scalable server architecture.
- **MongoDB & Mongoose**: Persistent storage for user data and consultation histories.
- **JSON Web Token (JWT)**: Secure, stateless authentication.
- **Dotenv**: Environment variable management for API keys and secrets.

---

## 📂 Project Structure

```bash
HealthEduAgent/
├── client/          # Vite + React Frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page-level components (Chat, Home, Login, etc.)
│   │   ├── hooks/       # Custom hooks (Auth, Theme)
│   │   └── App.jsx      # Main application logic
│   └── public/images/   # Medical illustration assets
└── server/          # Node.js + Express Backend
    ├── controllers/ # Business logic (Chat, Auth, Consultation History)
    ├── models/      # Mongoose schemas (User, Chat, Consultation)
    ├── routes/      # API endpoints
    ├── middleware/  # JWT verification and error handling
    └── index.js     # Server entry point
```

---

## ⚙️ Setup & Installation

### **Prerequisites**
- Node.js (v18 or higher)
- MongoDB account (Atlas or local)

### **1. Clone the repository**
```bash
git clone <your-repo-url>
cd QuickRaina
```

### **2. Backend Setup**
Navigate to the `server` folder:
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory and add:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Start the backend:
```bash
npm run dev
```

### **3. Frontend Setup**
Navigate to the `client` folder:
```bash
cd ../client
npm install
```
Start the frontend:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 🩺 Medical Topics Supported
The platform currently recognizes 30+ medical conditions including:
- **Metabolic**: Diabetes, Obesity, Thyroid, Cholesterol.
- **Cardiovascular**: Hypertension, Heart Disease, Stroke, Anemia.
- **Respiratory**: Asthma, Pneumonia, Tuberculosis, COVID-19.
- **Neurological**: Alzheimer's, Parkinson's, Epilepsy, Migraine.
- **Mental Health**: Depression, Anxiety.
- **Infectious**: Malaria, Dengue, Hepatitis, Influenza.

---

## ⚠️ Disclaimer
HealthEdu Agent provides **educational information only** and does **not** replace professional medical advice. Always consult a licensed healthcare professional for your specific health situation.

---

## 📄 License
This project is for educational and demo purposes as part of the HealthEdu Agent AI project.
