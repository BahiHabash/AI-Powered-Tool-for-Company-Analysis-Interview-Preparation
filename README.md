# AI-Powered-Tool-for-Company-Analysis-Interview-Preparation
Salam Hackathon Project

## 🎯 Overview

Our AI-powered platform helps job seekers analyze companies, optimize their CVs, and prepare for interviews with AI-driven insights and mock interview simulations.

---

## 💰 Pricing Plans

### **1. Free Plan** ($0/month)

- ✅ 5 company analyses per month
- ✅ AI-powered CV analysis

### **2. Premium Plan** ($6/month)

- ✅ 50 company analyses per month
- ✅ AI-powered CV analysis
- ✅ AI-generated CV rebuild to match company culture

### **3. Pro Plan** ($10/month)

- ✅ Unlimited company analyses
- ✅ AI-powered CV analysis
- ✅ AI-generated CV rebuild to match company culture
- ✅ AI chatbot for mock interviews based on company data

---

## 🔹 Core Features

### **1. Company Analysis**

- 📊 AI scrapes and summarizes key company data (mission, culture, hiring trends, financial status, competitors).
- 📰 Analyzes recent company news, job openings, and employee reviews.
- 🔍 Predicts skill demand based on company trends.
- 📌 "Insider Report" for company culture fit: AI compares user’s skills & values with company culture and scores match percentage.
- 🏆 Provides tailored recommendations on what to emphasize in applications.
- 💰 Real-time salary benchmarking: Estimates salary expectations based on role, experience, and market trends.

### **2. CV Analysis & Rebuild**

- 📄 AI scans CVs and provides insights on strengths, weaknesses, and missing skills.
- 🎯 Suggests tailored improvements to align with company culture and job descriptions.
- 📝 AI-powered personalized cover letter: Generates a customized cover letter based on job description, company culture, and user experience.

### **3. Mock Interview with AI**

- 🤖 AI chatbot simulates HR and technical interviews based on collected company data.
- 🗣️ Provides real-time feedback on answers, tone, and confidence.
- 🧠 AI-powered behavioral assessment: Analyzes soft skills and provides suggestions to enhance interview performance.

### **4. Job & Career Enhancement**

- 🔄 Competitor job match: If a user doesn’t fit well with a company, AI suggests alternative companies hiring for similar roles.
- 📩 Weekly career insights newsletter: Personalized updates on job market trends, company insights, and skill development tips.

---

## 🚀 Project Setup Instructions

This guide will help you run both the **Backend**, **Frontend**, and **Data Scripts**.

---

## 📌 Backend Setup

| Step | Command | Description |
|----- |-------- |------------ |
| 1 | `cd ./AI-Powered-Tool-for-Company-Analysis-Interview-Preparation/Server` | Navigate to the `Server` folder |
| 2 | `npm i` | Install all backend dependencies |
| 3 | `npm run start` | Run the backend server |

---

## 📌 Frontend Setup

| Step | Command | Description |
|----- |-------- |------------ |
| 1 | `cd ./AI-Powered-Tool-for-Company-Analysis-Interview-Preparation/Client` | Navigate to the `Client` folder |
| 2 | `npm i` | Install all frontend dependencies |
| 3 | `npm run dev` | Run the frontend development server |

---

## 📌 Data Scripts

| Step | Action | Link / Description |
|----- |------- |--------------------|
| 1 | Go to Data Scripts Folder | [Data Scripts](https://github.com/engmohamedtarek1/AI-Powered-Tool-for-Company-Analysis-Interview-Preparation/tree/main/Server/Data) |
| 2 | Run necessary scripts as needed | Follow specific script instructions in the `Data` folder |

---

## ✅ Notes:
- Make sure both **backend** and **frontend** servers are running simultaneously.
- Check the `.env` files if environment variables are required.
- For any issues, ensure Node.js and npm are installed properly.

---

## 📌 Environment Variables

Create a `.env` file in the `Server` directory and add the following:

```env
# Environment
PORT=5500
NODE_ENV=development

# Database
DATABASE_URL=mongodb+srv://name:<DATABASE_PASSWORD>@cluster0.tw0gc.mongodb.net/project_name?retryWrites=true&w=majority&appName=Cluster0
DATABASE_PASSWORD=pPpkUmLKvBJlMdwr

# Gemini
GEMINI_API_KEY=AIdsSyAa2ISxjQoDVEyNWQ7mswyJn-80TtW2T0k
```
