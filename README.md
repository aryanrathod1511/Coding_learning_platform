# Coding Learning Platform 🚀  [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://coding-learning-zeta.vercel.app/)  

> **Software Engineering Project (Group 17)**  
> An all-in-one solution to find a structured and efficient way to learn coding.

---

## 📖 Overview

The **Coding Learning Platform** is designed to help students and aspiring developers master programming through a personalized, structured, and interactive experience. Unlike generic course sites, our platform utilizes AI to generate custom learning roadmaps based on your experience level, provides an integrated IDE with code analysis, and offers intelligent, context-aware AI assistance.

## ✨ Key Features

### 🔐 Secure Authentication
* **Flexible Login:** Sign up via Email/Password or use OAuth 2.0 with Google and GitHub.
* **Security:** Email verification via time-sensitive links and secure password hashing.

### 🗺️ Personalized Learning Roadmaps
* **AI-Generated Paths:** Generate a curriculum tailored to your level (Beginner, Intermediate, Advanced) or target career role.
* **Topic-Based Modules:** Roadmaps are broken down into digestible topic-based modules with difficulty tags (Easy, Medium, Hard).
* **Course Management:** Pin your active roadmaps to the dashboard or delete old ones to keep your workspace focused.

### 💻 Integrated IDE & Tools
* **Browser-Based Editor:** Write, compile, and run code directly within the platform. No setup required.
* **Complexity Analysis:** Instantly analyze your code to get Time and Space Complexity (Big-O) estimates.
* **Smart Features:** Includes detailed code analysis and suggests potential optimization.

### 🤖 AI Assistance & Resources
* **Contextual Chat:** A dedicated AI chat window for every subtopic to answer specific questions.
* **Explanation Generator:** Instantly generate customised text-based summaries for any concept.
* **Curated Resources:** AI fetches and ranks relevant Youtube Videos and Articles across the internet for every topic.

### 📝 Evaluation & Documentation
* **Quizzes:** Test your knowledge with quizzes after every module.
* **Robust Notes System:** Take notes using Markdown or standard text. Support for Importing and Exporting notes locally.
* **Progress Tracking:** Track module completion percentages and project milestones directly on your profile.

---

## 🛠️ Tech Stack

* **Frontend:** React / Next.js (Hosted on Vercel)
* **Backend:** Node.js, Express (Hosted on Render)
* **Database:** MongoDB
* Used **AWS S3** to store directory structure and code written in the in-built IDE.
* **Authentication:** Passport.js / OAuth Strategies (Google, GitHub)
* **Security:** Bcrypt (Hashing), JWT (Tokens)
* **AI Integration:** Large Language Model APIs (for Roadmap & Chat)

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
* Node.js (v16+)
* npm or yarn
* Git

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/Om1201/IT314_Project.git
    cd IT314_Project
    ```

2. **Install Dependencies**
    ```bash

    #Install backend dependecies
    cd server
    npm install

   #Install frontend dependencies
    cd ../client
    npm install

    ```

3. **Environment Configuration**
    Create a `.env` file in the root/server directory with variables shown in env_example.

4. **Run the Application**
    ```bash
    # Start the backend server
    npm start 
    # Start the frontend client
    npm run dev
    ```

---

<p align="center">
  Built with ❤️ by Group 17 as IT314 Software Engineering course project
</p>
